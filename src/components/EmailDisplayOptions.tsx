
import React, { useState } from 'react';
import { X, Layout, Eye, Image, Type, Monitor } from 'lucide-react';

interface EmailDisplayOptionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailDisplayOptions: React.FC<EmailDisplayOptionsProps> = ({ isOpen, onClose }) => {
  const [displaySettings, setDisplaySettings] = useState({
    density: 'comfortable',
    readingPane: 'right',
    showImages: 'ask',
    fontSize: 'medium',
    theme: 'light',
    showPreview: true,
    showSender: true,
    showSnippet: true,
    markAsReadDelay: 2,
    conversationView: true,
  });

  const handleSettingChange = (key: string, value: any) => {
    setDisplaySettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Here you would save the settings to your backend or local storage
    console.log('Saving display settings:', displaySettings);
    onClose();
  };

  const handleReset = () => {
    setDisplaySettings({
      density: 'comfortable',
      readingPane: 'right',
      showImages: 'ask',
      fontSize: 'medium',
      theme: 'light',
      showPreview: true,
      showSender: true,
      showSnippet: true,
      markAsReadDelay: 2,
      conversationView: true,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Email Display Options</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Display Density */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Layout className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Display Density</h3>
            </div>
            <div className="ml-7 space-y-2">
              {['compact', 'comfortable', 'relaxed'].map((density) => (
                <label key={density} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="density"
                    value={density}
                    checked={displaySettings.density === density}
                    onChange={(e) => handleSettingChange('density', e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700 capitalize">{density}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reading Pane */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Reading Pane</h3>
            </div>
            <div className="ml-7 space-y-2">
              {[
                { value: 'right', label: 'Right side' },
                { value: 'bottom', label: 'Bottom' },
                { value: 'off', label: 'No reading pane' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="readingPane"
                    value={option.value}
                    checked={displaySettings.readingPane === option.value}
                    onChange={(e) => handleSettingChange('readingPane', e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Image Display</h3>
            </div>
            <div className="ml-7 space-y-2">
              {[
                { value: 'always', label: 'Always show images' },
                { value: 'ask', label: 'Ask before showing images' },
                { value: 'never', label: 'Never show images' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="showImages"
                    value={option.value}
                    checked={displaySettings.showImages === option.value}
                    onChange={(e) => handleSettingChange('showImages', e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Type className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Font Size</h3>
            </div>
            <div className="ml-7">
              <select
                value={displaySettings.fontSize}
                onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>
          </div>

          {/* Theme */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Theme</h3>
            </div>
            <div className="ml-7 space-y-2">
              {[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'auto', label: 'Auto (system)' }
              ].map((theme) => (
                <label key={theme.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value={theme.value}
                    checked={displaySettings.theme === theme.value}
                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{theme.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Toggle Options */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Display Options</h3>
            <div className="space-y-3 ml-4">
              {[
                { key: 'showPreview', label: 'Show email preview pane' },
                { key: 'showSender', label: 'Show sender avatars' },
                { key: 'showSnippet', label: 'Show email snippets in list' },
                { key: 'conversationView', label: 'Group emails by conversation' },
              ].map((option) => (
                <div key={option.key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{option.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={displaySettings[option.key as keyof typeof displaySettings] as boolean}
                      onChange={(e) => handleSettingChange(option.key, e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Mark as Read Delay */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Mark as Read Delay</h3>
            <div className="ml-4">
              <label className="block text-sm text-gray-500 mb-2">
                Seconds before marking email as read when opened
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={displaySettings.markAsReadDelay}
                onChange={(e) => handleSettingChange('markAsReadDelay', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Immediately</span>
                <span>{displaySettings.markAsReadDelay}s</span>
                <span>10s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-6 border-t bg-gray-50">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Reset to Defaults
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDisplayOptions;
