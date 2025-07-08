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

  

  return (
    <>
      {/* Mobile overlay for labels dropdown */}
      {labelsExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setLabelsExpanded(false)}
        />
      )}

      {/* Search Side Panel */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-80 h-full bg-white border-r border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Search Mail</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="relative">
              <button
                type="button"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                onClick={() => {
                  onSearch(searchQuery);
                }}
                tabIndex={0}
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Search mail..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch(searchQuery);
                  }
                  if (e.key === "Escape") {
                    setIsSearchOpen(false);
                  }
                }}
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all placeholder-gray-500 text-sm"
                autoFocus
              />

              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => onSearch("")}
                  tabIndex={0}
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Search Content Area */}
          <div className="p-4 flex-1 overflow-y-auto">
            {searchQuery ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Searching for: <span className="font-medium">"{searchQuery}"</span></p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Recent Searches</p>
                  {/* You can add recent search history here */}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Enter keywords to search your emails</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Search Tips</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use quotes for exact phrases</li>
                    <li>• Search by sender name or email</li>
                    <li>• Include subject keywords</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Search box and Main navigation items */}
          <div className="flex items-center space-x-1">
            {/* Search Icon */}
            <div className="relative search-panel-container">
              <button
                type="button"
                className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${isSearchOpen ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

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
          </div>
{/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            {/* Filters Button */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>

            {/* Settings Button */}
            <div className="relative">
              <button
                className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Settings"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            {/* Compose Button */}
            <button
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-blue-700 bg-blue-600 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onComposeClick}
              aria-label="Compose new email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-medium hidden sm:inline whitespace-nowrap">
                Compose
              </span>
            </button>

            {/* Intent Labels Dropdown */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;