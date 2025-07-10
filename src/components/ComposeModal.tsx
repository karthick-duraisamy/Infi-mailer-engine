import React, { useState, useRef, useEffect } from 'react';
import { X, Paperclip, Send, Save, Trash2, Sparkles, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

export interface ComposeEmailData {
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
  attachments?: File[];
}

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (emailData: ComposeEmailData) => Promise<void>;
  onSaveDraft: (emailData: ComposeEmailData) => Promise<void>;
  replyTo?: any;
  isPanel?: boolean;
}

const ComposeModal: React.FC<ComposeModalProps> = ({
  isOpen,
  onClose,
  onSend,
  onSaveDraft,
  replyTo,
  isPanel = false,
}) => {
  const [emailData, setEmailData] = useState<ComposeEmailData>({
    to: [],
    cc: [],
    bcc: [],
    subject: '',
    body: '',
    attachments: [],
  });

  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [toInput, setToInput] = useState('');
  const [ccInput, setCcInput] = useState('');
  const [bccInput, setBccInput] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with reply data if provided
  useEffect(() => {
    if (replyTo && isOpen) {
      setEmailData(prev => ({
        ...prev,
        to: [replyTo.from_address],
        subject: replyTo.subject.startsWith('Re:') ? replyTo.subject : `Re: ${replyTo.subject}`,
        body: `\n\n--- Original Message ---\nFrom: ${replyTo.from_address}\nDate: ${new Date(replyTo.created_at).toLocaleString()}\nSubject: ${replyTo.subject}\n\n${replyTo.snippet || ''}`,
      }));
      setToInput(replyTo.from_address);
    }
  }, [replyTo, isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmailData({
        to: [],
        cc: [],
        bcc: [],
        subject: '',
        body: '',
        attachments: [],
      });
      setToInput('');
      setCcInput('');
      setBccInput('');
      setShowCc(false);
      setShowBcc(false);
    }
  }, [isOpen]);

  const parseEmailAddresses = (input: string): string[] => {
    return input
      .split(/[,;]/)
      .map(email => email.trim())
      .filter(email => email.length > 0);
  };

  const handleToChange = (value: string) => {
    setToInput(value);
    setEmailData(prev => ({
      ...prev,
      to: parseEmailAddresses(value),
    }));
  };

  const handleCcChange = (value: string) => {
    setCcInput(value);
    setEmailData(prev => ({
      ...prev,
      cc: parseEmailAddresses(value),
    }));
  };

  const handleBccChange = (value: string) => {
    setBccInput(value);
    setEmailData(prev => ({
      ...prev,
      bcc: parseEmailAddresses(value),
    }));
  };

  const handleSubjectChange = (value: string) => {
    setEmailData(prev => ({
      ...prev,
      subject: value,
    }));
  };

  const handleBodyChange = (value: string) => {
    setEmailData(prev => ({
      ...prev,
      body: value,
    }));
  };

  const generateAIMessage = async () => {
    if (!emailData.subject.trim()) return;

    setIsGeneratingAI(true);
    try {
      // Simulate AI generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate contextual message based on subject
      const subject = emailData.subject.toLowerCase();
      let generatedMessage = '';

      if (subject.includes('meeting') || subject.includes('schedule')) {
        generatedMessage = `Dear Team,

I hope this email finds you well. I would like to schedule a meeting to discuss the matters outlined in the subject line.

Please let me know your availability for the following time slots:
- Option 1: [Date] at [Time]
- Option 2: [Date] at [Time]
- Option 3: [Date] at [Time]

The meeting agenda will include:
- [Agenda item 1]
- [Agenda item 2]
- [Agenda item 3]

Please confirm your attendance and preferred time slot.

Best regards,
[Your Name]`;
      } else if (subject.includes('follow up') || subject.includes('followup')) {
        generatedMessage = `Dear [Recipient],

I hope you're doing well. I wanted to follow up on our previous conversation regarding ${emailData.subject.replace(/follow.?up.?on.?/i, '').trim()}.

Could you please provide an update on the current status? If you need any additional information or assistance from my end, please don't hesitate to let me know.

I look forward to hearing from you soon.

Best regards,
[Your Name]`;
      } else if (subject.includes('thank') || subject.includes('appreciation')) {
        generatedMessage = `Dear [Recipient],

I wanted to take a moment to express my sincere gratitude for your assistance and support.

Your contribution has been invaluable, and I truly appreciate the time and effort you've invested in this matter.

Thank you once again for your professionalism and dedication.

Warm regards,
[Your Name]`;
      } else if (subject.includes('update') || subject.includes('status')) {
        generatedMessage = `Dear Team,

I hope this message finds you well. I'm writing to provide you with an update on the current status of our project.

Current Progress:
- [Progress point 1]
- [Progress point 2]
- [Progress point 3]

Next Steps:
- [Next step 1]
- [Next step 2]

If you have any questions or concerns, please feel free to reach out.

Best regards,
[Your Name]`;
      } else {
        generatedMessage = `Dear [Recipient],

I hope this email finds you well. I'm reaching out regarding ${emailData.subject}.

[Please provide more details about your request or message here]

I look forward to your response.

Best regards,
[Your Name]`;
      }

      // Add signature if available
      const signature = sessionStorage.getItem('defaultSignature');
      if (signature) {
        generatedMessage = generatedMessage.replace('[Your Name]', signature);
      }

      setEmailData(prev => ({
        ...prev,
        body: generatedMessage,
      }));
    } catch (error) {
      console.error('Error generating AI message:', error);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const handleFileAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setEmailData(prev => ({
      ...prev,
      attachments: [...(prev.attachments || []), ...files],
    }));
  };

  const removeAttachment = (index: number) => {
    setEmailData(prev => ({
      ...prev,
      attachments: prev.attachments?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleSend = async () => {
    if (!emailData.to.length || !emailData.subject.trim()) return;

    setIsSending(true);
    try {
      await onSend(emailData);
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveDraft = async () => {
    setIsSavingDraft(true);
    try {
      await onSaveDraft(emailData);
    } catch (error) {
      console.error('Error saving draft:', error);
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handleDiscard = () => {
    const hasContent = emailData.to.length > 0 || emailData.subject.trim() || emailData.body.trim();
    if (hasContent) {
      const confirmed = window.confirm('Are you sure you want to discard this email? All changes will be lost.');
      if (!confirmed) return;
    }
    onClose();
  };

  const isFormValid = emailData.to.length > 0 && emailData.subject.trim();

  if (!isOpen) return null;

  const modalContent = (
    <div className="bg-white rounded-lg shadow-xl flex flex-col h-full max-h-[90vh]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          {replyTo ? 'Reply' : 'Compose Email'}
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* To Field */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <label className="text-sm font-medium text-gray-700 w-12">To:</label>
            <input
              type="text"
              value={toInput}
              onChange={(e) => handleToChange(e.target.value)}
              placeholder="Enter email addresses separated by commas"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex items-center space-x-2">
              {!showCc && (
                <button
                  onClick={() => setShowCc(true)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Cc
                </button>
              )}
              {!showBcc && (
                <button
                  onClick={() => setShowBcc(true)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Bcc
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Cc Field */}
        {showCc && (
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 w-12">Cc:</label>
            <input
              type="text"
              value={ccInput}
              onChange={(e) => handleCcChange(e.target.value)}
              placeholder="Enter Cc email addresses"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => {
                setShowCc(false);
                setCcInput('');
                setEmailData(prev => ({ ...prev, cc: [] }));
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}

        {/* Bcc Field */}
        {showBcc && (
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 w-12">Bcc:</label>
            <input
              type="text"
              value={bccInput}
              onChange={(e) => handleBccChange(e.target.value)}
              placeholder="Enter Bcc email addresses"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => {
                setShowBcc(false);
                setBccInput('');
                setEmailData(prev => ({ ...prev, bcc: [] }));
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}

        {/* Subject Field */}
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700 w-12">Subject:</label>
          <input
            type="text"
            value={emailData.subject}
            onChange={(e) => handleSubjectChange(e.target.value)}
            placeholder="Enter email subject"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {emailData.subject.trim() && (
            <button
              onClick={generateAIMessage}
              disabled={isGeneratingAI}
              className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg transition-colors text-sm"
            >
              {isGeneratingAI ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              <span>{isGeneratingAI ? 'Generating...' : 'Generate with AI'}</span>
            </button>
          )}
        </div>

        {/* Attachments */}
        {emailData.attachments && emailData.attachments.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Attachments:</label>
            <div className="space-y-1">
              {emailData.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <button
                    onClick={() => removeAttachment(index)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message Body */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Message:</label>
          <textarea
            value={emailData.body}
            onChange={(e) => handleBodyChange(e.target.value)}
            placeholder="Type your message here..."
            className="w-full h-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileAttachment}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            title="Attach files"
          >
            <Paperclip className="w-4 h-4" />
            <span className="text-sm">Attach</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleDiscard}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Discard</span>
          </button>

          <button
            onClick={handleSaveDraft}
            disabled={isSavingDraft}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            {isSavingDraft ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{isSavingDraft ? 'Saving...' : 'Save Draft'}</span>
          </button>

          <button
            onClick={handleSend}
            disabled={!isFormValid || isSending}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
          >
            {isSending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>{isSending ? 'Sending...' : 'Send'}</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (isPanel) {
    return (
      <div className="fixed bottom-0 right-4 w-96 h-[600px] z-50">
        {modalContent}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="w-full max-w-4xl h-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent}
      </div>
    </div>
  );
};

export default ComposeModal;