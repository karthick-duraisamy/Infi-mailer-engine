import React, { useState } from "react";
import {
  Inbox,
  Star,
  Send,
  Trash2,
  Tag,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { CustomLabel } from "../types/email";

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
  onComposeClick: () => void;
  customLabels: CustomLabel[];
  onManageLabels: () => void;
  emailCounts: Record<string, number>;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
  onSearch,
  searchQuery,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    {
      id: "inbox",
      label: "All Conversations",
      icon: Inbox,
      count: emailCounts.inbox,
    },
    { id: "starred", label: "Starred", icon: Star, count: emailCounts.starred },
    {
      id: "sent",
      label: "Sent",
      icon: Send,
      count: emailCounts.sent,
    },
    { id: "bin", label: "Bin", icon: Trash2, count: emailCounts.bin },
  ];

  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);

  const intentLabels = customLabels.filter(
    (label) => label.category === "intent",
  );
  const corporateLabels = customLabels.filter(
    (label) => label.category === "corporate",
  );

  const getLabelCount = (labelId: string) => {
    return (
      emailCounts[`label-${labelId}`] ||
      emailCounts[`custom-label-${labelId}`] ||
      0
    );
  };

  const handleLabelClick = (labelId: string, isSystem: boolean) => {
    if (isSystem) {
      onItemSelect(`label-${labelId}`);
    } else {
      onItemSelect(`custom-label-${labelId}`);
    }
  };

  // Close search panel when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isSearchOpen && !target.closest('.search-panel-container')) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <>
      {/* Mobile overlay for labels dropdown */}
      {labelsExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setLabelsExpanded(false)}
        />
      )}

      {/* Overlay for search panel */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Search box and Main navigation items */}
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
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {item.count > 0 && (
                    <span
                      className={`
                      px-2 py-1 text-xs rounded-full
                      ${
                        isActive
                          ? "bg-blue-200 text-blue-800"
                          : "bg-gray-200 text-gray-600"
                      }
                    `}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Intent Labels Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsIntentOpen(!isIntentOpen);
                  setIsCorporateOpen(false); // close other
                }}
                className={`
      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${
        isIntentOpen
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
    `}
              >
                <Tag className="w-4 h-4" />
                <span className="hidden sm:inline">Intent labels</span>
                {isIntentOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isIntentOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                  {intentLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsIntentOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
            ${
              activeItem === `custom-label-${label.id}`
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: label.color }}
                        />
                        <span>{label.name}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span
                          className={`px-2 py-1 text-xs rounded-full
              ${
                activeItem === `custom-label-${label.id}`
                  ? "bg-blue-200 text-blue-800"
                  : "bg-gray-200 text-gray-600"
              }`}
                        >
                          {getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Corporate Labels Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCorporateOpen(!isCorporateOpen);
                  setIsIntentOpen(false); // close other
                }}
                className={`
      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${
        isCorporateOpen
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
    `}
              >
                <Tag className="w-4 h-4" />
                <span className="hidden sm:inline">Corporate labels</span>
                {isCorporateOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isCorporateOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                  {corporateLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsCorporateOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
            ${
              activeItem === `custom-label-${label.id}`
                ? "bg-blue-100 text-blue-700"
      </nav>
    </>
  );
};

export default Sidebar;