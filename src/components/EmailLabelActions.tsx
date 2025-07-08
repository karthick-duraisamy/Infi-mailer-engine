import React, { useState, useRef, useEffect } from 'react';
import { Tag, Plus, X } from 'lucide-react';
import { CustomLabel } from '../types/email';
import LabelSelector from './LabelSelector';

interface EmailLabelActionsProps {
  emailIds: string[];
  currentLabels: string[];
  availableLabels: CustomLabel[];
  onLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel?: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  className?: string;
}

const EmailLabelActions: React.FC<EmailLabelActionsProps> = ({
  emailIds,
  currentLabels,
  availableLabels,
  onLabelsChange,
  onCreateLabel,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>(currentLabels);
  const [isUpdating, setIsUpdating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedLabels(currentLabels);
  }, [currentLabels]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLabelsChange = async (newLabelIds: string[]) => {
    setIsUpdating(true);
    setSelectedLabels(newLabelIds);
    
    try {
      onLabelsChange(emailIds, newLabelIds);
      // Small delay to show loading state and close dropdown
      setTimeout(() => {
        setIsUpdating(false);
        setIsOpen(false); // Close the dropdown after updating
      }, 300);
    } catch (error) {
      setIsUpdating(false);
      console.error('Error updating labels:', error);
    }
  };

  const selectedLabelObjects = availableLabels.filter(label =>
    selectedLabels.includes(label.id)
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isUpdating}
        className={`flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors ${
          isUpdating ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        title="Manage labels"
      >
        <Tag className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} />
        <span className="text-sm">Labels</span>
        {selectedLabels.length > 0 && (
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            {selectedLabels.length}
          </span>
        )}
        {isUpdating && (
          <span className="text-xs text-gray-500">Updating...</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Manage Labels {emailIds.length > 1 && `(${emailIds.length} emails)`}
            </h3>
            
            {/* Current Labels */}
            {selectedLabels.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">Current labels:</p>
                <div className="flex flex-wrap gap-1">
                  {selectedLabelObjects.map((label) => (
                    <span
                      key={label.id}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
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
                        onClick={() => {
                          const newLabels = selectedLabels.filter(id => id !== label.id);
                          handleLabelsChange(newLabels);
                        }}
                        className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-2 h-2" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <LabelSelector
              selectedLabels={selectedLabels}
              availableLabels={availableLabels}
              onLabelsChange={handleLabelsChange}
              onCreateLabel={onCreateLabel}
              placeholder="Add or create labels..."
              maxHeight="max-h-32"
            />
          </div>

          <div className="p-3">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailLabelActions;