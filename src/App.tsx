import { useState, useMemo, useEffect } from "react";
import { Layout, ConfigProvider, theme, notification } from "antd";
import Header from "./components/Header";
import EmailList from "./components/EmailList";
import ConversationThread from "./components/ConversationThread";
import ComposeModal, { ComposeEmailData } from "./components/ComposeModal";
import LabelManager from "./components/LabelManager";
import { Email, CustomLabel } from "./types/email";
import { mockCustomLabels } from "./data/mockLabels";
import { FilterOptions } from "./components/EmailFilters";
import { useLazyGetMailListResponseQuery } from "./service/inboxService";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSettings } from "./store/filterSlice";
import Sidebar from "./components/Sidebar";

const { Content, Sider } = Layout;

function App() {
  const [activeItem, setActiveItem] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null | any>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [emails, setEmails] = useState<any[]>([]);
  const [deletedEmails, setDeletedEmails] = useState<any[]>([]);
  const [customLabels, setCustomLabels] = useState<CustomLabel[]>(mockCustomLabels);
  const [showNotification, setShowNotification] = useState(false);
  const [differentNotificationCount, setDifferentNotificationCount] = useState<number | undefined>(undefined);
  const [checkedEmails, setCheckedEmails] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    readStatus: "all",
    starred: false,
    hasAttachment: false,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all",
  });
  const [notificationState, setNotificationState] = useState<number | undefined>(undefined);
  const [searchFilter, setSearchFilter] = useState<any>({
    search: undefined,
  });
  const dispatch = useDispatch();

  const [aiReplyStates, setAiReplyStates] = useState({
    isGenerating: false,
    showAiReply: false,
    generatedReply: "",
    tone: "professional",
  });

  const [filterData, setFilterData] = useState<any>({
    page: 1,
    page_size: 50,
    search: undefined,
    folder: 'inbox'
  });

  // Initialize notification API
  const [api, contextHolder] = notification.useNotification();

  // The following useEffect is used to set initial user and project data in localStorage
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
      );
      localStorage.setItem("project", "4");
    }
  }, []);

  const [labelManagerOpen, setLabelManagerOpen] = useState(false);
  const [isFullPageView, setIsFullPageView] = useState(false);
  const [composePanelOpen, setComposePanelOpen] = useState(false);
  const [lastAction, setLastAction] = useState<any>(null);

  useEffect(() => {
    // Initial call
    getMailList(filterData);

    // Set interval
    const intervalId = setInterval(() => {
      getMailList(filterData);
    }, 60000); // Poll every 60 seconds

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [getMailList]);

  useEffect(() => {
    if (getMailListResponse?.isSuccess) {
      const staticList = (getMailListResponse as any)?.data?.response?.data?.results;
      const latestCount = Number((getMailListResponse as any)?.data?.response?.data?.count);

      if (notificationState !== undefined) {
        if (notificationState !== latestCount) {
          setDifferentNotificationCount(latestCount - notificationState);
          setShowNotification(true);
          
          // Show Ant Design notification
          api.info({
            message: 'New Messages',
            description: `You have ${latestCount - notificationState} new messages`,
            placement: 'topRight',
            duration: 3,
          });

          const timer = setTimeout(() => {
            setShowNotification(false);
          }, 3000);

          return () => clearTimeout(timer);
        }
      }
      setNotificationState(latestCount);
      
      if (staticList && Array.isArray(staticList)) {
        setEmails(
          staticList.map((email: any) => ({
            ...email,
            intentLabel: email.labels || "new",
          }))
        );

        const deletedIds = staticList
          .filter((email: any) => email.is_deleted)
          .map((email: any) => email.message_id);

        const deletedEmails = staticList
          .filter((email: any) => deletedIds.includes(email.message_id))
          .map((email: any) => ({
            ...email,
            intentLabel: email.labels || "new",
          }));

        setDeletedEmails(deletedEmails);
      }
    }
  }, [getMailListResponse, api]);

  // Calculate email counts for sidebar
  const calculateEmailCounts = () => {
    const counts: Record<string, number> = {};

    counts.inbox = emails?.filter((email) => (!email.is_read || email.is_read) && !email.is_deleted).length || 0;
    counts.starred = emails?.filter((email) => email.is_starred).length || 0;
    counts.snoozed = 0;
    counts.bin = deletedEmails.filter((email) => email.is_deleted).length || 0;

    emails?.forEach((label) => {
      if (label.labels && label.labels.length > 0) {
        let labelEmails: any[] = [];

        switch (label.labels[0]) {
          case "work":
            labelEmails = emails.filter(
              (email) =>
                email.customLabels?.includes("work") ||
                email.from_address.includes("company.com") ||
                email.from_address.includes("techcorp.com") ||
                email.from_address.includes("consulting.com") ||
                email.from_address.includes("design.studio")
            );
            break;
          case "personal":
            labelEmails = emails.filter(
              (email) =>
                email.customLabels?.includes("personal") ||
                email.subject.toLowerCase().includes("welcome") ||
                email.from_address.includes("startup.io")
            );
            break;
          case "important":
            labelEmails = emails.filter(
              (email) =>
                email.customLabels?.includes("important") ||
                email.subject.toLowerCase().includes("urgent") ||
                email.subject.toLowerCase().includes("important") ||
                email.is_starred
            );
            break;
          case "travel":
            labelEmails = emails.filter((email) =>
              email.customLabels?.includes("travel")
            );
            break;
        }
        counts[`label-${label.id}`] = labelEmails.filter((email) => !email.is_read).length;
      } else {
        const labelEmails = emails.filter((email) =>
          email.customLabels?.includes(label.id)
        );
        counts[`custom-label-${label.id}`] = labelEmails.filter((email) => !email.is_read).length;
      }
    });

    return counts;
  };

  const emailCounts = useMemo(() => {
    return calculateEmailCounts();
  }, [emails, customLabels, deletedEmails]);

  // Apply filters and sorting
  const applyFilters = (emailList: any[]) => {
    let filtered = [...emailList];

    if (filters.readStatus === "read") {
      filtered = filtered.filter((email) => email.is_read === true);
    } else if (filters.readStatus === "unread") {
      filtered = filtered.filter((email) => email.is_read === false);
    }

    if (filters.starred) {
      filtered = filtered.filter((email) => email.is_starred);
    }

    if (filters.hasAttachment) {
      filtered = filtered.filter((email) =>
        email.messages?.some(
          (message: any) =>
            message.content?.toLowerCase().includes("attach") ||
            message.content?.toLowerCase().includes("file") ||
            message.content?.toLowerCase().includes("document")
        )
      );
    }

    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter((email) => {
        const emailDate = new Date(email.created_at);
        const fromDate = filters.dateRange.from ? new Date(filters.dateRange.from) : null;
        const toDate = filters.dateRange.to ? new Date(filters.dateRange.to + "T23:59:59") : null;

        return (
          (!fromDate || emailDate >= fromDate) &&
          (!toDate || emailDate <= toDate)
        );
      });
    }

    if (filters.intent !== "all") {
      filtered = filtered.filter((email) => {
        if (email.labels) {
          switch (filters.intent) {
            case "meetings":
              return email.labels === "meeting";
            case "notifications":
              return email.labels === "system";
            case "campaigns":
              return email.labels === "announcement";
            case "support":
              return email.labels === "feedback";
            default:
              return true;
          }
        }
        
        const emailIntent = email.labels || "new";
        const content = `${email.subject} ${email?.snippet}`.toLowerCase();
        
        switch (filters.intent) {
          case "meetings":
            return (
              emailIntent === "meeting" ||
              content.includes("meeting") ||
              content.includes("schedule") ||
              content.includes("appointment")
            );
          case "notifications":
            return (
              emailIntent === "system" ||
              content.includes("notification") ||
              content.includes("system") ||
              content.includes("alert")
            );
          case "campaigns":
            return (
              emailIntent === "announcement" ||
              content.includes("newsletter") ||
              content.includes("campaign") ||
              content.includes("marketing")
            );
          case "support":
            return (
              emailIntent === "feedback" ||
              content.includes("support") ||
              content.includes("help") ||
              content.includes("issue")
            );
          case "new":
            return emailIntent === "new";
          default:
            return emailIntent === "general";
        }
      });
    }

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "oldest":
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case "newest":
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case "subject-az":
          return a.subject.localeCompare(b.subject);
        case "subject-za":
          return b.subject.localeCompare(a.subject);
        case "sender-az":
          return a.sender?.localeCompare(b.from_address) || 0;
        case "sender-za":
          return b.sender?.localeCompare(a.from_address) || 0;
        case "starred-first":
          if (a.is_starred && !b.is_starred) return -1;
          if (!a.is_starred && b.is_starred) return 1;
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });
    
    return filtered;
  };

  // Group emails into conversations
  const conversations = useMemo(() => {
    return emails
      ?.map((email) => ({
        ...email,
        messages: email.messages || [],
        conversationEmails: [email],
      }))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }, [emails]);

  // Filtering logic
  const filteredEmails = useMemo(() => {
    let filtered = conversations;

    switch (activeItem) {
      case "inbox":
        filtered = conversations?.filter((email) => !email.is_deleted);
        break;
      case "starred":
        filtered = conversations?.filter((email) => email.is_starred);
        break;
      case "snoozed":
        filtered = [];
        break;
      case "bin":
        filtered =
          deletedEmails?.map((email) => ({
            ...email,
            messages: email.messages || [],
            conversationEmails: [email],
          })) || [];
        break;
      case "label-work":
        filtered = conversations.filter(
          (email) =>
            email.customLabels?.includes("work") ||
            email.subject.toLowerCase().includes("project") ||
            email.subject.toLowerCase().includes("meeting") ||
            email.subject.toLowerCase().includes("campaign") ||
            email.from_address.includes("company.com") ||
            email.from_address.includes("techcorp.com")
        );
        break;
      case "label-personal":
        filtered = conversations.filter(
          (email) =>
            email.customLabels?.includes("personal") ||
            email.subject.toLowerCase().includes("welcome") ||
            email.from_address.includes("startup.io")
        );
        break;
      case "label-important":
        filtered = conversations.filter(
          (email) =>
            email.customLabels?.includes("important") ||
            email.subject.toLowerCase().includes("urgent") ||
            email.subject.toLowerCase().includes("important") ||
            email.is_starred
        );
        break;
      case "label-travel":
        filtered = conversations?.filter((email) =>
          email.customLabels?.includes("travel")
        );
        break;
      default:
        if (activeItem.startsWith("custom-label-")) {
          const labelId = activeItem.replace("custom-label-", "");
          filtered = conversations?.filter((email) =>
            email.customLabels?.includes(labelId)
          );
        }
        break;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered?.filter(
        (email) =>
          email.subject.toLowerCase().includes(query) ||
          email.from_address.toLowerCase().includes(query) ||
          email.snippet?.toLowerCase().includes(query) ||
          email.messages?.some((message: any) =>
            message.content?.toLowerCase().includes(query)
          ) ||
          (email.customLabels &&
            email.customLabels.some((labelId: any) => {
              const label = customLabels.find((l) => l.id === labelId);
              return label?.name.toLowerCase().includes(query);
            }))
      );
    }

    filtered = applyFilters(filtered || []);

    return filtered;
  }, [
    emails,
    activeItem,
    searchQuery,
    filters,
    customLabels,
    conversations,
    deletedEmails,
  ]);

  const handleEmailSelect = (email: any, fullPage: boolean = false) => {
    setSelectedEmail(email);
    setIsFullPageView(fullPage);
    setEmails((prevEmails) =>
      prevEmails?.map((e) =>
        e.message_id === email.message_id ? { ...e, is_read: true } : e
      )
    );
  };

  const handleBackToList = () => {
    setIsFullPageView(false);
  };

  const handleStarToggle = (emailId: string) => {
    const email = emails?.find((email) => email.message_id === emailId);
    if (!email) return;

    const previousState = [
      { id: email.message_id, is_starred: email.is_starred },
    ];

    setLastAction({
      type: "star",
      emailIds: [emailId],
      previousState,
    });

    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        email.message_id === emailId
          ? { ...email, is_starred: !email.is_starred }
          : email
      )
    );

    if (
      activeItem === "starred" &&
      !email.is_starred &&
      selectedEmail?.id === emailId
    ) {
      setSelectedEmail(null);
    }
  };

  const handleCheckToggle = (emailId: string) => {
    setCheckedEmails((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(emailId)) {
        newSet.delete(emailId);
      } else {
        newSet.add(emailId);
      }
      return newSet;
    });
  };

  const handleMenuToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSearch = (query: string) => {
    dispatch(setFilterSettings({ search: query }));
    setSearchQuery(query);
  };

  const handleSectionChange = (section: string) => {
    setActiveItem(section);
    setSelectedEmail(null);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    dispatch(
      setFilterSettings({
        is_starred: newFilters?.starred,
        is_read: newFilters.readStatus,
        has_attachment: newFilters?.hasAttachment,
      })
    );
  };

  const handleComposeOpen = () => {
    setComposePanelOpen(true);
  };

  const handleComposeClose = () => {
    setComposePanelOpen(false);
  };

  const handleSendEmail = async (emailData: ComposeEmailData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    api.success({
      message: 'Email Sent',
      description: 'Your email has been sent successfully!',
      placement: 'topRight',
    });
    
    setComposePanelOpen(false);
  };

  const handleSaveDraft = async (emailData: ComposeEmailData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (
      emailData.to.length > 0 ||
      emailData.subject.trim() ||
      emailData.body.trim()
    ) {
      api.info({
        message: 'Draft Saved',
        description: 'Your draft has been saved successfully!',
        placement: 'topRight',
      });
    }

    setComposePanelOpen(false);
  };

  // Label Management Functions
  const handleCreateLabel = (
    labelData: Omit<CustomLabel, "id" | "createdAt">
  ) => {
    const newLabel: CustomLabel = {
      ...labelData,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    setCustomLabels((prev) => [...prev, newLabel]);
  };

  const handleUpdateLabel = (
    labelId: string,
    updates: Partial<CustomLabel>
  ) => {
    setCustomLabels((prev) =>
      prev.map((label) =>
        label.id === labelId ? { ...label, ...updates } : label
      )
    );
  };

  const handleDeleteLabel = (labelId: string) => {
    setEmails((prev) =>
      prev?.map((email) => ({
        ...email,
        customLabels:
          email.customLabels?.filter((id: any) => id !== labelId) || [],
      }))
    );

    setCustomLabels((prev) => prev.filter((label) => label.id !== labelId));

    if (activeItem === `custom-label-${labelId}`) {
      setActiveItem("inbox");
    }
  };

  const handleEmailLabelsChange = (emailIds: string[], labelIds: string[]) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.message_id)
          ? { ...email, customLabels: labelIds }
          : email
      )
    );

    setCheckedEmails(new Set());
  };

  const handleBulkMarkAsRead = (emailIds: string[], isRead: boolean) => {
    const previousState = emails
      ?.filter((email) => emailIds.includes(email.message_id))
      ?.map((email) => ({ id: email.message_id, is_read: email.is_read }));

    setLastAction({
      type: "markAsRead",
      emailIds,
      previousState,
    });

    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        emailIds.includes(email.message_id)
          ? { ...email, is_read: isRead }
          : email
      )
    );

    setCheckedEmails(new Set());
  };

  const handleBulkDelete = (emailIds: string[]) => {
    const previousState = emails?.filter((email) =>
      emailIds.includes(email.message_id)
    );

    setLastAction({
      type: "delete",
      emailIds,
      previousState,
    });

    const emailsToDelete = emails
      .filter((email) => emailIds.includes(email.message_id))
      .map((email) => ({ ...email, is_deleted: true }));

    setDeletedEmails((prev) => [...prev, ...emailsToDelete]);

    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.message_id)
          ? { ...email, is_deleted: true }
          : email
      )
    );

    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.message_id)) {
      setSelectedEmail(null);
    }
  };

  const handleSelectAll = () => {
    const allEmailIds = filteredEmails.map((email) => email.message_id);
    setCheckedEmails(new Set(allEmailIds));
  };

  const handleUnselectAll = () => {
    setCheckedEmails(new Set());
  };

  const handleDeleteEmail = (emailId: string) => {
    const emailToDelete = emails?.find((email) => email.message_id === emailId);
    if (!emailToDelete) return;

    setDeletedEmails((prev) => [...prev, emailToDelete]);

    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        email.message_id === emailId
          ? { ...email, is_deleted: !email.is_deleted }
          : email
      )
    );

    if (selectedEmail && selectedEmail.message_id === emailId) {
      setSelectedEmail(null);
    }
  };

  const handleRestoreEmail = (emailId: string) => {
    const emailToRestore = deletedEmails.find(
      (email) => email.message_id === emailId
    );
    if (!emailToRestore) return;

    setEmails((prev: any) => [...prev, emailToRestore]);

    setDeletedEmails((prev) =>
      prev.filter((email) => email.message_id !== emailId)
    );

    if (selectedEmail && selectedEmail.message_id === emailId) {
      setSelectedEmail(null);
    }
  };

  const handleBulkRestore = (emailIds: string[]) => {
    const emailsToRestore = deletedEmails.filter((email) =>
      emailIds.includes(email.message_id)
    );

    setEmails((prev: any) => [...prev, ...emailsToRestore]);

    setDeletedEmails((prev) =>
      prev.filter((email) => !emailIds.includes(email.message_id))
    );

    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.message_id)) {
      setSelectedEmail(null);
    }
  };

  const handleUndo = () => {
    if (!lastAction) return;

    switch (lastAction.type) {
      case "markAsRead":
        setEmails((prevEmails) =>
          prevEmails?.map((email) => {
            const prevState = lastAction.previousState.find(
              (state: any) => state.id === email.message_id
            );
            return prevState ? { ...email, is_read: prevState.is_read } : email;
          })
        );
        break;

      case "delete":
        setEmails((prevEmails: any) => [
          ...prevEmails,
          ...lastAction.previousState,
        ]);
        break;

      case "star":
        setEmails((prevEmails) =>
          prevEmails?.map((email) => {
            const prevState = lastAction.previousState.find(
              (state: any) => state.id === email.message_id
            );
            return prevState
              ? { ...email, is_starred: prevState.is_starred }
              : email;
          })
        );
        break;
    }

    setLastAction(null);
  };

  const getAiReplyState = (emailId: string): any => {
    return (
      aiReplyStates || {
        isGenerating: false,
        showAiReply: false,
        generatedReply: "",
        tone: "professional",
      }
    );
  };

  const updateAiReplyState = (emailId: string, newState: any) => {
    setAiReplyStates((prev: any) => ({
      ...prev,
      [emailId]: newState,
    }));
  };

  const generateAiReply = async (
    email: any,
    tone: string = "professional",
    replyType: string = "reply"
  ) => {
    const currentState = getAiReplyState(email.message_id);
    updateAiReplyState(email.message_id, {
      ...currentState,
      isGenerating: true,
      showAiReply: false,
      replyType: replyType as any,
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    let generatedReply = "";
    const foundEmail = emails[emails.length - 1];

    if (replyType) {
      generatedReply = foundEmail?.ai_response;
    }

    setAiReplyStates((prev) => ({
      ...prev,
      isGenerating: false,
      showAiReply: true,
      generatedReply,
      tone: tone as any,
    }));
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
          fontFamily: 'Open Sans, sans-serif',
        },
      }}
    >
      {contextHolder}
      <Layout style={{ height: '100vh' }}>
        <Header
          onMenuToggle={handleMenuToggle}
          onSearch={handleSearch}
          onFiltersChange={handleFiltersChange}
          filters={filters}
          checkedEmails={checkedEmails}
          onBulkMarkAsRead={handleBulkMarkAsRead}
          onBulkDelete={handleBulkDelete}
          onSelectAll={handleSelectAll}
          onUnselectAll={handleUnselectAll}
          onUndo={handleUndo}
          hasSelection={checkedEmails.size > 0}
          onComposeClick={handleComposeOpen}
        />

        <Layout>
          <Sider
            width={250}
            collapsed={sidebarCollapsed}
            onCollapse={setSidebarCollapsed}
            style={{
              background: '#fff',
              borderRight: '1px solid #f0f0f0',
            }}
            breakpoint="lg"
            collapsedWidth={0}
          >
            <Sidebar
              activeItem={activeItem}
              onItemSelect={handleSectionChange}
              isOpen={!sidebarCollapsed}
              onComposeClick={handleComposeOpen}
              customLabels={customLabels}
              onManageLabels={() => setLabelManagerOpen(true)}
              emailCounts={emailCounts}
            />
          </Sider>

          <Layout>
            {getMailListResponse?.isSuccess && (
              <Content style={{ display: 'flex', height: '100%' }}>
                {isFullPageView ? (
                  <ConversationThread
                    email={selectedEmail}
                    onClose={() => setSelectedEmail(null)}
                    onBack={handleBackToList}
                    isFullPage={true}
                    aiReplyState={getAiReplyState(selectedEmail?.message_id || "")}
                    onGenerateAiReply={generateAiReply}
                    onAiReplyStateChange={(newState) =>
                      selectedEmail?.message_id &&
                      updateAiReplyState(selectedEmail.message_id, newState)
                    }
                    customLabels={customLabels}
                    onEmailLabelsChange={handleEmailLabelsChange}
                    onCreateLabel={handleCreateLabel}
                    onDeleteEmail={handleDeleteEmail}
                    onRestoreEmail={handleRestoreEmail}
                    activeSection={activeItem}
                  />
                ) : (
                  <>
                    <div style={{ width: '400px', borderRight: '1px solid #f0f0f0' }}>
                      <EmailList
                        emails={filteredEmails}
                        selectedEmailId={selectedEmail?.message_id || null}
                        onEmailSelect={handleEmailSelect}
                        onStarToggle={handleStarToggle}
                        onCheckToggle={handleCheckToggle}
                        checkedEmails={checkedEmails}
                        activeSection={activeItem}
                        customLabels={customLabels}
                        onEmailLabelsChange={handleEmailLabelsChange}
                        onCreateLabel={handleCreateLabel}
                        onBulkMarkAsRead={handleBulkMarkAsRead}
                        onBulkDelete={handleBulkDelete}
                        onBulkRestore={handleBulkRestore}
                        onSelectAll={handleSelectAll}
                        onUnselectAll={handleUnselectAll}
                        setEmails={setEmails}
                        readStatus={filters?.readStatus}
                        searchFilter={searchFilter}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <ConversationThread
                        email={selectedEmail}
                        onClose={() => setSelectedEmail(null)}
                        isFullPage={false}
                        aiReplyState={getAiReplyState(selectedEmail?.id || "")}
                        onGenerateAiReply={generateAiReply}
                        onAiReplyStateChange={(newState) =>
                          selectedEmail?.message_id &&
                          updateAiReplyState(selectedEmail.message_id, newState)
                        }
                        customLabels={customLabels}
                        onEmailLabelsChange={handleEmailLabelsChange}
                        onCreateLabel={handleCreateLabel}
                        onDeleteEmail={handleDeleteEmail}
                        onRestoreEmail={handleRestoreEmail}
                        activeSection={activeItem}
                        onStarToggle={handleStarToggle}
                      />
                    </div>
                  </>
                )}
              </Content>
            )}
          </Layout>
        </Layout>

        <LabelManager
          isOpen={labelManagerOpen}
          onClose={() => setLabelManagerOpen(false)}
          labels={customLabels}
          onCreateLabel={handleCreateLabel}
          onUpdateLabel={handleUpdateLabel}
          onDeleteLabel={handleDeleteLabel}
        />

        {composePanelOpen && (
          <ComposeModal
            isOpen={composePanelOpen}
            onClose={handleComposeClose}
            onSend={handleSendEmail}
            onSaveDraft={handleSaveDraft}
            isPanel={true}
          />
        )}
      </Layout>
    </ConfigProvider>
  );
}

export default App;