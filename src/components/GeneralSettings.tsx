
import React, { useState } from 'react';
import { X, Globe, Clock, Archive, Trash2, Download, Shield } from 'lucide-react';

interface GeneralSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ isOpen, onClose }) => {
  const [generalSettings, setGeneralSettings] = useState({
    language: 'en',
    timezone: 'America/New_York',
    autoSave: true,
    confirmDelete: true,
    undoSendDelay: 10,
    maxAttachmentSize: 25,
    autoArchive: false,
    archiveAfterDays: 30,
    backupFrequency: 'weekly',
    twoFactorAuth: false,
    sessionTimeout: 60,
    showTips: true,
  });

  const handleSettingChange = (key: string, value: any) => {
    setGeneralSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Here you would save the settings to your backend or local storage
    console.log('Saving general settings:', generalSettings);
    onClose();
  };

  const handleExportData = () => {
    // Implement data export functionality
    console.log('Exporting user data...');
    // alert('Data export initiated. You will receive a download link via email.');
  };

  const handleDeleteAccount = () => {
    // Implement account deletion with proper confirmation
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
    if (confirmed) {
      console.log('Account deletion requested...');
      // alert(n'Account deletion request submitted. Please check your email for confirmation.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">General Settings</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Language & Region */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Language & Region</h3>
            </div>
            
            <div className="ml-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-2">Language</label>
                <select
                  value={generalSettings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-2">Timezone</label>
                <select
                  value={generalSettings.timezone}
                  onChange={(e) => handleSettingChange('timezone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="America/New_York">Eastern Time</option>
                  <option value="America/Chicago">Central Time</option>
                  <option value="America/Denver">Mountain Time</option>
                  <option value="America/Los_Angeles">Pacific Time</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Email Behavior */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Email Behavior</h3>
            </div>
            
            <div className="ml-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700">Auto-save drafts</span>
                  <p className="text-xs text-gray-500">Automatically save email drafts while composing</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={generalSettings.autoSave}
                    onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700">Confirm before deleting</span>
                  <p className="text-xs text-gray-500">Show confirmation dialog when deleting emails</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={generalSettings.confirmDelete}
                    onChange={(e) => handleSettingChange('confirmDelete', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Undo send delay: {generalSettings.undoSendDelay} seconds
                </label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="5"
                  value={generalSettings.undoSendDelay}
                  onChange={(e) => handleSettingChange('undoSendDelay', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>No delay</span>
                  <span>30s</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Maximum attachment size (MB)</label>
                <select
                  value={generalSettings.maxAttachmentSize}
                  onChange={(e) => handleSettingChange('maxAttachmentSize', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={10}>10 MB</option>
                  <option value={25}>25 MB</option>
                  <option value={50}>50 MB</option>
                  <option value={100}>100 MB</option>
                </select>
              </div>
            </div>
          </div>

          {/* Auto Archive */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Archive className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Auto Archive</h3>
            </div>
            
            <div className="ml-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700">Enable auto-archive</span>
                  <p className="text-xs text-gray-500">Automatically archive old emails</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={generalSettings.autoArchive}
                    onChange={(e) => handleSettingChange('autoArchive', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {generalSettings.autoArchive && (
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Archive emails after (days)</label>
                  <select
                    value={generalSettings.archiveAfterDays}
                    onChange={(e) => handleSettingChange('archiveAfterDays', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={7}>7 days</option>
                    <option value={30}>30 days</option>
                    <option value={90}>90 days</option>
                    <option value={365}>1 year</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Security</h3>
            </div>
            
            <div className="ml-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-700">Two-factor authentication</span>
                  <p className="text-xs text-gray-500">Add an extra layer of security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={generalSettings.twoFactorAuth}
                    onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Session timeout (minutes)</label>
                <select
                  value={generalSettings.sessionTimeout}
                  onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hours</option>
                  <option value={0}>Never</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Data Management</h3>
            </div>
            
            <div className="ml-7 space-y-3">
              <button
                onClick={handleExportData}
                className="w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Export your data</span>
                    <p className="text-xs text-gray-500">Download a copy of your emails and settings</p>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              <button
                onClick={handleDeleteAccount}
                className="w-full text-left px-4 py-3 border border-red-300 rounded-md hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-red-900">Delete account</span>
                    <p className="text-xs text-red-500">Permanently delete your account and all data</p>
                  </div>
                  <Trash2 className="w-4 h-4 text-red-400" />
                </div>
              </button>
            </div>
          </div>

          {/* Other Options */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-700">Show helpful tips</span>
              <p className="text-xs text-gray-500">Display tips and shortcuts in the interface</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={generalSettings.showTips}
                onChange={(e) => handleSettingChange('showTips', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-3 p-6 border-t bg-gray-50">
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
  );
};

export default GeneralSettings;
