import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, Edit2, Trash2, Check, AlertCircle, Tag, Palette } from 'lucide-react';
import { CustomLabel } from '../types/email';
import { labelColors } from '../data/mockLabels';

interface LabelManagerProps {
  isOpen: boolean;
  onClose: () => void;
  labels: CustomLabel[];
  onCreateLabel: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  onUpdateLabel: (id: string, updates: Partial<CustomLabel>) => void;
  onDeleteLabel: (id: string) => void;
}

const LabelManager: React.FC<LabelManagerProps> = ({
  isOpen,
  onClose,
  labels,
  onCreateLabel,
  onUpdateLabel,
  onDeleteLabel,
}) => {
  const [newLabelName, setNewLabelName] = useState('');
  const [newLabelColor, setNewLabelColor] = useState(labelColors[0]);
  const [newLabelDescription, setNewLabelDescription] = useState('');
  const [editingLabel, setEditingLabel] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editColor, setEditColor] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const validateLabelName = (name: string, excludeId?: string): boolean => {
    if (!name.trim()) {
      setErrors(prev => ({ ...prev, name: 'Label name is required' }));
      return false;
    }

    if (name.trim().length < 2) {
      setErrors(prev => ({ ...prev, name: 'Label name must be at least 2 characters' }));
      return false;
    }

    if (name.trim().length > 20) {
      setErrors(prev => ({ ...prev, name: 'Label name must be less than 20 characters' }));
      return false;
    }

    const existingLabel = labels.find(label => 
      label.name.toLowerCase() === name.trim().toLowerCase() && label.id !== excludeId
    );

    if (existingLabel) {
      setErrors(prev => ({ ...prev, name: 'A label with this name already exists' }));
      return false;
    }

    setErrors(prev => ({ ...prev, name: '' }));
    return true;
  };

  const handleCreateLabel = () => {
    if (!validateLabelName(newLabelName)) return;

    onCreateLabel({
      name: newLabelName.trim(),
      color: newLabelColor,
      description: newLabelDescription.trim() || undefined,
      isSystem: false,
    });

    setNewLabelName('');
    setNewLabelColor(labelColors[0]);
    setNewLabelDescription('');
    setErrors({});
  };

  const handleStartEdit = (label: CustomLabel) => {
    setEditingLabel(label.id);
    setEditName(label.name);
    setEditColor(label.color);
    setEditDescription(label.description || '');
    setErrors({});
  };

  const handleSaveEdit = () => {
    if (!editingLabel) return;
    if (!validateLabelName(editName, editingLabel)) return;

    onUpdateLabel(editingLabel, {
      name: editName.trim(),
      color: editColor,
      description: editDescription.trim() || undefined,
    });

    setEditingLabel(null);
    setEditName('');
    setEditColor('');
    setEditDescription('');
    setErrors({});
  };

  const handleCancelEdit = () => {
    setEditingLabel(null);
    setEditName('');
    setEditColor('');
    setEditDescription('');
    setErrors({});
  };

  const handleDeleteLabel = (labelId: string) => {
    const label = labels.find(l => l.id === labelId);
    if (!label) return;

    const confirmMessage = label.isSystem
      ? `Are you sure you want to delete the system label "${label.name}"? This action cannot be undone.`
      : `Are you sure you want to delete the label "${label.name}"? This will remove it from all emails.`;

    if (window.confirm(confirmMessage)) {
      onDeleteLabel(labelId);
    }
  };

  const ColorPicker: React.FC<{ 
    selectedColor: string; 
    onColorChange: (color: string) => void;
    className?: string;
  }> = ({ selectedColor, onColorChange, className = '' }) => (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {labelColors.map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          className={`w-6 h-6 rounded-full border-2 transition-all ${
            selectedColor === color 
              ? 'border-gray-800 scale-110' 
              : 'border-gray-300 hover:border-gray-500'
          }`}
          style={{ backgroundColor: color }}
          title={`Select ${color}`}
        />
      ))}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Tag className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Manage Labels</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Create New Label Form */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Label Name *
                </label>
                <input
                  type="text"
                  value={newLabelName}
                  onChange={(e) => {
                    setNewLabelName(e.target.value);
                    if (errors.name) {
                      validateLabelName(e.target.value);
                    }
                  }}
                  onBlur={() => validateLabelName(newLabelName)}
                  placeholder="Enter label name..."
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  maxLength={20}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Palette className="w-4 h-4 inline mr-1" />
                  Color
                </label>
                <ColorPicker
                  selectedColor={newLabelColor}
                  onColorChange={setNewLabelColor}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  value={newLabelDescription}
                  onChange={(e) => setNewLabelDescription(e.target.value)}
                  placeholder="Brief description of this label..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  maxLength={100}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleCreateLabel}
                  disabled={!newLabelName.trim()}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Label</span>
                </button>
              </div>
            </div>
          </div>

          {/* Existing Labels */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Labels ({labels.length})
            </h3>
            
            {labels.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Tag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">No labels yet</h4>
                <p className="text-gray-500">Create your first label above to get started organizing your emails</p>
              </div>
            ) : (
              <div className="space-y-3">
                {labels.map((label) => (
                  <div
                    key={label.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {editingLabel === label.id ? (
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => {
                                setEditName(e.target.value);
                                if (errors.name) {
                                  validateLabelName(e.target.value, label.id);
                                }
                              }}
                              onBlur={() => validateLabelName(editName, label.id)}
                              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.name ? 'border-red-300' : 'border-gray-300'
                              }`}
                              maxLength={20}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                          </div>
                          <ColorPicker
                            selectedColor={editColor}
                            onColorChange={setEditColor}
                            className="flex-shrink-0"
                          />
                        </div>
                        
                        <input
                          type="text"
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          placeholder="Description..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          maxLength={100}
                        />
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={handleSaveEdit}
                            disabled={!editName.trim() || !!errors.name}
                            className="flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors"
                          >
                            <Check className="w-4 h-4" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center space-x-4 flex-1">
                          <div
                            className="w-5 h-5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: label.color }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{label.name}</span>
                              {label.isSystem && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                  System
                                </span>
                              )}
                            </div>
                            {label.description && (
                              <p className="text-sm text-gray-500 mt-1">{label.description}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => handleStartEdit(label)}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit label"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteLabel(label.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete label"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabelManager;