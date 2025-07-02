import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import ConversationThread from './components/ConversationThread';
import ComposeModal, { ComposeEmailData } from './components/ComposeModal';
import LabelManager from './components/LabelManager';
import { Email, CustomLabel } from './types/email';
import { mockEmails } from './data/mockEmails';
import { mockCustomLabels } from './data/mockLabels';
import { FilterOptions } from './components/EmailFilters';

function App() {
  const [activeItem, setActiveItem] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [customLabels, setCustomLabels] = useState<CustomLabel[]>(mockCustomLabels);
  const [checkedEmails, setCheckedEmails] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    readStatus: 'all',
    starred: false,
    hasAttachment: false,
    sortBy: 'newest',
    dateRange: { from: '', to: '' },
    intent: 'all',
  });
  const [aiReplyState, setAiReplyState] = useState({
    isGenerating: false,
    showAiReply: false,
    generatedReply: '',
    tone: 'professional',
  });
  const [composeModalOpen, setComposeModalOpen] = useState(false);
  const [labelManagerOpen, setLabelManagerOpen] = useState(false);

  // Apply filters and sorting
  const applyFilters = (emailList: Email[]) => {
    let filtered = [...emailList];

    // Apply read status filter
    if (filters.readStatus === 'read') {
      filtered = filtered.filter(email => email.isRead);
    } else if (filters.readStatus === 'unread') {
      filtered = filtered.filter(email => !email.isRead);
    }

    // Apply starred filter
    if (filters.starred) {
      filtered = filtered.filter(email => email.isStarred);
    }

    // Apply attachment filter (mock logic - in real app, check email content)
    if (filters.hasAttachment) {
      filtered = filtered.filter(email => 
        email.messages.some(message => 
          message.content.toLowerCase().includes('attach') ||
          message.content.toLowerCase().includes('file') ||
          message.content.toLowerCase().includes('document')
        )
      );
    }

    // Apply date range filter
    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter(email => {
        const emailDate = new Date(email.timestamp);
        const fromDate = filters.dateRange.from ? new Date(filters.dateRange.from) : null;
        const toDate = filters.dateRange.to ? new Date(filters.dateRange.to + 'T23:59:59') : null;

        return (!fromDate || emailDate >= fromDate) && (!toDate || emailDate <= toDate);
      });
    }

    // Apply intent-based filter
    if (filters.intent !== 'all') {
      filtered = filtered.filter(email => {
        if (email.intentLabel) {
          switch (filters.intent) {
            case 'meetings':
              return email.intentLabel === 'meeting';
            case 'notifications':
              return email.intentLabel === 'system';
            case 'campaigns':
              return email.intentLabel === 'announcement';
            case 'support':
              return email.intentLabel === 'feedback';
            default:
              return true;
          }
        }
        // Fallback to content-based filtering for emails without intent labels
        const content = `${email.subject} ${email.preview}`.toLowerCase();
        switch (filters.intent) {
          case 'meetings':
            return content.includes('meeting') || content.includes('schedule') || content.includes('appointment');
          case 'notifications':
            return content.includes('notification') || content.includes('system') || content.includes('alert');
          case 'campaigns':
            return content.includes('newsletter') || content.includes('campaign') || content.includes('marketing');
          case 'support':
            return content.includes('support') || content.includes('help') || content.includes('issue');
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'oldest':
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        case 'newest':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'subject-az':
          return a.subject.localeCompare(b.subject);
        case 'subject-za':
          return b.subject.localeCompare(a.subject);
        case 'sender-az':
          return a.sender.localeCompare(b.sender);
        case 'sender-za':
          return b.sender.localeCompare(a.sender);
        case 'starred-first':
          if (a.isStarred && !b.isStarred) return -1;
          if (!a.isStarred && b.isStarred) return 1;
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

    return filtered;
  };

  // Filter emails based on active section, search query, and filters
  const filteredEmails = useMemo(() => {
    let filtered = emails;

    // Filter by section
    switch (activeItem) {
      case 'inbox':
        // For demo purposes, show all emails in inbox
        break;
      case 'sent':
        // Filter sent emails (for demo, we'll show emails from current user)
        filtered = emails.filter(email => 
          email.senderEmail === 'john.doe@company.com' || 
          email.sender === 'John Doe'
        );
        break;
      case 'drafts':
        // For demo, show empty drafts
        filtered = [];
        break;
      case 'starred':
        filtered = emails.filter(email => email.isStarred);
        break;
      case 'snoozed':
        // For demo, show empty snoozed
        filtered = [];
        break;
      case 'label-work':
        filtered = emails.filter(email => 
          email.customLabels?.includes('work') ||
          email.subject.toLowerCase().includes('project') ||
          email.subject.toLowerCase().includes('meeting') ||
          email.subject.toLowerCase().includes('campaign') ||
          email.senderEmail.includes('company.com') ||
          email.senderEmail.includes('techcorp.com')
        );
        break;
      case 'label-personal':
        filtered = emails.filter(email => 
          email.customLabels?.includes('personal') ||
          email.subject.toLowerCase().includes('welcome') ||
          email.senderEmail.includes('startup.io')
        );
        break;
      case 'label-important':
        filtered = emails.filter(email => 
          email.customLabels?.includes('important') ||
          email.subject.toLowerCase().includes('urgent') ||
          email.subject.toLowerCase().includes('important') ||
          email.isStarred
        );
        break;
      case 'label-travel':
        filtered = emails.filter(email => 
          email.customLabels?.includes('travel')
        );
        break;
      default:
        // Handle custom labels
        if (activeItem.startsWith('custom-label-')) {
          const labelId = activeItem.replace('custom-label-', '');
          filtered = emails.filter(email => 
            email.customLabels?.includes(labelId)
          );
        }
        break;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(email =>
        email.subject.toLowerCase().includes(query) ||
        email.sender.toLowerCase().includes(query) ||
        email.preview.toLowerCase().includes(query) ||
        email.messages.some(message => 
          message.content.toLowerCase().includes(query)
        ) ||
        // Search in custom labels
        (email.customLabels && email.customLabels.some(labelId => {
          const label = customLabels.find(l => l.id === labelId);
          return label?.name.toLowerCase().includes(query);
        }))
      );
    }

    // Apply advanced filters
    filtered = applyFilters(filtered);

    return filtered;
  }, [emails, activeItem, searchQuery, filters, customLabels]);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    // Mark email as read when selected
    setEmails(prevEmails => 
      prevEmails.map(e => 
        e.id === email.id ? { ...e, isRead: true } : e
      )
    );
  };

  const handleStarToggle = (emailId: string) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const handleCheckToggle = (emailId: string) => {
    setCheckedEmails(prev => {
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
    setSearchQuery(query);
  };

  const handleSectionChange = (section: string) => {
    setActiveItem(section);
    setSelectedEmail(null); // Clear selected email when changing sections
    setSidebarOpen(false); // Close sidebar on mobile when selecting item
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleComposeOpen = () => {
    setComposeModalOpen(true);
  };

  const handleComposeClose = () => {
    setComposeModalOpen(false);
  };

  const handleSendEmail = async (emailData: ComposeEmailData) => {
    // Simulate API call to send email
    console.log('Sending email:', emailData);
    
    // In a real app, you would make an API call here
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    alert('Email sent successfully!');
    
    // Close compose modal
    setComposeModalOpen(false);
  };

  const handleSaveDraft = async (emailData: ComposeEmailData) => {
    // Simulate API call to save draft
    console.log('Saving draft:', emailData);
    
    // In a real app, you would make an API call here
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Show success message
    if (emailData.to.length > 0 || emailData.subject.trim() || emailData.body.trim()) {
      alert('Draft saved successfully!');
    }
    
    // Close compose modal
    setComposeModalOpen(false);
  };

  // Label Management Functions
  const handleCreateLabel = (labelData: Omit<CustomLabel, 'id' | 'createdAt'>) => {
    const newLabel: CustomLabel = {
      ...labelData,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    setCustomLabels(prev => [...prev, newLabel]);
    
    // In a real app, you would make an API call here
    console.log('Creating label:', newLabel);
  };

  const handleUpdateLabel = (labelId: string, updates: Partial<CustomLabel>) => {
    setCustomLabels(prev =>
      prev.map(label =>
        label.id === labelId ? { ...label, ...updates } : label
      )
    );
    
    // In a real app, you would make an API call here
    console.log('Updating label:', labelId, updates);
  };

  const handleDeleteLabel = (labelId: string) => {
    // Remove label from all emails
    setEmails(prev =>
      prev.map(email => ({
        ...email,
        customLabels: email.customLabels?.filter(id => id !== labelId) || []
      }))
    );
    
    // Remove label from labels list
    setCustomLabels(prev => prev.filter(label => label.id !== labelId));
    
    // If currently viewing this label, switch to inbox
    if (activeItem === `custom-label-${labelId}`) {
      setActiveItem('inbox');
    }
    
    // In a real app, you would make an API call here
    console.log('Deleting label:', labelId);
  };

  const handleEmailLabelsChange = (emailIds: string[], labelIds: string[]) => {
    setEmails(prev =>
      prev.map(email =>
        emailIds.includes(email.id)
          ? { ...email, customLabels: labelIds }
          : email
      )
    );
    
    // In a real app, you would make an API call here
    console.log('Updating email labels:', emailIds, labelIds);
  };

  const generateAiReply = async (email: Email, tone: string = 'professional') => {
    setAiReplyState(prev => ({ ...prev, isGenerating: true }));

    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate contextual reply based on email content and tone
    const lastMessage = email.messages[email.messages.length - 1];
    let generatedReply = '';

    switch (tone) {
      case 'friendly':
        generatedReply = `Hi ${lastMessage.sender.split(' ')[0]},\n\nThanks for your email! I appreciate you reaching out.\n\n${getContextualResponse(email)}\n\nLooking forward to hearing from you!\n\nBest regards`;
        break;
      case 'concise':
        generatedReply = `Hi,\n\n${getContextualResponse(email)}\n\nBest regards`;
        break;
      default: // professional
        generatedReply = `Dear ${lastMessage.sender},\n\nThank you for your email regarding ${email.subject.toLowerCase()}.\n\n${getContextualResponse(email)}\n\nPlease let me know if you have any questions.\n\nBest regards`;
    }

    setAiReplyState(prev => ({
      ...prev,
      isGenerating: false,
      showAiReply: true,
      generatedReply,
      tone: tone as any
    }));
  };

  const getContextualResponse = (email: Email) => {
    const content = email.messages[email.messages.length - 1].content.toLowerCase();

    if (content.includes('meeting') || content.includes('schedule')) {
      return "I've reviewed the meeting details and will check my calendar. I'll get back to you shortly with my availability.";
    } else if (content.includes('project') || content.includes('timeline')) {
      return "I understand the project requirements and timeline. I'll review the details and provide an update by end of week.";
    } else if (content.includes('review') || content.includes('feedback')) {
      return "Thank you for sharing this information. I'll review the details and provide my feedback within the next 2 business days.";
    } else if (content.includes('urgent') || content.includes('asap')) {
      return "I understand this is urgent. I'll prioritize this and get back to you as soon as possible.";
    } else {
      return "I've received your message and will address the points raised. I'll follow up with you soon.";
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header 
        onMenuToggle={handleMenuToggle} 
        onSearch={handleSearch}
        onFiltersChange={handleFiltersChange}
        filters={filters}
      />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          activeItem={activeItem} 
          onItemSelect={handleSectionChange}
          isOpen={sidebarOpen}
          onComposeClick={handleComposeOpen}
          customLabels={customLabels}
          onManageLabels={() => setLabelManagerOpen(true)}
        />

        <div className="flex-1 flex min-w-0">
          <div className="w-80 flex-shrink-0">
            <EmailList
              emails={filteredEmails}
              selectedEmailId={selectedEmail?.id || null}
              onEmailSelect={handleEmailSelect}
              onStarToggle={handleStarToggle}
              onCheckToggle={handleCheckToggle}
              checkedEmails={checkedEmails}
              activeSection={activeItem}
              customLabels={customLabels}
              onEmailLabelsChange={handleEmailLabelsChange}
              onCreateLabel={handleCreateLabel}
            />
          </div>

          <ConversationThread 
            email={selectedEmail} 
            onClose={() => setSelectedEmail(null)}
            aiReplyState={aiReplyState}
            onGenerateAiReply={generateAiReply}
            onAiReplyStateChange={setAiReplyState}
            customLabels={customLabels}
            onEmailLabelsChange={handleEmailLabelsChange}
            onCreateLabel={handleCreateLabel}
          />
        </div>
      </div>

      <ComposeModal
        isOpen={composeModalOpen}
        onClose={handleComposeClose}
        onSend={handleSendEmail}
        onSaveDraft={handleSaveDraft}
      />

      <LabelManager
        isOpen={labelManagerOpen}
        onClose={() => setLabelManagerOpen(false)}
        labels={customLabels}
        onCreateLabel={handleCreateLabel}
        onUpdateLabel={handleUpdateLabel}
        onDeleteLabel={handleDeleteLabel}
      />
    </div>
  );
}

export default App;