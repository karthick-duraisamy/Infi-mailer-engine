import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, Link, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface MessageBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
  className?: string;
  showFormatting?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  value,
  onChange,
  placeholder = "Type your message here...",
  minHeight = "h-64",
  className = "",
  showFormatting = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(textarea.scrollHeight, 256)}px`;
    }
  }, [value]);

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const formatButtons = [
    { icon: Bold, action: () => insertText('**', '**'), title: 'Bold' },
    { icon: Italic, action: () => insertText('*', '*'), title: 'Italic' },
    { icon: Underline, action: () => insertText('_', '_'), title: 'Underline' },
    { icon: Link, action: () => insertText('[', '](url)'), title: 'Link' },
    { icon: List, action: () => insertText('• ', ''), title: 'Bullet Point' },
  ];

  return (
    <div className={`flex-1 ${className}`}>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Message:
      </label>
      
      {showFormatting && (
        <div className="flex items-center space-x-1 p-2 border border-gray-300 border-b-0 rounded-t-lg bg-gray-50">
          {formatButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={index}
                onClick={button.action}
                className="p-2 hover:bg-gray-200 rounded transition-colors"
                title={button.title}
                type="button"
              >
                <Icon className="w-4 h-4 text-gray-600" />
              </button>
            );
          })}
        </div>
      )}
      
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-3 py-3 border border-gray-300 ${
            showFormatting ? 'rounded-b-lg' : 'rounded-lg'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all ${
            isFocused ? 'shadow-sm' : ''
          } ${minHeight}`}
          style={{ minHeight: '256px' }}
        />
        
        {/* Character count */}
        <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white px-1 rounded">
          {value.length} characters
        </div>
      </div>
      
      {/* Helpful tips */}
      {isFocused && (
        <div className="mt-2 text-xs text-gray-500">
          <p>Tips: Use Enter for new lines. The AI can help generate content based on your subject line.</p>
        </div>
      )}
    </div>
  );
};

export default MessageBox;