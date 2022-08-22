import { createContext, useState } from "react";

export const SidebarContext = createContext({
  enableSidebar: false,
  sidebarVariant: true,
});

export const SidebarProvider = ({ children }) => {
  const [enableSidebar, setEnableSidebar] = useState(false);
  const [sidebarVariant, setSidebarVariant] = useState(true);

  const value = {
    enableSidebar,
    setEnableSidebar,
    sidebarVariant,
    setSidebarVariant,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
