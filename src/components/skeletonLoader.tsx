export const NavbarSkeleton = () => {
  return (
    <div className="w-full h-14 bg-white shadow-md flex items-center px-4 animate-pulse">
      <div className="w-32 h-6 bg-gray-300 rounded mr-4"></div> {/* Logo */}
      <div className="flex-1 flex items-center space-x-4">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="w-10 h-10 bg-gray-300 rounded-full ml-auto"></div>{" "}
      {/* User avatar */}
    </div>
  );
};

export const ConversationSkeleton = () => {
  return (
    <div className="w-full h-full space-y-6 p-6 animate-pulse overflow-y-auto">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow p-6 w-full" // removed max-width and center
        >
          {/* Header (avatar + name + time) */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Body content */}
          <div className="space-y-3 mt-2">
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

