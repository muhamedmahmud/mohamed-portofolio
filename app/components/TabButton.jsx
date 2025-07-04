import React from "react";
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[adb7be]";
  return (
    <button>
      <p onClick={selectTab} className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
