import React from "react";

const innerLayout = ({ children }) => {
  return (
    <div className="flex-column bg-yellow-50 text-navy px-4 sm:px-10 pb-10 w-full md:max-w-6xl">
      {children}
    </div>
  );
};
export default innerLayout;
