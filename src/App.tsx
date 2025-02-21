import React from "react";
import Profile from "./Profile";
import Contents from "./Contents";

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full h-screen md:px-10 bg-white text-black">
      {/* Profile Section */}
      <div className="w-full md:w-1/3 md:h-full flex-shrink-0">
        <Profile />
      </div>

      {/* Spacing between components */}
      <div className="h-4 md:w-4" />

      {/* Contents Section */}
      <div className="w-full md:w-2/3 md:h-full flex-shrink">
        <Contents />
      </div>
    </div>
  );
};

export default App;
