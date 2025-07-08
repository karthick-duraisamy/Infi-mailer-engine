import React, { useState, useRef, useEffect } from "react";
import { Search, Settings, UserCircle, Plus, X } from "lucide-react";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import NotificationPreferences from "./NotificationPreferences";
import SignatureSetup from "./SignatureSetup";
import EmailDisplayOptions from "./EmailDisplayOptions";
import GeneralSettings from "./GeneralSettings";

interface ActionBarProps {
  onSearch: (query: string) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  filters: FilterOptions;
  onComposeClick: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  onSearch,
  onFiltersChange,
  filters,
  onComposeClick,
}) => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showNotificationPreferences, setShowNotificationPreferences] =
    useState(false);
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);
  const [showEmailDisplayOptions, setShowEmailDisplayOptions] = useState(false);
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettingsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (query: any) => {
    setSearchQuery(query);
    onSearch(query);
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
    <>
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Search Section */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <div className={`relative transition-all duration-200`}>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  onClick={() => handleSearchChange(searchQuery)}
                  tabIndex={0}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <input
                  type="text"
                  placeholder="Search mail..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchExpanded(true)}
                  onBlur={() => setIsSearchExpanded(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearchChange(searchQuery);
                    }
                  }}
                  className="pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all placeholder-gray-500 text-sm"
                />

                {searchQuery && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => {
                      setSearchQuery("");
                      handleSearchChange("");
                    }}
                    tabIndex={0}
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="flex items-center space-x-2">
            {/* Filters - Hidden on mobile, shown on tablet+ */}
            <div className="hidden sm:block">
              <EmailFilters
                filters={filters}
                onFiltersChange={onFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Settings Dropdown */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors relative"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>

              {showSettingsDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Settings
                    </h3>
                  </div>

                  <button
                    onClick={handleOpenSignatureSetup}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3"
                  >
                    <UserCircle className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700 text-sm">
                      Signature Setup
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Compose Button */}
            <button
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-blue-700 bg-blue-600 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onComposeClick}
              aria-label="Compose new email"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium hidden sm:inline whitespace-nowrap">
                Compose
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Filters Row - Only shown on mobile when needed */}
        <div className="sm:hidden mt-3 pt-3 border-t border-gray-100">
          <EmailFilters
            filters={filters}
            onFiltersChange={onFiltersChange}
            onClearFilters={handleClearFilters}
          />
        </div>
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
    </>
  );
};

export default ActionBar;
