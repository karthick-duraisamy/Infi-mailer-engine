import React from 'react';
import { Paperclip, Send, Save, Trash2, Loader2 } from 'lucide-react';

interface FooterButtonsProps {
  onAttach: () => void;
  onDiscard: () => void;
  onSaveDraft: () => void;
  onSend: () => void;
  isFormValid: boolean;
  isSending?: boolean;
  isSavingDraft?: boolean;
  attachmentCount?: number;
  className?: string;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({
  onAttach,
  onDiscard,
  onSaveDraft,
  onSend,
  isFormValid,
  isSending = false,
  isSavingDraft = false,
  attachmentCount = 0,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50 ${className}`}>
      {/* Left side - Attach button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onAttach}
          className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          title="Attach files"
        >
          <Paperclip className="w-4 h-4" />
          <span className="text-sm">Attach</span>
          {attachmentCount > 0 && (
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {attachmentCount}
            </span>
          )}
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onDiscard}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          title="Discard email"
        >
          <Trash2 className="w-4 h-4" />
          <span>Discard</span>
        </button>

        <button
          onClick={onSaveDraft}
          disabled={isSavingDraft}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Save as draft"
        >
          {isSavingDraft ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{isSavingDraft ? 'Saving...' : 'Save Draft'}</span>
        </button>

        <button
          onClick={onSend}
          disabled={!isFormValid || isSending}
          className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors shadow-sm hover:shadow-md disabled:cursor-not-allowed"
          title={isFormValid ? "Send email" : "Please fill in required fields"}
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
  );
};

export default FooterButtons;