import React, { useState, useRef, useEffect } from 'react';
import {
  Filter, Calendar, Star, Paperclip, Mail, MailOpen, ChevronDown, X,
} from 'lucide-react';

export interface FilterOptions {
  readStatus: 'all' | 'read' | 'unread';
  starred: boolean;
  hasAttachment: boolean;
  sortBy: 'newest' | 'oldest' | 'subject-az' | 'subject-za' | 'sender-az' | 'sender-za' | 'starred-first';
  dateRange: {
    from: string;
    to: string;
  };
  intent: 'all' | 'meetings' | 'notifications' | 'campaigns' | 'support';
}

interface EmailFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const EmailFilters: React.FC<EmailFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ✅ 1. Create a ref

  // Add outside click detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const updateDateRange = (field: 'from' | 'to', value: string) => {
    onFiltersChange({
      ...filters,
      dateRange: { ...filters.dateRange, [field]: value },
    });
  };

  const hasActiveFilters = () => (
    filters.readStatus !== 'all' ||
    filters.starred ||
    filters.hasAttachment ||
    filters.sortBy !== 'newest' ||
    filters.dateRange.from ||
    filters.dateRange.to ||
    filters.intent !== 'all'
  );

  return (
    <div className="relative" ref={dropdownRef}> {/* ✅ 3. Attach the ref */}
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${hasActiveFilters()
            ? 'bg-blue-50 border-blue-200 text-blue-700'
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
        {hasActiveFilters() && (
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            Active
          </span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Filter Emails</h3>
              <div className="flex items-center space-x-2">
                {hasActiveFilters() && (
                  <button
                    onClick={onClearFilters}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Read Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Status
              </label>
              <div className="flex space-x-2">
                {[
                  { value: 'all', label: 'All', icon: Mail },
                  { value: 'unread', label: 'Unread', icon: Mail },
                  { value: 'read', label: 'Read', icon: MailOpen },
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => updateFilter('readStatus', value)}
                    className={`
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${filters.readStatus === value
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Filters
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.starred}
                    onChange={(e) => updateFilter('starred', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Star className="w-4 h-4 ml-2 mr-1 text-yellow-500" />
                  <span className="text-sm text-gray-700">Starred only</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.hasAttachment}
                    onChange={(e) => updateFilter('hasAttachment', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Paperclip className="w-4 h-4 ml-2 mr-1 text-gray-500" />
                  <span className="text-sm text-gray-700">Has attachments</span>
                </label>
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="subject-az">Subject (A-Z)</option>
                <option value="subject-za">Subject (Z-A)</option>
                <option value="sender-az">Sender (A-Z)</option>
                <option value="sender-za">Sender (Z-A)</option>
                <option value="starred-first">Starred first</option>
              </select>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">From</label>
                  <input
                    type="date"
                    value={filters.dateRange.from}
                    onChange={(e) => updateDateRange('from', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">To</label>
                  <input
                    type="date"
                    value={filters.dateRange.to}
                    onChange={(e) => updateDateRange('to', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Intent-based Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Type
              </label>
              <select
                value={filters.intent}
                onChange={(e) => updateFilter('intent', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All types</option>
                <option value="new">New emails</option>
                <option value="meetings">Meeting invites</option>
                <option value="notifications">System notifications</option>
                <option value="campaigns">Marketing campaigns</option>
                <option value="support">Support requests</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailFilters;
