
import React, { useState } from 'react';
import { X, Bell, BellOff, Clock, Mail } from 'lucide-react';

interface NotificationPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPreferences: React.FC<NotificationPreferencesProps> = ({ isOpen, onClose }) => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [desktopNotifications, setDesktopNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [quietHours, setQuietHours] = useState({ start: '22:00', end: '08:00' });
  const [notificationTypes, setNotificationTypes] = useState({
    newEmails: true,
    replies: true,
    mentions: true,
    reminders: false,
  });

  const handleSave = () => {
    // Here you would save the preferences to your backend or local storage
    console.log('Saving notification preferences:', {
      emailNotifications,
      desktopNotifications,
      soundEnabled,
      quietHours,
      notificationTypes,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive notifications via email</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Desktop Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-500" />
              <div>
                <h3 className="font-medium text-gray-900">Desktop Notifications</h3>
                <p className="text-sm text-gray-500">Show browser notifications</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={desktopNotifications}
                onChange={(e) => setDesktopNotifications(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BellOff className="w-5 h-5 text-gray-500" />
              <div>
                <h3 className="font-medium text-gray-900">Sound Notifications</h3>
                <p className="text-sm text-gray-500">Play sound for new emails</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Quiet Hours */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Quiet Hours</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-8">
              <div>
                <label className="block text-sm text-gray-500 mb-1">From</label>
                <input
                  type="time"
                  value={quietHours.start}
                  onChange={(e) => setQuietHours({ ...quietHours, start: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">To</label>
                <input
                  type="time"
                  value={quietHours.end}
                  onChange={(e) => setQuietHours({ ...quietHours, end: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Types */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Notification Types</h3>
            <div className="space-y-3 ml-4">
              {Object.entries(notificationTypes).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={value}
                      onChange={(e) => setNotificationTypes({
                        ...notificationTypes,
                        [key]: e.target.checked
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
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

export default NotificationPreferences;
