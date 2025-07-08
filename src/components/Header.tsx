
import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
}) => {
  

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 py-3">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Left Section - Logo/Brand */}
          <div className="flex items-center space-x-3 min-w-0">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold text-gray-900 truncate">
                Mail
              </h1>
            </div>
          </div>

          
        </div>

        
      </div>

      
    </header>
  );
};

export default Header;
