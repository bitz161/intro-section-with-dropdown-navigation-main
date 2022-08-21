import { createContext, useState } from "react";

export const SidebarContext = createContext({
  enableSidebar: false,
});

export const SidebarProvider = ({ children }) => {
  const [enableSidebar, setEnableSidebar] = useState(false);
  const value = { enableSidebar, setEnableSidebar };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
