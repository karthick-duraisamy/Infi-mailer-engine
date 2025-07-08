import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Settings,
  Menu,
  User,
  Bell,
  LogOut,
  UserCircle,
  Plus,
  Tag,
  X,
} from "lucide-react";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import NotificationPreferences from "./NotificationPreferences";
import SignatureSetup from "./SignatureSetup";
import EmailDisplayOptions from "./EmailDisplayOptions";
import GeneralSettings from "./GeneralSettings";
import LabelSelector from "./LabelSelector"; // Assuming this component exists
// Assuming these are defined or imported elsewhere
interface Label {
  id: string;
  name: string;
  color: string;
  category: string;
}

interface HeaderProps {
  onMenuToggle: () => void;
  onSearch: (query: string) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  filters: FilterOptions;
  onComposeClick: () => void;
  customLabels: Label[]; // Ensure this prop is passed
  selectedLabels: string[]; // Ensure this prop is passed
  handleLabelsChange: (labels: string[]) => void; // Ensure this prop is passed
  onCreateLabel: (label: Omit<Label, 'id'>) => void; // Ensure this prop is passed
  emailIds: string[]; // Ensure this prop is passed
  selectedLabelObjects: Label[]; // Ensure this prop is passed
  isLoadingLabels: boolean; // Ensure this prop is passed
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  onSearch,
  onFiltersChange,
  filters,
  onComposeClick,
  customLabels,
  selectedLabels,
  handleLabelsChange,
  onCreateLabel,
  emailIds,
  selectedLabelObjects,
  isLoadingLabels,
}) => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationPreferences, setShowNotificationPreferences] =
    useState(false);
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);
  const [showEmailDisplayOptions, setShowEmailDisplayOptions] = useState(false);
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [showLabelsMenu, setShowLabelsMenu] = useState(false);
  const [showCorporateLabelsMenu, setShowCorporateLabelsMenu] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const labelsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettingsDropdown(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (labelsMenuRef.current && !labelsMenuRef.current.contains(event.target as Node)) {
        setShowLabelsMenu(false);
        setShowCorporateLabelsMenu(false);
      }
    };

    if (showLabelsMenu || showCorporateLabelsMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showLabelsMenu, showCorporateLabelsMenu]);

  const handleSearchChange = (query: any) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    setShowProfileDropdown(false);
  };

  const handleClearFilters = () => {
    onFiltersChange({
      readStatus: "all",
      starred: false,
      hasAttachment: false,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all",
    });
  };

  const handleOpenNotificationPreferences = () => {
    setShowNotificationPreferences(true);
    setShowSettingsDropdown(false);
  };

  const handleOpenSignatureSetup = () => {
    setShowSignatureSetup(true);
    setShowSettingsDropdown(false);
  };

  const handleOpenEmailDisplayOptions = () => {
    setShowEmailDisplayOptions(true);
    setShowSettingsDropdown(false);
  };

  const handleOpenGeneralSettings = () => {
    setShowGeneralSettings(true);
    setShowSettingsDropdown(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-gray-900">Mail</h1>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            {/* Search Icon Button */}
            <button
              type="button"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => handleSearchChange(searchQuery)}
              tabIndex={0}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search mail"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchChange(searchQuery);
                }
              }}
              className="w-full pl-10 pr-10 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
            />

            {/* Cancel (×) Button */}
            {searchQuery && (
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setSearchQuery("");
                  handleSearchChange("");
                }}
                tabIndex={0}
              >
                ×
              </button>
            )}
          </div>

          <EmailFilters
            filters={filters}
            onFiltersChange={onFiltersChange}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
      {/* Intent Labels */}
          <div className="relative" ref={labelsMenuRef}>
            <button
              onClick={() => setShowLabelsMenu(!showLabelsMenu)}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title="Manage intent labels"
            >
              <Tag className={`w-4 h-4 ${isLoadingLabels ? 'animate-spin' : ''}`} />
              <span className="text-sm">Intent Labels</span>
              {selectedLabels.filter(id => {
                const label = customLabels.find(l => l.id === id);
                return label?.category === 'intent';
              }).length > 0 && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {selectedLabels.filter(id => {
                    const label = customLabels.find(l => l.id === id);
                    return label?.category === 'intent';
                  }).length}
                </span>
              )}
              {isLoadingLabels && (
                <span className="text-xs text-gray-500">Updating...</span>
              )}
            </button>

            {showLabelsMenu && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Manage Intent Labels {emailIds.length > 1 && `(${emailIds.length} emails)`}
                  </h3>

                  {/* Current Intent Labels */}
                  {selectedLabels.filter(id => {
                    const label = customLabels.find(l => l.id === id);
                    return label?.category === 'intent';
                  }).length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-2">Current intent labels:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedLabelObjects.filter(label => label.category === 'intent').map((label) => (
                          <span
                            key={label.id}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                            style={{
                              backgroundColor: `${label.color}20`,
                              color: label.color,
                              border: `1px solid ${label.color}40`,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-1"
                              style={{ backgroundColor: label.color }}
                            />
                            {label.name}
                            <button
                              onClick={() => {
                                const newLabels = selectedLabels.filter(id => id !== label.id);
                                handleLabelsChange(newLabels);
                              }}
                              className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <LabelSelector
                    selectedLabels={selectedLabels}
                    availableLabels={customLabels.filter(label => label.category === 'intent')}
                    onLabelsChange={handleLabelsChange}
                    onCreateLabel={onCreateLabel}
                    placeholder="Add intent labels..."
                    maxHeight="max-h-32"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Corporate Labels */}
          <div className="relative" ref={labelsMenuRef}>
            <button
              onClick={() => setShowCorporateLabelsMenu(!showCorporateLabelsMenu)}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title="Manage corporate labels"
            >
              <Tag className={`w-4 h-4 ${isLoadingLabels ? 'animate-spin' : ''}`} />
              <span className="text-sm">Corporate Labels</span>
              {selectedLabels.filter(id => {
                const label = customLabels.find(l => l.id === id);
                return label?.category === 'corporate';
              }).length > 0 && (
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  {selectedLabels.filter(id => {
                    const label = customLabels.find(l => l.id === id);
                    return label?.category === 'corporate';
                  }).length}
                </span>
              )}
              {isLoadingLabels && (
                <span className="text-xs text-gray-500">Updating...</span>
              )}
            </button>

            {showCorporateLabelsMenu && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Manage Corporate Labels {emailIds.length > 1 && `(${emailIds.length} emails)`}
                  </h3>

                  {/* Current Corporate Labels */}
                  {selectedLabels.filter(id => {
                    const label = customLabels.find(l => l.id === id);
                    return label?.category === 'corporate';
                  }).length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-2">Current corporate labels:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedLabelObjects.filter(label => label.category === 'corporate').map((label) => (
                          <span
                            key={label.id}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                            style={{
                              backgroundColor: `${label.color}20`,
                              color: label.color,
                              border: `1px solid ${label.color}40`,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-1"
                              style={{ backgroundColor: label.color }}
                            />
                            {label.name}
                            <button
                              onClick={() => {
                                const newLabels = selectedLabels.filter(id => id !== label.id);
                                handleLabelsChange(newLabels);
                              }}
                              className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <LabelSelector
                    selectedLabels={selectedLabels}
                    availableLabels={customLabels.filter(label => label.category === 'corporate')}
                    onLabelsChange={handleLabelsChange}
                    onCreateLabel={onCreateLabel}
                    placeholder="Add corporate labels..."
                    maxHeight="max-h-32"
                  />
                </div>
              </div>
            )}
          </div>
        {/* Settings Dropdown */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>

          {showSettingsDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {/* <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Settings</h3>
              </div>

              <button 
                onClick={handleOpenNotificationPreferences}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Bell className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Notification Preferences</span>
              </button> */}

              <button
                onClick={handleOpenSignatureSetup}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <UserCircle className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Signature Setup</span>
              </button>

              {/* <button 
                onClick={handleOpenEmailDisplayOptions}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Email Display Options</span>
              </button>

              <button 
                onClick={handleOpenGeneralSettings}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">General Settings</span>
              </button> */}
            </div>
          )}
        </div>
        <button
          className="group flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 bg-blue-600 text-white"
          onClick={onComposeClick}
        >
          <Plus className="w-5 h-5" />
          <span className="ml-2 whitespace-nowrap hidden md:inline">
            Compose
          </span>
        </button>
      </div>

      {/* Settings Modals */}
      <NotificationPreferences
        isOpen={showNotificationPreferences}
        onClose={() => setShowNotificationPreferences(false)}
      />

      <SignatureSetup
        isOpen={showSignatureSetup}
        onClose={() => setShowSignatureSetup(false)}
      />

      <EmailDisplayOptions
        isOpen={showEmailDisplayOptions}
        onClose={() => setShowEmailDisplayOptions(false)}
      />

      <GeneralSettings
        isOpen={showGeneralSettings}
        onClose={() => setShowGeneralSettings(false)}
      />
    </header>
  );
};

export default Header;