import React, { useState } from "react";
import {
  Inbox,
  Star,
  Clock,
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
    {
      id: "inbox",
      label: "All Conversations",
      icon: Inbox,
      count: emailCounts.inbox,
    },
    { id: "starred", label: "Starred", icon: Star, count: emailCounts.starred },
    {
      id: "snoozed",
      label: "Snoozed",
      icon: Clock,
      count: emailCounts.snoozed,
    },
    { id: "bin", label: "Bin", icon: Trash2, count: emailCounts.bin },
  ];

  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);

  const intentLabels = customLabels.filter(
    (label) => label.category === "intent"
  );
  const corporateLabels = customLabels.filter(
    (label) => label.category === "corporate"
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

      {/* Vertical Sidebar */}
      <nav className={`
        bg-white border-r border-gray-200 h-full overflow-y-auto flex-shrink-0
        ${isOpen ? 'w-64' : 'w-16'} 
        transition-all duration-300 ease-in-out
        lg:w-64 lg:block
        ${isOpen ? 'block' : 'hidden lg:block'}
      `}>
        <div className="p-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2 mb-6">
            <h1 className="text-xl font-semibold text-gray-900 truncate">
              Mail
            </h1>
          </div>

          {/* Main navigation items */}
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onItemSelect(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4" />
                    <span className={`${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                      {item.label}
                    </span>
                  </div>
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

            {/* Intent Labels Section */}
            <div className="mt-6">
              <button
                onClick={() => {
                  setIsIntentOpen(!isIntentOpen);
                  setIsCorporateOpen(false); // close other
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    isIntentOpen
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <Tag className="w-4 h-4" />
                  <span className={`${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                    Intent labels
                  </span>
                </div>
                {isIntentOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isIntentOpen && (
                <div className="mt-2 space-y-1 pl-6">
                  {intentLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsIntentOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
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
                        <span className={`${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                          {label.name}
                        </span>
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

            {/* Corporate Labels Section */}
            <div className="mt-4">
              <button
                onClick={() => {
                  setIsCorporateOpen(!isCorporateOpen);
                  setIsIntentOpen(false); // close other
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    isCorporateOpen
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <Tag className="w-4 h-4" />
                  <span className={`${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                    Corporate labels
                  </span>
                </div>
                {isCorporateOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isCorporateOpen && (
                <div className="mt-2 space-y-1 pl-6">
                  {corporateLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsCorporateOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
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
                        <span className={`${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                          {label.name}
                        </span>
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
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
