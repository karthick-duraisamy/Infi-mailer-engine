import React, { useState, useRef, useEffect } from 'react';
import { Tag, X, Plus, Check } from 'lucide-react';
import { CustomLabel } from '../types/email';

interface LabelSelectorProps {
  selectedLabels: string[];
  availableLabels: CustomLabel[];
  onLabelsChange: (labelIds: string[]) => void;
  onCreateLabel?: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  placeholder?: string;
  className?: string;
  maxHeight?: string;
}

const LabelSelector: React.FC<LabelSelectorProps> = ({
  selectedLabels,
  availableLabels,
  onLabelsChange,
  onCreateLabel,
  placeholder = "Add labels...",
  className = "",
  maxHeight = "max-h-48",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newLabelName, setNewLabelName] = useState('');
  const [newLabelColor, setNewLabelColor] = useState('#3B82F6');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCreateForm(false);
        setSearchQuery('');
        setNewLabelName('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLabels = availableLabels.filter(label =>
    label.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !selectedLabels.includes(label.id)
  );

  const selectedLabelObjects = availableLabels.filter(label =>
    selectedLabels.includes(label.id)
  );

  const handleLabelToggle = (labelId: string) => {
    if (selectedLabels.includes(labelId)) {
      onLabelsChange(selectedLabels.filter(id => id !== labelId));
    } else {
      onLabelsChange([...selectedLabels, labelId]);
    }
  };

  const handleRemoveLabel = (labelId: string) => {
    onLabelsChange(selectedLabels.filter(id => id !== labelId));
  };

  const handleCreateNewLabel = () => {
    if (!newLabelName.trim() || !onCreateLabel) return;

    const existingLabel = availableLabels.find(
      label => label.name.toLowerCase() === newLabelName.trim().toLowerCase()
    );

    if (existingLabel) {
      // If label exists, just select it
      handleLabelToggle(existingLabel.id);
    } else {
      // Create new label
      onCreateLabel({
        name: newLabelName.trim(),
        color: newLabelColor,
        isSystem: false,
      });
    }

    setNewLabelName('');
    setShowCreateForm(false);
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (showCreateForm) {
        handleCreateNewLabel();
      } else if (searchQuery.trim() && onCreateLabel) {
        setNewLabelName(searchQuery.trim());
        setShowCreateForm(true);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setShowCreateForm(false);
      setSearchQuery('');
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Selected Labels Display */}
      <div
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all"
      >
        <div className="flex flex-wrap items-center gap-2">
          {selectedLabelObjects.map((label) => (
            <span
              key={label.id}
              className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium"
              style={{
                backgroundColor: `${label.color}20`,
                color: label.color,
                border: `1px solid ${label.color}40`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: label.color }}
              />
              {label.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveLabel(label.id);
                }}
                className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={selectedLabels.length === 0 ? placeholder : ""}
            className="flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${maxHeight} overflow-y-auto`}>
          {/* Create New Label Form */}
          {showCreateForm && onCreateLabel && (
            <div className="p-3 border-b border-gray-100 bg-blue-50">
              <div className="flex items-center space-x-2 mb-2">
                <Plus className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Create new label</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newLabelName}
                  onChange={(e) => setNewLabelName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Label name..."
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <input
                  type="color"
                  value={newLabelColor}
                  onChange={(e) => setNewLabelColor(e.target.value)}
                  className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                />
                <button
                  onClick={handleCreateNewLabel}
                  disabled={!newLabelName.trim()}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Available Labels */}
          <div className="py-1">
            {filteredLabels.length === 0 && !showCreateForm ? (
              <div className="px-3 py-2 text-sm text-gray-500 text-center">
                {searchQuery ? (
                  <div>
                    <p>No labels found for "{searchQuery}"</p>
                    {onCreateLabel && (
                      <button
                        onClick={() => {
                          setNewLabelName(searchQuery);
                          setShowCreateForm(true);
                        }}
                        className="mt-1 text-blue-600 hover:text-blue-700 text-sm"
                      >
                        Create "{searchQuery}" label
                      </button>
                    )}
                  </div>
                ) : (
                  'No available labels'
                )}
              </div>
            ) : (
              filteredLabels.map((label) => (
                <button
                  key={label.id}
                  onClick={() => handleLabelToggle(label.id)}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: label.color }}
                  />
                  <span className="text-sm text-gray-900">{label.name}</span>
                  {label.description && (
                    <span className="text-xs text-gray-500 truncate">
                      - {label.description}
                    </span>
                  )}
                </button>
              ))
            )}
          </div>

          {/* Create Label Option */}
          {!showCreateForm && onCreateLabel && searchQuery && filteredLabels.length === 0 && (
            <div className="border-t border-gray-100">
              <button
                onClick={() => {
                  setNewLabelName(searchQuery);
                  setShowCreateForm(true);
                }}
                className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm">Create "{searchQuery}" label</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LabelSelector;