import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = function () {
    setIsSidebarOpen(true);
  };
  const closeSidebar = function () {
    setIsSidebarOpen(false);
  };
  const openSubmenu = function (text, coordinates) {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
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
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
