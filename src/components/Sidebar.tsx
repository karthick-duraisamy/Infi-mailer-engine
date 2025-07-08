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
  // onClose?: () => void; // Optional close handler for mobile
  // onWidthChange?: (width: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
  // onClose,
  // onWidthChange,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(true);

  // Close sidebar when clicking on navigation items on mobile
  // const handleItemSelect = (item: string) => {
  //   onItemSelect(item);
  //   // Auto-close on mobile after selection
  //   if (window.innerWidth < 768 && onClose) {
  //     onClose();
  //   }
  // };

  // Handle escape key to close sidebar
  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape' && isOpen && onClose) {
  //       onClose();
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener('keydown', handleEscape);
  //     return () => document.removeEventListener('keydown', handleEscape);
  //   }
  // }, [isOpen, onClose]);

  const navigationItems = [
    { id: 'inbox', label: 'All Conversations', icon: Inbox, count: emailCounts.inbox },
    { id: 'starred', label: 'Starred', icon: Star, count: emailCounts.starred },
    { id: 'snoozed', label: 'Snoozed', icon: Clock, count: emailCounts.snoozed },
    { id: 'bin', label: 'Bin', icon: Trash2, count: emailCounts.bin },
  ];

  // Separate system and custom labels
  const systemLabels = customLabels.filter(label => label.isSystem);
  const userLabels = customLabels.filter(label => !label.isSystem);

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

  // Ref for sidebar DOM node
  // const sidebarRef = useRef<HTMLDivElement>(null);
  // const [sidebarWidth, setSidebarWidth] = useState(64); // 16 * 4 = 64px (w-16)

  // useEffect(() => {
  //   if (!sidebarRef.current) return;
  //   const observer = new window.ResizeObserver(entries => {
  //     for (let entry of entries) {
  //       setSidebarWidth(entry.contentRect.width);
  //       if (onWidthChange) onWidthChange(entry.contentRect.width);
  //     }
  //   });
  //   observer.observe(sidebarRef.current);
  //   return () => observer.disconnect();
  // }, [onWidthChange]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => {}}
        />
      )}

      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button 
              onClick={onComposeClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Compose</span>
            </button>
          </div>

          <nav className="flex-1 px-2 space-y-1 overflow-y-auto thin-scrollbar">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onItemSelect(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
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

            {<div className="pt-4">
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={() => setLabelsExpanded(!labelsExpanded)}
                  className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1"
                >
                  <Tag className="w-5 h-5" />
                  <span>Labels</span>
                  {labelsExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={onManageLabels}
                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  title="Manage labels"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {labelsExpanded && (
                <div className="ml-4 mt-2 space-y-1">
                  {/* System Labels */}
                  {systemLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => handleLabelClick(label.id, true)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
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
                  {systemLabels.length > 0 && userLabels.length > 0 && (
                    <div className="border-t border-gray-200 my-2" />
                  )}

                  {/* User Labels */}
                  {userLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => handleLabelClick(label.id, false)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
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

                  {/* Add Label Button */}
                  <button
                    onClick={onManageLabels}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add label</span>
                  </button>
                </div>
              )}
            </div>}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
