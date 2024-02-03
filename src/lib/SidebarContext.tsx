"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { FC, PropsWithChildren } from "react";
import { isBrowser, isSmallScreen } from "@/lib/utils";

interface SidebarContextType {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}
const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType,
);

export const SidebarProvider: FC<PropsWithChildren> = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = isBrowser ? window.location.pathname : "/";
  useEffect(() => {
    if (isSmallScreen) setSidebarOpen(false);
  }, [location])

  return (
    <SidebarContext.Provider value={{
      isSidebarOpen,
      setSidebarOpen
    }}>
      {children}
    </SidebarContext.Provider>
  )
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (typeof context === "undefined") {
    throw new Error("useSidebarContext goes inside SidebarContextProvider");
  }

  return context;
};
