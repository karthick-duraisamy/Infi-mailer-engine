import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Space,
  Upload,
  Tag,
  Select,
  Card,
  Typography,
  Divider,
  ColorPicker,
  Spin,
  message,
} from "antd";
import {
  CloseOutlined,
  SendOutlined,
  SaveOutlined,
  PaperClipOutlined,
  UserAddOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UploadOutlined,
  DeleteOutlined,
  StarOutlined,
  ReloadOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Text } = Typography;

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (emailData: ComposeEmailData) => void;
  onSaveDraft: (emailData: ComposeEmailData) => void;
  initialData?: Partial<ComposeEmailData>;
  isPanel?: boolean;
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

type ToneType = "professional" | "friendly" | "concise" | "persuasive";

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
  isPanel = false,
}) => {
  const [form] = Form.useForm();
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  // AI State
  const [aiState, setAiState] = useState<AIState>({
    isGenerating: false,
    showAIPanel: false,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-save draft functionality
  useEffect(() => {
    if (!isOpen) return;

    const autoSaveInterval = setInterval(() => {
      const values = form.getFieldsValue();
      if (values.to?.length > 0 || values.subject?.trim() || values.body?.trim()) {
        handleSaveDraft(true); // Silent save
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleFileUpload = (info: any) => {
    const { fileList } = info;
    const maxSize = 25 * 1024 * 1024; // 25MB limit
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain",
    ];

    const validFiles = fileList.filter((file: any) => {
      if (file.size > maxSize) {
        message.error(`File ${file.name} is too large. Maximum size is 25MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        message.error(`File type ${file.type} is not allowed.`);
        return false;
      }
      return true;
    });

    const newAttachments = validFiles.map((file: any) => ({
      file: file.originFileObj || file,
      id: file.uid || Math.random().toString(36).substr(2, 9),
    }));

    setAttachments(newAttachments);
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // AI Functions
  const generateAIContent = async (tone: ToneType, regenerate = false) => {
    const subject = form.getFieldValue('subject');
    const to = form.getFieldValue('to') || [];
    
    if (!subject?.trim()) {
      message.warning("Please enter a subject first to generate AI content.");
      return;
    }

    setAiState((prev) => ({ ...prev, isGenerating: true }));

    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const generatedContent = generateContextualContent(subject, tone, to);

    setAiState((prev) => ({
      ...prev,
      isGenerating: false,
      showAIPanel: true,
      generatedContent,
      hasGenerated: true,
    }));
  };

  const generateContextualContent = (
    subject: string,
    tone: ToneType,
    recipients: string[]
  ): string => {
    const subjectLower = subject.toLowerCase();
    const recipientName =
      recipients.length > 0
        ? recipients[0].split("@")[0].replace(/[._]/g, " ")
        : "there";

    // Detect intent from subject
    let intent = "general";
    if (
      subjectLower.includes("meeting") ||
      subjectLower.includes("schedule") ||
      subjectLower.includes("appointment")
    ) {
      intent = "meeting";
    } else if (
      subjectLower.includes("follow") ||
      subjectLower.includes("update")
    ) {
      intent = "followup";
    } else if (
      subjectLower.includes("thank") ||
      subjectLower.includes("appreciation")
    ) {
      intent = "thanks";
    } else if (
      subjectLower.includes("request") ||
      subjectLower.includes("help") ||
      subjectLower.includes("support")
    ) {
      intent = "request";
    }

    return generateContentByIntentAndTone(intent, tone, recipientName, subject);
  };

  const generateContentByIntentAndTone = (
    intent: string,
    tone: ToneType,
    recipientName: string,
    subject: string
  ): string => {
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

Best regards`,
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

Best regards`,
      },
    };

    return (
      templates[intent as keyof typeof templates]?.[tone] ||
      templates.general[tone]
    );
  };

  const handleUseAIContent = () => {
    form.setFieldValue('body', aiState.generatedContent);
    setAiState((prev) => ({ ...prev, showAIPanel: false }));
  };

  const handleRegenerateAI = () => {
    generateAIContent(aiState.selectedTone, true);
  };

  const handleToneChange = (tone: ToneType) => {
    setAiState((prev) => ({ ...prev, selectedTone: tone }));
  };

  const handleSend = async () => {
    try {
      const values = await form.validateFields();
      setIsSending(true);
      
      const emailData: ComposeEmailData = {
        to: values.to || [],
        cc: values.cc || [],
        bcc: values.bcc || [],
        subject: values.subject || '',
        body: values.body || '',
        attachments: attachments.map((att) => att.file),
      };

      await onSend(emailData);
      handleClose();
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveDraft = async (silent = false) => {
    if (!silent) setIsSavingDraft(true);

    try {
      const values = form.getFieldsValue();
      const emailData: ComposeEmailData = {
        to: values.to || [],
        cc: values.cc || [],
        bcc: values.bcc || [],
        subject: values.subject || '',
        body: values.body || '',
        attachments: attachments.map((att) => att.file),
      };

      await onSaveDraft(emailData);
      if (!silent) {
        handleClose();
      }
    } catch (error) {
      console.error("Failed to save draft:", error);
    } finally {
      if (!silent) setIsSavingDraft(false);
    }
  };

  const handleClose = () => {
    const values = form.getFieldsValue();
    const hasContent =
      values.to?.length > 0 || 
      values.subject?.trim() || 
      values.body?.trim() || 
      attachments.length > 0;

    if (hasContent) {
      Modal.confirm({
        title: 'Unsaved Changes',
        content: 'You have unsaved changes. Would you like to save this as a draft before closing?',
        okText: 'Save Draft',
        cancelText: 'Discard',
        onOk: () => handleSaveDraft(),
        onCancel: () => {
          form.resetFields();
          setAttachments([]);
          setShowCc(false);
          setShowBcc(false);
          setAiState({
            isGenerating: false,
            showAIPanel: false,
            generatedContent: "",
            selectedTone: "professional",
            hasGenerated: false,
          });
          onClose();
        },
      });
      return;
    }

    // Reset form
    form.resetFields();
    setAttachments([]);
    setShowCc(false);
    setShowBcc(false);
    setAiState({
      isGenerating: false,
      showAIPanel: false,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: false,
    });

    onClose();
  };

  const currentSubject = Form.useWatch('subject', form);

  const ComposeContent = () => (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialData}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
        {/* To Field */}
        <Form.Item
          name="to"
          label="To:"
          rules={[
            { required: true, message: 'At least one recipient is required' },
            {
              validator: (_, value) => {
                if (!value || value.length === 0) return Promise.resolve();
                const invalidEmails = value.filter((email: string) => !validateEmail(email));
                if (invalidEmails.length > 0) {
                  return Promise.reject(`Invalid email addresses: ${invalidEmails.join(', ')}`);
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Select
            mode="tags"
            placeholder="Enter email addresses..."
            style={{ width: '100%' }}
            tokenSeparators={[',', ';']}
            suffixIcon={
              <Space>
                <Button
                  type="text"
                  size="small"
                  onClick={() => setShowCc(!showCc)}
                  style={{ color: showCc ? '#1890ff' : undefined }}
                >
                  Cc
                </Button>
                <Button
                  type="text"
                  size="small"
                  onClick={() => setShowBcc(!showBcc)}
                  style={{ color: showBcc ? '#1890ff' : undefined }}
                >
                  Bcc
                </Button>
              </Space>
            }
          />
        </Form.Item>

        {/* CC Field */}
        {showCc && (
          <Form.Item
            name="cc"
            label="Cc:"
            rules={[
              {
                validator: (_, value) => {
                  if (!value || value.length === 0) return Promise.resolve();
                  const invalidEmails = value.filter((email: string) => !validateEmail(email));
                  if (invalidEmails.length > 0) {
                    return Promise.reject(`Invalid CC email addresses: ${invalidEmails.join(', ')}`);
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Enter CC email addresses..."
              style={{ width: '100%' }}
              tokenSeparators={[',', ';']}
            />
          </Form.Item>
        )}

        {/* BCC Field */}
        {showBcc && (
          <Form.Item
            name="bcc"
            label="Bcc:"
            rules={[
              {
                validator: (_, value) => {
                  if (!value || value.length === 0) return Promise.resolve();
                  const invalidEmails = value.filter((email: string) => !validateEmail(email));
                  if (invalidEmails.length > 0) {
                    return Promise.reject(`Invalid BCC email addresses: ${invalidEmails.join(', ')}`);
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Enter BCC email addresses..."
              style={{ width: '100%' }}
              tokenSeparators={[',', ';']}
            />
          </Form.Item>
        )}

        {/* Subject Field with AI Button */}
        <Form.Item
          name="subject"
          label="Subject:"
          rules={[{ required: true, message: 'Subject is required' }]}
        >
          <Input.Group compact>
            <Input
              placeholder="Enter subject..."
              style={{ width: 'calc(100% - 120px)' }}
            />
            {currentSubject?.trim() && (
              <Button
                type="primary"
                loading={aiState.isGenerating}
                onClick={() => generateAIContent(aiState.selectedTone)}
                style={{ width: 120 }}
                icon={<ThunderboltOutlined />}
              >
                {aiState.isGenerating ? "Generating..." : "AI Generate"}
              </Button>
            )}
          </Input.Group>
        </Form.Item>

        {/* AI Panel */}
        {aiState.showAIPanel && (
          <Card
            title={
              <Space>
                <ThunderboltOutlined style={{ color: '#722ed1' }} />
                <span>AI Generated Content</span>
              </Space>
            }
            extra={
              <Space>
                <Select
                  value={aiState.selectedTone}
                  onChange={handleToneChange}
                  size="small"
                  style={{ width: 120 }}
                  options={[
                    { value: 'professional', label: 'Professional' },
                    { value: 'friendly', label: 'Friendly' },
                    { value: 'concise', label: 'Concise' },
                    { value: 'persuasive', label: 'Persuasive' },
                  ]}
                />
                <Button
                  type="text"
                  icon={<ReloadOutlined />}
                  onClick={handleRegenerateAI}
                  loading={aiState.isGenerating}
                  size="small"
                />
              </Space>
            }
            style={{ marginBottom: 16 }}
            size="small"
          >
            <div style={{
              background: '#fafafa',
              border: '1px solid #d9d9d9',
              borderRadius: 6,
              padding: 12,
              marginBottom: 12,
              maxHeight: 200,
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
              fontSize: 13,
            }}>
              {aiState.generatedContent}
            </div>
            <Space>
              <Button
                type="primary"
                icon={<CheckOutlined />}
                onClick={handleUseAIContent}
                size="small"
              >
                Use This Content
              </Button>
              <Button
                onClick={() => setAiState(prev => ({ ...prev, showAIPanel: false }))}
                size="small"
              >
                Dismiss
              </Button>
            </Space>
          </Card>
        )}

        {/* Attachments */}
        {attachments.length > 0 && (
          <Card title="Attachments" size="small" style={{ marginBottom: 16 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              {attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 8,
                    background: '#fafafa',
                    borderRadius: 4,
                  }}
                >
                  <Space>
                    <PaperClipOutlined />
                    <span>{attachment.file.name}</span>
                    <Text type="secondary" style={{ fontSize: 11 }}>
                      ({formatFileSize(attachment.file.size)})
                    </Text>
                  </Space>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => removeAttachment(attachment.id)}
                    danger
                    size="small"
                  />
                </div>
              ))}
            </Space>
          </Card>
        )}

        {/* Body Field */}
        <Form.Item
          name="body"
          label={
            <Space>
              <span>Message:</span>
              {form.getFieldValue('body') === aiState.generatedContent && aiState.generatedContent && (
                <Tag color="purple" icon={<ThunderboltOutlined />}>
                  Using AI-generated content
                </Tag>
              )}
            </Space>
          }
          rules={[{ required: true, message: 'Message content is required' }]}
        >
          <TextArea
            placeholder="Compose your message..."
            rows={isPanel ? 8 : 12}
            style={{ resize: 'none' }}
          />
        </Form.Item>
      </div>

      {/* Footer */}
      <div style={{
        padding: '16px 24px',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Space>
          <Upload
            beforeUpload={() => false}
            onChange={handleFileUpload}
            multiple
            showUploadList={false}
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          >
            <Button icon={<PaperClipOutlined />}>
              Attach
            </Button>
          </Upload>
        </Space>

        <Space>
          <Button onClick={handleClose}>
            Discard
          </Button>
          <Button
            icon={<SaveOutlined />}
            onClick={() => handleSaveDraft()}
            loading={isSavingDraft}
          >
            {isSavingDraft ? "Saving..." : "Save Draft"}
          </Button>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            loading={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </Button>
        </Space>
      </div>
    </Form>
  );

  if (isPanel) {
    return (
      <div
        style={{
          position: 'fixed',
          right: 8,
          top: 64,
          bottom: 8,
          width: 500,
          background: '#fff',
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text strong>Compose</Text>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={handleClose}
          />
        </div>
        <ComposeContent />
      </div>
    );
  }

  return (
    <Modal
      title="New Message"
      open={isOpen}
      onCancel={handleClose}
      width={800}
      style={{ top: 20 }}
      footer={null}
      destroyOnClose
      className="compose-modal"
    >
      <ComposeContent />
    </Modal>
  );
};

export default ComposeModal;