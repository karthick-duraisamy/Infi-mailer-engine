import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Save, Paperclip, Users, Eye, EyeOff, Upload, Trash2, Sparkles, RotateCcw, Wand2 } from 'lucide-react';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (emailData: ComposeEmailData) => void;
  onSaveDraft: (emailData: ComposeEmailData) => void;
  initialData?: Partial<ComposeEmailData>;
}

export interface ComposeEmailData {
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
  attachments: File[];
}

interface Attachment {
  file: File;
  id: string;
}

type ToneType = 'professional' | 'friendly' | 'concise' | 'persuasive';

interface AIState {
  isGenerating: boolean;
  showAIPanel: boolean;
  generatedContent: string;
  selectedTone: ToneType;
  hasGenerated: boolean;
}

const ComposeModal: React.FC<ComposeModalProps> = ({
  isOpen,
  onClose,
  onSend,
  onSaveDraft,
  initialData,
}) => {
  const [to, setTo] = useState<string[]>(initialData?.to || []);
  const [cc, setCc] = useState<string[]>(initialData?.cc || []);
  const [bcc, setBcc] = useState<string[]>(initialData?.bcc || []);
  const [subject, setSubject] = useState(initialData?.subject || '');
  const [body, setBody] = useState(initialData?.body || '');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [toInput, setToInput] = useState('');
  const [ccInput, setCcInput] = useState('');
  const [bccInput, setBccInput] = useState('');

  // AI State
  const [aiState, setAiState] = useState<AIState>({
    isGenerating: false,
    showAIPanel: false,
    generatedContent: '',
    selectedTone: 'professional',
    hasGenerated: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-save draft functionality
  useEffect(() => {
    if (!isOpen) return;

    const autoSaveInterval = setInterval(() => {
      if (to.length > 0 || subject.trim() || body.trim()) {
        handleSaveDraft(true); // Silent save
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [to, subject, body, isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (to.length === 0) {
      newErrors.to = 'At least one recipient is required';
    } else {
      const invalidEmails = to.filter(email => !validateEmail(email));
      if (invalidEmails.length > 0) {
        newErrors.to = `Invalid email addresses: ${invalidEmails.join(', ')}`;
      }
    }

    // Validate CC emails
    const invalidCcEmails = cc.filter(email => !validateEmail(email));
    if (invalidCcEmails.length > 0) {
      newErrors.cc = `Invalid CC email addresses: ${invalidCcEmails.join(', ')}`;
    }

    // Validate BCC emails
    const invalidBccEmails = bcc.filter(email => !validateEmail(email));
    if (invalidBccEmails.length > 0) {
      newErrors.bcc = `Invalid BCC email addresses: ${invalidBccEmails.join(', ')}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailInput = (
    value: string,
    currentEmails: string[],
    setEmails: (emails: string[]) => void,
    setInput: (value: string) => void
  ) => {
    if (value.includes(',') || value.includes(';') || value.includes(' ')) {
      const newEmails = value
        .split(/[,;\s]+/)
        .map(email => email.trim())
        .filter(email => email.length > 0);
      
      const validEmails = newEmails.filter(email => validateEmail(email));
      const uniqueEmails = [...new Set([...currentEmails, ...validEmails])];
      
      setEmails(uniqueEmails);
      setInput('');
    } else {
      setInput(value);
    }
  };

  const removeEmail = (emailToRemove: string, emails: string[], setEmails: (emails: string[]) => void) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxSize = 25 * 1024 * 1024; // 25MB limit
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/gif',
      'text/plain',
    ];

    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 25MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed.`);
        return false;
      }
      return true;
    });

    const newAttachments = validFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
    }));

    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(att => att.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // AI Functions
  const generateAIContent = async (tone: ToneType, regenerate = false) => {
    if (!subject.trim()) {
      alert('Please enter a subject first to generate AI content.');
      return;
    }

    setAiState(prev => ({ ...prev, isGenerating: true }));

    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generatedContent = generateContextualContent(subject, tone, to);

    setAiState(prev => ({
      ...prev,
      isGenerating: false,
      showAIPanel: true,
      generatedContent,
      hasGenerated: true,
    }));
  };

  const generateContextualContent = (subject: string, tone: ToneType, recipients: string[]): string => {
    const subjectLower = subject.toLowerCase();
    const recipientName = recipients.length > 0 ? recipients[0].split('@')[0].replace(/[._]/g, ' ') : 'there';
    
    // Detect intent from subject
    let intent = 'general';
    if (subjectLower.includes('meeting') || subjectLower.includes('schedule') || subjectLower.includes('appointment')) {
      intent = 'meeting';
    } else if (subjectLower.includes('follow') || subjectLower.includes('update')) {
      intent = 'followup';
    } else if (subjectLower.includes('thank') || subjectLower.includes('appreciation')) {
      intent = 'thanks';
    } else if (subjectLower.includes('request') || subjectLower.includes('help') || subjectLower.includes('support')) {
      intent = 'request';
    } else if (subjectLower.includes('proposal') || subjectLower.includes('offer')) {
      intent = 'proposal';
    } else if (subjectLower.includes('reminder') || subjectLower.includes('deadline')) {
      intent = 'reminder';
    }

    return generateContentByIntentAndTone(intent, tone, recipientName, subject);
  };

  const generateContentByIntentAndTone = (intent: string, tone: ToneType, recipientName: string, subject: string): string => {
    const templates = {
      meeting: {
        professional: `Dear ${recipientName},

I hope this email finds you well. I would like to schedule a meeting to discuss ${subject.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${recipientName}!

Hope you're doing well! I'd love to set up a meeting to chat about ${subject.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${recipientName},

Let's schedule a meeting about ${subject.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${recipientName},

I believe we have a valuable opportunity to discuss ${subject.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${recipientName},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${subject.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${recipientName}!

Hope you're having a great day! Just wanted to circle back on ${subject.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${recipientName},

Quick follow-up on ${subject.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${recipientName},

Following up on ${subject.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${recipientName},

I wanted to take a moment to express my sincere gratitude regarding ${subject.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${recipientName}!

I just had to reach out and say a huge thank you for ${subject.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${recipientName},

Thank you for ${subject.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${recipientName},

Your exceptional contribution to ${subject.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${recipientName},

I hope this email finds you well. I am writing to request your assistance with ${subject.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${recipientName}!

Hope you're doing well! I'm reaching out because I could really use your help with ${subject.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${recipientName},

I need assistance with ${subject.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${recipientName},

I have an exciting opportunity that aligns perfectly with your expertise: ${subject.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${recipientName},

I hope this email finds you well. I am writing to you regarding ${subject.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${recipientName}!

Hope you're having a great day! I wanted to reach out about ${subject.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${recipientName},

Regarding ${subject.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${recipientName},

I'm reaching out about an important matter: ${subject.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };

    return templates[intent as keyof typeof templates]?.[tone] || templates.general[tone];
  };

  const handleUseAIContent = () => {
    setBody(aiState.generatedContent);
    setAiState(prev => ({ ...prev, showAIPanel: false }));
  };

  const handleRegenerateAI = () => {
    generateAIContent(aiState.selectedTone, true);
  };

  const handleToneChange = (tone: ToneType) => {
    setAiState(prev => ({ ...prev, selectedTone: tone }));
  };

  const handleSend = async () => {
    if (!validateForm()) return;

    setIsSending(true);
    try {
      const emailData: ComposeEmailData = {
        to,
        cc,
        bcc,
        subject,
        body,
        attachments: attachments.map(att => att.file),
      };

      await onSend(emailData);
      handleClose();
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveDraft = async (silent = false) => {
    if (!silent) setIsSavingDraft(true);
    
    try {
      const emailData: ComposeEmailData = {
        to,
        cc,
        bcc,
        subject,
        body,
        attachments: attachments.map(att => att.file),
      };

      await onSaveDraft(emailData);
      if (!silent) {
        // Show success message or close modal
        handleClose();
      }
    } catch (error) {
      console.error('Failed to save draft:', error);
    } finally {
      if (!silent) setIsSavingDraft(false);
    }
  };

  const handleClose = () => {
    const hasContent = to.length > 0 || subject.trim() || body.trim() || attachments.length > 0;
    
    if (hasContent) {
      const shouldSave = window.confirm(
        'You have unsaved changes. Would you like to save this as a draft before closing?'
      );
      if (shouldSave) {
        handleSaveDraft();
        return;
      }
    }
    
    // Reset form
    setTo([]);
    setCc([]);
    setBcc([]);
    setSubject('');
    setBody('');
    setAttachments([]);
    setToInput('');
    setCcInput('');
    setBccInput('');
    setShowCc(false);
    setShowBcc(false);
    setErrors({});
    setAiState({
      isGenerating: false,
      showAIPanel: false,
      generatedContent: '',
      selectedTone: 'professional',
      hasGenerated: false,
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">New Message</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* To Field */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <label className="text-sm font-medium text-gray-700 w-12">To:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {to.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, to, setTo)}
                          className="ml-1 text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={toInput}
                      onChange={(e) => handleEmailInput(e.target.value, to, setTo, setToInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (toInput.trim() && validateEmail(toInput.trim())) {
                            setTo([...to, toInput.trim()]);
                            setToInput('');
                          }
                        }
                      }}
                      placeholder={to.length === 0 ? "Enter email addresses..." : ""}
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setShowCc(!showCc)}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      showCc ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Cc
                  </button>
                  <button
                    onClick={() => setShowBcc(!showBcc)}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      showBcc ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Bcc
                  </button>
                </div>
              </div>
            </div>

            {/* CC Field */}
            {showCc && (
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 w-12">Cc:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {cc.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, cc, setCc)}
                          className="ml-1 text-gray-600 hover:text-gray-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={ccInput}
                      onChange={(e) => handleEmailInput(e.target.value, cc, setCc, setCcInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (ccInput.trim() && validateEmail(ccInput.trim())) {
                            setCc([...cc, ccInput.trim()]);
                            setCcInput('');
                          }
                        }
                      }}
                      placeholder="Enter CC email addresses..."
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.cc && <p className="text-red-500 text-sm mt-1">{errors.cc}</p>}
                </div>
              </div>
            )}

            {/* BCC Field */}
            {showBcc && (
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 w-12">Bcc:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {bcc.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, bcc, setBcc)}
                          className="ml-1 text-gray-600 hover:text-gray-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={bccInput}
                      onChange={(e) => handleEmailInput(e.target.value, bcc, setBcc, setBccInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (bccInput.trim() && validateEmail(bccInput.trim())) {
                            setBcc([...bcc, bccInput.trim()]);
                            setBccInput('');
                          }
                        }
                      }}
                      placeholder="Enter BCC email addresses..."
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.bcc && <p className="text-red-500 text-sm mt-1">{errors.bcc}</p>}
                </div>
              </div>
            )}

            {/* Subject Field with AI Button */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 w-12">Subject:</label>
              <div className="flex-1 flex space-x-2">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {subject.trim() && (
                  <button
                    onClick={() => generateAIContent(aiState.selectedTone)}
                    disabled={aiState.isGenerating}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{aiState.isGenerating ? 'Generating...' : 'Generate with AI'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* AI Panel */}
            {aiState.showAIPanel && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-gray-900">AI Generated Content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      value={aiState.selectedTone}
                      onChange={(e) => handleToneChange(e.target.value as ToneType)}
                      className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="professional">Professional</option>
                      <option value="friendly">Friendly</option>
                      <option value="concise">Concise</option>
                      <option value="persuasive">Persuasive</option>
                    </select>
                    <button
                      onClick={handleRegenerateAI}
                      disabled={aiState.isGenerating}
                      className="text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400"
                      title="Regenerate with selected tone"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-gray-800 text-sm font-sans">
                    {aiState.generatedContent}
                  </pre>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleUseAIContent}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>Use This Content</span>
                  </button>
                  <button
                    onClick={() => setAiState(prev => ({ ...prev, showAIPanel: false }))}
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Attachments */}
            {attachments.length > 0 && (
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
                <div className="space-y-2">
                  {attachments.map((attachment) => (
                    <div
                      key={attachment.id}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center space-x-2">
                        <Paperclip className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{attachment.file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({formatFileSize(attachment.file.size)})
                        </span>
                      </div>
                      <button
                        onClick={() => removeAttachment(attachment.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Body Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Message:</label>
                {body === aiState.generatedContent && aiState.generatedContent && (
                  <div className="text-sm text-purple-600 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Using AI-generated content</span>
                  </div>
                )}
              </div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Compose your message..."
                rows={12}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Paperclip className="w-4 h-4" />
              <span className="text-sm">Attach</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Discard
            </button>
            <button
              onClick={() => handleSaveDraft()}
              disabled={isSavingDraft}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSavingDraft ? 'Saving...' : 'Save Draft'}</span>
            </button>
            <button
              onClick={handleSend}
              disabled={isSending || to.length === 0}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>{isSending ? 'Sending...' : 'Send'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;