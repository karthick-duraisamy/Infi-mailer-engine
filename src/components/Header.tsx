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
} from "lucide-react";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import NotificationPreferences from "./NotificationPreferences";
import SignatureSetup from "./SignatureSetup";
import EmailDisplayOptions from "./EmailDisplayOptions";
import GeneralSettings from "./GeneralSettings";

interface HeaderProps {
  onMenuToggle: () => void;
  onSearch: (query: string) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  filters: FilterOptions;
  onComposeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  onSearch,
  onFiltersChange,
  filters,
  onComposeClick
}) => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationPreferences, setShowNotificationPreferences] =
    useState(false);
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);
  const [showEmailDisplayOptions, setShowEmailDisplayOptions] = useState(false);
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

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
        {/* Enhanced Menu Toggle Button */}
        {/* <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
        > */}
        {/* <div className="relative w-5 h-5">
            {/* Animated hamburger/close icon */}
        {/* <span className={`absolute block w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out ${
              sidebarOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out ${
              sidebarOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out ${
              sidebarOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`} />
          </div>
        </button> */}

        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div> */}
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
