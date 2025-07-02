import React, { useState, useRef, useEffect } from 'react';
import { Search, Settings, Menu, User, Bell, LogOut, UserCircle } from 'lucide-react';
import EmailFilters, { FilterOptions } from './EmailFilters';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearch: (query: string) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  filters: FilterOptions;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onSearch, onFiltersChange, filters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettingsDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    setShowProfileDropdown(false);
  };

  const handleClearFilters = () => {
    onFiltersChange({
      readStatus: 'all',
      starred: false,
      hasAttachment: false,
      sortBy: 'newest',
      dateRange: { from: '', to: '' },
      intent: 'all',
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Mail</h1>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search mail"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
            />
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
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Settings</h3>
              </div>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <Bell className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Notification Preferences</span>
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <UserCircle className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Signature Setup</span>
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Email Display Options</span>
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">General Settings</span>
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
          >
            <User className="w-5 h-5 text-blue-600" />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">john.doe@company.com</p>
              </div>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <UserCircle className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">View Profile</span>
              </button>

              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3 text-red-600"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;