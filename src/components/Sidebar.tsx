import React, { useState, useEffect, useRef } from 'react';
import {
  Inbox,
  Star,
  Clock,
  Trash2,
  Settings,
  Plus,
  Tag,
  Mail,
  Users,
  Calendar,
  Bell,
  Megaphone,
  HelpCircle,
  Folder,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Label, CustomLabel } from '../types/email';

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
  onComposeClick: () => void;
  customLabels: CustomLabel[];
  onManageLabels: () => void;
  emailCounts: Record<string, number>;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);

  const navigationItems = [
    { id: 'inbox', label: 'All Conversations', icon: Inbox, count: emailCounts.inbox },
    { id: 'starred', label: 'Starred', icon: Star, count: emailCounts.starred },
    { id: 'snoozed', label: 'Snoozed', icon: Clock, count: emailCounts.snoozed },
    { id: 'bin', label: 'Bin', icon: Trash2, count: emailCounts.bin },
  ];

  // Separate system, custom, intent, and corporate labels
  const systemLabels = customLabels.filter(label => label.isSystem);
  const userLabels = customLabels.filter(label => !label.isSystem && !label.category);
  const intentLabels = customLabels.filter(label => label.category === 'intent');
  const corporateLabels = customLabels.filter(label => label.category === 'corporate');

  const getLabelCount = (labelId: string) => {
    return emailCounts[`label-${labelId}`] || emailCounts[`custom-label-${labelId}`] || 0;
  };

  const handleLabelClick = (labelId: string, isSystem: boolean) => {
    if (isSystem) {
      onItemSelect(`label-${labelId}`);
    } else {
      onItemSelect(`custom-label-${labelId}`);
    }
  };

  return (
    <>
      {/* Mobile overlay for labels dropdown */}
      {labelsExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setLabelsExpanded(false)}
        />
      )}

      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Main navigation items */}
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onItemSelect(item.id)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {item.count > 0 && (
                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                    `}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Labels Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLabelsExpanded(!labelsExpanded)}
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${labelsExpanded 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <Tag className="w-4 h-4" />
                <span className="hidden sm:inline">Labels</span>
                {labelsExpanded ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {/* Labels Dropdown Content */}
              {labelsExpanded && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                  {/* System Labels */}
                  {systemLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, true);
                        setLabelsExpanded(false);
                      }}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
                        ${activeItem === `label-${label.id}`
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: label.color }}
                        />
                        <span>{label.name}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span className={`
                          px-2 py-1 text-xs rounded-full
                          ${activeItem === `label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                        `}>
                          {getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))}

                  {/* Separator if both system and user labels exist */}
                  {systemLabels.length > 0 && (intentLabels.length > 0 || corporateLabels.length > 0) && (
                    <div className="border-t border-gray-200 my-2" />
                  )}

                  {/* Intent Labels */}
                  {intentLabels.length > 0 && (
                    <>
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                        Intent Labels
                      </div>
                      {intentLabels.map((label) => (
                        <button
                          key={label.id}
                          onClick={() => {
                            handleLabelClick(label.id, false);
                            setLabelsExpanded(false);
                          }}
                          className={`
                            w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
                            ${activeItem === `custom-label-${label.id}`
                              ? 'bg-blue-100 text-blue-700' 
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: label.color }}
                            />
                            <span>{label.name}</span>
                          </div>
                          {getLabelCount(label.id) > 0 && (
                            <span className={`
                              px-2 py-1 text-xs rounded-full
                              ${activeItem === `custom-label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                            `}>
                              {getLabelCount(label.id)}
                            </span>
                          )}
                        </button>
                      ))}
                    </>
                  )}

                  {/* Corporate Labels */}
                  {corporateLabels.length > 0 && (
                    <>
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                        Corporate Labels
                      </div>
                      {corporateLabels.map((label) => (
                        <button
                          key={label.id}
                          onClick={() => {
                            handleLabelClick(label.id, false);
                            setLabelsExpanded(false);
                          }}
                          className={`
                            w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
                            ${activeItem === `custom-label-${label.id}`
                              ? 'bg-blue-100 text-blue-700' 
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: label.color }}
                            />
                            <span>{label.name}</span>
                          </div>
                          {getLabelCount(label.id) > 0 && (
                            <span className={`
                              px-2 py-1 text-xs rounded-full
                              ${activeItem === `custom-label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                            `}>
                              {getLabelCount(label.id)}
                            </span>
                          )}
                        </button>
                      ))}
                    </>
                  )}

                  {/* Manage Labels */}
                  <div className="border-t border-gray-200 my-2" />
                  <button
                    onClick={() => {
                      onManageLabels();
                      setLabelsExpanded(false);
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Manage labels</span>
                  </button>
                  <button
                    onClick={() => {
                      onManageLabels();
                      setLabelsExpanded(false);
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add label</span>
                  </button>
                </div>
              )}
            </div>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Sidebar;