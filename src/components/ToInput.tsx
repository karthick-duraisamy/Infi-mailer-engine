import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface ToInputProps {
  value: string[];
  onChange: (emails: string[]) => void;
  placeholder?: string;
  label?: string;
  suggestions?: string[];
  className?: string;
}

const ToInput: React.FC<ToInputProps> = ({
  value,
  onChange,
  placeholder = "Enter email addresses",
  label = "To:",
  suggestions = [],
  className = "",
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter(email =>
    email.toLowerCase().includes(inputValue.toLowerCase()) &&
    !value.includes(email)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && validateEmail(trimmedEmail) && !value.includes(trimmedEmail)) {
      onChange([...value, trimmedEmail]);
      setInputValue('');
      setShowSuggestions(false);
      setFocusedSuggestionIndex(-1);
    }
  };

  const removeEmail = (emailToRemove: string) => {
    onChange(value.filter(email => email !== emailToRemove));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setShowSuggestions(newValue.length > 0 && filteredSuggestions.length > 0);
    setFocusedSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ';') {
      e.preventDefault();
      if (inputValue.trim()) {
        addEmail(inputValue);
      }
    } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      removeEmail(value[value.length - 1]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions) {
        setFocusedSuggestionIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions) {
        setFocusedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
      }
    } else if (e.key === 'Tab' && focusedSuggestionIndex >= 0) {
      e.preventDefault();
      addEmail(filteredSuggestions[focusedSuggestionIndex]);
    }
  };

  const handleSuggestionClick = (email: string) => {
    addEmail(email);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="flex items-start space-x-2">
        <label className="text-sm font-medium text-gray-700 mt-2 w-12 flex-shrink-0">
          {label}
        </label>
        <div className="flex-1">
          <div
            className="min-h-[2.5rem] p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex flex-wrap items-center gap-1">
              {value.map((email, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                >
                  {email}
                  <button
                    onClick={() => removeEmail(email)}
                    className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (inputValue && filteredSuggestions.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
                placeholder={value.length === 0 ? placeholder : ""}
                className="flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-12 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
              {filteredSuggestions.map((email, index) => (
                <button
                  key={email}
                  onClick={() => handleSuggestionClick(email)}
                  className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors text-sm ${
                    index === focusedSuggestionIndex ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  {email}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToInput;