export interface Email {
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  preview: string;
  timestamp: string;
  isStarred: boolean;
  isRead: boolean;
  messages: EmailMessage[];
  intentLabel?: 'meeting' | 'announcement' | 'system' | 'report' | 'feedback' | 'general' | 'new';
  labels?: string[]; // Array of custom label IDs
}

export interface EmailMessage {
  id: string;
  sender: string;
  senderEmail: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  replyType?: 'manual' | 'ai' | 'partial-ai';
}

export interface Label {
  id: string;
  name: string;
  color: string;
  count?: number;
}

export interface CustomLabel {
  id: string;
  name: string;
  color: string;
  description?: string;
  createdAt: string;
  isSystem?: boolean; // For built-in labels like Work, Personal, etc.
}