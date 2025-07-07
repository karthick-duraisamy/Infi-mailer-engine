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
  onClose?: () => void; // Optional close handler for mobile
  onWidthChange?: (width: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
  onClose,
  onWidthChange,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(true);

  // Close sidebar when clicking on navigation items on mobile
  const handleItemSelect = (item: string) => {
    onItemSelect(item);
    // Auto-close on mobile after selection
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

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
      handleItemSelect(`label-${labelId}`);
    } else {
      handleItemSelect(`custom-label-${labelId}`);
    }
  };

  // Ref for sidebar DOM node
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState(64); // 16 * 4 = 64px (w-16)

  useEffect(() => {
    if (!sidebarRef.current) return;
    const observer = new window.ResizeObserver(entries => {
      for (let entry of entries) {
        setSidebarWidth(entry.contentRect.width);
        if (onWidthChange) onWidthChange(entry.contentRect.width);
      }
    });
    observer.observe(sidebarRef.current);
    return () => observer.disconnect();
  }, [onWidthChange]);

  return (
    <nav
      ref={sidebarRef}
      role="navigation"
      className={`
        group
        fixed top-0 left-0 h-full z-40
        bg-white border-r border-gray-200
        transition-all duration-200
        w-16 hover:w-64
        overflow-x-hidden
        shadow-lg
      `}
      style={{ minWidth: 0 }}
    >
      {/* Sidebar content here */}
      <div className="flex flex-col h-full pt-16">
        {/* Compose button, navigation, etc. */}
        {/* Example: */}
        <button
          className="flex items-center space-x-2 px-4 py-2 my-4 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={onComposeClick}
          style={{ width : "90%", margin: "15px auto", background: '#2563eb', color: "#fff"}}
        >
          <Plus className="w-5 h-5" />
          <span className="ml-3 whitespace-nowrap hidden group-hover:inline opacity-100 transition-opacity duration-200">
            Compose
          </span>
        </button>
        {/* ...other nav items... */}
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`
              sidebar-btn flex items-center w-full py-2 my-1 rounded-lg
              hover:bg-gray-100 transition-all duration-200
              ${activeItem === item.id ? "bg-blue-50" : ""}
              justify-center group-hover:justify-start
              px-0 group-hover:px-4
            `}
            style={{ margin: "5px auto", width: "90%"}}
            onClick={() => handleItemSelect(item.id)}
          >
            <item.icon
              className={`w-5 h-5 transition-colors duration-200
                ${activeItem === item.id
                  ? "text-blue-600"
                  : "text-gray-700 group-hover:text-blue-600"}
              `}
            />
            <span className="ml-3 whitespace-nowrap hidden group-hover:inline opacity-100 transition-opacity duration-200">
              {item.label}
            </span>
          </button>
        ))}
        {/* Labels Section */}
        {false && (
          <div className="pt-4">
            <div className="flex items-center justify-between px-3 py-2">
              <button
                onClick={() => setLabelsExpanded(!labelsExpanded)}
                className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-expanded={labelsExpanded}
                aria-controls="labels-list"
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
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                title="Manage labels"
                aria-label="Manage labels"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {labelsExpanded && (
              <div id="labels-list" className="ml-4 mt-2 space-y-1">
                {/* System Labels */}
                {systemLabels.map((label) => (
                  <button
                    key={label.id}
                    onClick={() => handleLabelClick(label.id, true)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm 
                      transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                      ${activeItem === `label-${label.id}`
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                    aria-current={activeItem === `label-${label.id}` ? 'page' : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: label.color }}
                        aria-hidden="true"
                      />
                      <span className="truncate">{label.name}</span>
                    </div>
                    {getLabelCount(label.id) > 0 && (
                      <span className={`
                        px-2 py-1 text-xs rounded-full flex-shrink-0 min-w-[1.5rem] text-center
                        ${activeItem === `label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                      `}>
                        {getLabelCount(label.id) > 99 ? '99+' : getLabelCount(label.id)}
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
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm 
                      transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                      ${activeItem === `custom-label-${label.id}`
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                    aria-current={activeItem === `custom-label-${label.id}` ? 'page' : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: label.color }}
                        aria-hidden="true"
                      />
                      <span className="truncate">{label.name}</span>
                    </div>
                    {getLabelCount(label.id) > 0 && (
                      <span className={`
                        px-2 py-1 text-xs rounded-full flex-shrink-0 min-w-[1.5rem] text-center
                        ${activeItem === `custom-label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                      `}>
                        {getLabelCount(label.id) > 99 ? '99+' : getLabelCount(label.id)}
                      </span>
                    )}
                  </button>
                ))}

                {/* Add Label Button */}
                <button
                  onClick={() => {
                    onManageLabels();
                    // Auto-close on mobile
                    if (window.innerWidth < 768 && onClose) {
                      onClose();
                    }
                  }}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add label</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
