import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface SubjectInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerateAI?: () => void;
  isGeneratingAI?: boolean;
  placeholder?: string;
  className?: string;
}

const SubjectInput: React.FC<SubjectInputProps> = ({
  value,
  onChange,
  onGenerateAI,
  isGeneratingAI = false,
  placeholder = "Enter email subject",
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleGenerateClick = () => {
    if (onGenerateAI && value.trim()) {
      onGenerateAI();
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 w-12 flex-shrink-0">
        Subject:
      </label>
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
            isFocused ? 'shadow-sm' : ''
          }`}
        />
      </div>
      
      {value.trim() && onGenerateAI && (
        <button
          onClick={handleGenerateClick}
          disabled={isGeneratingAI}
          className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg transition-colors text-sm font-medium shadow-sm hover:shadow-md"
          title="Generate email content using AI"
        >
          {isGeneratingAI ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">
            {isGeneratingAI ? 'Generating...' : 'Generate with AI'}
          </span>
          <span className="sm:hidden">
            {isGeneratingAI ? 'AI...' : 'AI'}
          </span>
        </button>
      )}
    </div>
  );
};

export default SubjectInput;