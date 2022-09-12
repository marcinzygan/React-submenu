import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = function () {
    setIsSidebarOpen(true);
  };
  const closeSidebar = function () {
    setIsSidebarOpen(false);
  };
  const openSubmenu = function () {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = function () {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        closeSubmenu,
        closeSidebar,
        openSubmenu,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
