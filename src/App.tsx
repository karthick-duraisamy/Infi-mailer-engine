import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import { NavbarSkeleton } from "./components/skeletonLoader";
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

function App() {
  const [activeItem, setActiveItem] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null | any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [emails, setEmails] = useState<any[]>([]);
  const [deletedEmails, setDeletedEmails] = useState<any[]>([]);
  const [customLabels, setCustomLabels] =
    useState<CustomLabel[]>(mockCustomLabels);
  const [showNotification, setShowNotification] = useState(false);
  const [differentNotificationCount, setDifferentNotificationCount] = useState<number | undefined>(undefined)
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
  const [notificationState, setNotificationState] = useState<
    number | undefined
  >(undefined);
  const [searchFilter, setSearchFilter] = useState<any>({
    search: undefined,
  });
  const dispatch = useDispatch();

  // const [sidebarWidth, setSidebarWidth] = useState(64); // default to collapsed width

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

  // useEffect(() => {
  //   getMailList({});
  // }, []);

  useEffect(() => {
    // Initial call
    getMailList(filterData);

    // Set interval
    const intervalId = setInterval(() => {
      getMailList(filterData);
    }, 60000); // Poll every 150 seconds

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [getMailList]);

  useEffect(() => {
    console.log(notificationState);
  }, [notificationState]);

  useEffect(() => {
    if (getMailListResponse?.isSuccess) {
      const staticList = (getMailListResponse as any)?.data?.response?.data
        ?.results;
      const latestCount = Number(
        (getMailListResponse as any)?.data?.response?.data?.count
      );

      if (notificationState !== undefined) {
        if (notificationState !== latestCount) {
          setDifferentNotificationCount(latestCount - notificationState);
          setShowNotification(true);
          console.log('difference generated')
          if (localStorage.getItem("notify") === "true") {
            // alert(`You have ${differentNotificationCount} new messages`);
          }
          const timer = setTimeout(() => {
            setShowNotification(false);
          }, 3000); // hide after 3 seconds

          return () => clearTimeout(timer); // clean up
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
  }, [getMailListResponse]);

  const [labelManagerOpen, setLabelManagerOpen] = useState(false);
  const [isFullPageView, setIsFullPageView] = useState(false);
  const [composePanelOpen, setComposePanelOpen] = useState(false);
  const [lastAction, setLastAction] = useState<any>(null);

  // Calculate email counts for sidebar
  const calculateEmailCounts = () => {
    const counts: Record<string, number> = {};

    // Basic sections - show unread count
    counts.inbox =
      emails?.filter(
        (email) => (!email.is_read || email.is_read) && !email.is_deleted
      ).length || 0;
    counts.starred = emails?.filter((email) => email.is_starred).length || 0;
    counts.snoozed = 0; // Mock data doesn't have snoozed emails
    counts.bin = deletedEmails.filter((email) => email.is_deleted).length || 0;

    // Custom labels - show unread count
    emails?.forEach((label) => {
      if (label.labels && label.labels.length > 0) {
        // System labels
        let labelEmails: any[] = [];

        // Compute emailsOnly for each email
        const emailsWithEmailsOnly = emails?.map((email) => ({
          ...email,
          emailsOnly: email.to,
        }));
        // System labels

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
        counts[`label-${label.id}`] = labelEmails.filter(
          (email) => !email.is_read
        ).length;
      } else {
        // Custom labels
        const labelEmails = emails.filter((email) =>
          email.customLabels?.includes(label.id)
        );
        counts[`custom-label-${label.id}`] = labelEmails.filter(
          (email) => !email.is_read
        ).length;
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

    // Apply read status filter
    if (filters.readStatus === "read") {
      filtered = filtered.filter((email) => email.is_read === true);
    } else if (filters.readStatus === "unread") {
      filtered = filtered.filter((email) => email.is_read === false);
    } else if (filters.readStatus === "all") {
      filtered = emailList;
    }

    // Apply starred filter
    if (filters.starred) {
      filtered = filtered.filter((email) => email.is_starred);
    }

    // Apply attachment filter (mock logic - in real app, check email content)
    if (filters.hasAttachment) {
      filtered = filtered.filter((email) =>
        email.messages.some(
          (message: any) =>
            message.content.toLowerCase().includes("attach") ||
            message.content.toLowerCase().includes("file") ||
            message.content.toLowerCase().includes("document")
        )
      );
    }

    // Apply date range filter
    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter((email) => {
        const emailDate = new Date(email.created_at);
        const fromDate = filters.dateRange.from
          ? new Date(filters.dateRange.from)
          : null;
        const toDate = filters.dateRange.to
          ? new Date(filters.dateRange.to + "T23:59:59")
          : null;

        return (
          (!fromDate || emailDate >= fromDate) &&
          (!toDate || emailDate <= toDate)
        );
      });
    }

    // Apply intent-based filter
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
        // Handle emails without intent labels as 'new'
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

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "oldest":
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        case "newest":
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        case "subject-az":
          return a.subject.localeCompare(b.subject);
        case "subject-za":
          return b.subject.localeCompare(a.subject);
        case "sender-az":
          return a.sender.localeCompare(b.from_address);
        case "sender-za":
          return b.sender.localeCompare(a.from_address);
        case "starred-first":
          if (a.is_starred && !b.is_starred) return -1;
          if (!a.is_starred && b.is_starred) return 1;
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        default:
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
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
        conversationEmails: [email], // Each email is its own conversation
      }))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }, [emails]);

  // Filtering logic
  const filteredEmails = useMemo(() => {
    let filtered = conversations;

    // Filter by section
    switch (activeItem) {
      case "inbox":
        filtered = conversations?.filter((email) => !email.is_deleted);
        break;
      case "starred":
        filtered = conversations?.filter((email) => email.is_starred);
        break;
      case "snoozed":
        // For demo, show empty snoozed
        filtered = [];
        break;
      case "bin":
        // Show deleted emails
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
        // Handle custom labels
        if (activeItem.startsWith("custom-label-")) {
          const labelId = activeItem.replace("custom-label-", "");
          filtered = conversations?.filter((email) =>
            email.customLabels?.includes(labelId)
          );
        }
        break;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered?.filter(
        (email) =>
          email.subject.toLowerCase().includes(query) ||
          email.from_adress.toLowerCase().includes(query) ||
          email.preview.toLowerCase().includes(query) ||
          email.messages.some((message: any) =>
            message.content.toLowerCase().includes(query)
          ) ||
          // Search in custom labels
          (email.customLabels &&
            email.customLabels.some((labelId: any) => {
              const label = customLabels.find((l) => l.id === labelId);
              return label?.name.toLowerCase().includes(query);
            }))
      );
    }

    // Apply advanced filters
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
    // Mark email as read when selected
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
    // Store previous state for undo
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

    // If we're currently in the starred section and the email is being unstarred,
    // clear the selection to avoid showing an email that's no longer in this section
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
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query: string) => {
    // setSearchFilter(query)
    dispatch(setFilterSettings({ search: query }));
    // setSearchQuery(query);
  };

  const handleSectionChange = (section: string) => {
    setActiveItem(section);
    setSelectedEmail(null); // Clear selected email when changing sections
    setSidebarOpen(false); // Close sidebar on mobile when selecting item
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
    // In a real app, you would make an API call here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    // alert("Email sent successfully!");

    // Close compose panel
    setComposePanelOpen(false);
  };

  const handleSaveDraft = async (emailData: ComposeEmailData) => {
    // In a real app, you would make an API call here
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show success message
    if (
      emailData.to.length > 0 ||
      emailData.subject.trim() ||
      emailData.body.trim()
    ) {
      // alert("Draft saved successfully!");
    }

    // Close compose panel
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

    // In a real app, you would make an API call here
    // console.log("Updating label:", labelId, updates);
  };

  const handleDeleteLabel = (labelId: string) => {
    // Remove label from all emails
    setEmails((prev) =>
      prev?.map((email) => ({
        ...email,
        customLabels:
          email.customLabels?.filter((id: any) => id !== labelId) || [],
      }))
    );

    // Remove label from labels list
    setCustomLabels((prev) => prev.filter((label) => label.id !== labelId));

    // If currently viewing this label, switch to inbox
    if (activeItem === `custom-label-${labelId}`) {
      setActiveItem("inbox");
    }

    // In a real app, you would make an API call here
    // console.log("Deleting label:", labelId);
  };

  const handleEmailLabelsChange = (emailIds: string[], labelIds: string[]) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.message_id)
          ? { ...email, customLabels: labelIds }
          : email
      )
    );

    // Clear checked emails after label operation
    setCheckedEmails(new Set());

    // console.log(`Updated labels for ${emailIds.length} emails:`, labelIds);
  };

  const handleBulkMarkAsRead = (emailIds: string[], isRead: boolean) => {
    // Store previous state for undo
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

    // Clear checked emails after action
    setCheckedEmails(new Set());

    // console.log(
    //   `Marked ${emailIds.length} emails as ${isRead ? "read" : "unread"}`
    // );
  };

  const handleBulkDelete = (emailIds: string[]) => {
    // Store previous state for undo
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

    // Add them to deletedEmails
    setDeletedEmails((prev) => [...prev, ...emailsToDelete]);

    // Also update the emails state to mark them as deleted
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.message_id)
          ? { ...email, is_deleted: true }
          : email
      )
    );

    // Clear checked emails and selected email if deleted
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.message_id)) {
      setSelectedEmail(null);
    }

    // console.log(`Deleted ${emailIds} emails`);
  };

  const handleSelectAll = () => {
    const allEmailIds = filteredEmails.map((email) => email.message_id);
    setCheckedEmails(new Set(allEmailIds));
  };

  const handleUnselectAll = () => {
    setCheckedEmails(new Set());
  };

  const handleDeleteEmail = (emailId: string) => {
    // Find the email to delete
    const emailToDelete = emails?.find((email) => email.message_id === emailId);
    if (!emailToDelete) return;

    // Move email to deleted emails
    setDeletedEmails((prev) => [...prev, emailToDelete]);

    // Remove from active emails
    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        email.message_id === emailId
          ? { ...email, is_deleted: !email.is_deleted }
          : email
      )
    );

    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.message_id === emailId) {
      setSelectedEmail(null);
    }

    // console.log(`Email moved to bin: ${emailToDelete.subject}`);
  };

  const handleRestoreEmail = (emailId: string) => {
    // Find the email to restore
    const emailToRestore = deletedEmails.find(
      (email) => email.message_id === emailId
    );
    if (!emailToRestore) return;

    // Move email back to active emails
    setEmails((prev: any) => [...prev, emailToRestore]);

    // Remove from deleted emails
    setDeletedEmails((prev) =>
      prev.filter((email) => email.message_id !== emailId)
    );

    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.message_id === emailId) {
      setSelectedEmail(null);
    }

    console.log(`Email restored from bin: ${emailToRestore.subject}`);
  };

  const handleBulkRestore = (emailIds: string[]) => {
    // Find emails to restore
    const emailsToRestore = deletedEmails.filter((email) =>
      emailIds.includes(email.message_id)
    );

    // Move emails back to active emails
    setEmails((prev: any) => [...prev, ...emailsToRestore]);

    // Remove from deleted emails
    setDeletedEmails((prev) =>
      prev.filter((email) => !emailIds.includes(email.message_id))
    );

    // Clear checked emails and selected email if restored
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.message_id)) {
      setSelectedEmail(null);
    }

    // console.log(`Restored ${emailIds.length} emails from bin`);
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
    // console.log("Undid last action");
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

  // Helper function to update AI reply state for specific email
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

    // const generateAiReply = async (email: any, tone: string = 'professional', replyType: string = 'reply') => {
    //   setAiReplyStates(prev => ({ ...prev, isGenerating: true }));

    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // console.log(email);
    // Generate contextual reply based on email content and tone
    let generatedReply = "";
    const foundEmail = emails[emails.length - 1];

    // Handle different reply types
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

  const getContextualResponse = (email: any) => {
    const content = email[email.length - 1]?.body_plain?.toLowerCase();

    if (content.includes("meeting") || content.includes("schedule")) {
      return "I've reviewed the meeting details and will check my calendar. I'll get back to you shortly with my availability.";
    } else if (content.includes("project") || content.includes("timeline")) {
      return "I understand the project requirements and timeline. I'll review the details and provide an update by end of week.";
    } else if (content.includes("review") || content.includes("feedback")) {
      return "Thank you for sharing this information. I'll review the details and provide my feedback within the next 2 business days.";
    } else if (content.includes("urgent") || content.includes("asap")) {
      return "I understand this is urgent. I'll prioritize this and get back to you as soon as possible.";
    } else {
      return "I've received your message and will address the points raised. I'll follow up with you soon.";
    }
  };

  return (
    <div className=" flex flex-col bg-gray-50">
      {/* {showNotification && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow-md text-sm transition-opacity duration-300">
          🔔 You have {differentNotificationCount} new messages
        </div>
      )} */}
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

      <div className="flex-1 flex overflow-hidden">
        {/* <Sidebar
          activeItem={activeItem}
          onItemSelect={handleSectionChange}
          isOpen={sidebarOpen}
          onComposeClick={handleComposeOpen}
          customLabels={customLabels}
          onManageLabels={() => setLabelManagerOpen(true)}
          emailCounts={emailCounts}
          // onClose={handleCloseSidebar}
          onWidthChange={setSidebarWidth}
        /> */}

        {getMailListResponse?.isSuccess && (
          <div
            className="flex-1 flex min-w-0 transition-all duration-200"
            // style={{ marginLeft: sidebarWidth }}
          >
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
              <div className="flex flex-1 h-full">
                {getMailListResponse?.isLoading ||
                getMailListResponse?.isFetching ? (
                  <NavbarSkeleton />
                ) : (
                  <div className="flex-shrink-0">
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
                )}

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
            )}
          </div>
        )}
      </div>

      <LabelManager
        isOpen={labelManagerOpen}
        onClose={() => setLabelManagerOpen(false)}
        labels={customLabels}
        onCreateLabel={handleCreateLabel}
        onUpdateLabel={handleUpdateLabel}
        onDeleteLabel={handleDeleteLabel}
      />

      {/* Compose Panel - Fixed overlay on the right side */}
      {composePanelOpen && (
        <ComposeModal
          isOpen={composePanelOpen}
          onClose={handleComposeClose}
          onSend={handleSendEmail}
          onSaveDraft={handleSaveDraft}
          isPanel={true}
        />
      )}
    </div>
  );
}

export default App;
