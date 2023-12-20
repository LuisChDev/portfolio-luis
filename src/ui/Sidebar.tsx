"use client";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import { useSidebarContext } from "@/lib/SidebarContext";

export default () => {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <Sidebar
      className={twMerge(
        "ease-in-out duration-300 fixed inset-y-0 left-0 z-30 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 dark:border-gray-700 lg:flex",
        !isSidebarOpen && "opacity-0 w-16"
      )}
      aria-label="sidebar for site navigation."
      id="sidebar"
      collapsed={!isSidebarOpen}
    >
      <div className="mt-10">
        testing the sidebar
      </div>
    </Sidebar>
  )

  if (isSidebarOpen) {
    return (
      <div className="bg-primary-100">
        testing the sidebar
      </div>
    );
  } else return null;
}
