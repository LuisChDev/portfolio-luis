"use client";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import { HiHome, HiLightBulb } from "react-icons/hi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoIosMail, IoLogoGameControllerA } from "react-icons/io";

import { useSidebarContext } from "@/lib/SidebarContext";
import { isSmallScreen } from "@/lib/utils";

const AppSidebar: FC = () => {
  const { isSidebarOpen } = useSidebarContext();

  /* isSmallScreen && "-left-16 md:left-0" */
  return (
    <Sidebar
      className={twMerge(
        "fixed inset-y-0 left-0 z-10 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        !isSidebarOpen && "hidden w-16 md:flex",
      )}
      aria-label="sidebar for site navigation."
      id="sidebar"
      collapsed={!isSidebarOpen}
    >
      <div className="mt-10">
        <Sidebar.Items>
          <Sidebar.ItemGroup>  {/* sections on landing */}
            <Sidebar.Item href="/" icon={HiHome}>
              Start
            </Sidebar.Item>
            <Sidebar.Item href="#experience" icon={HiLightBulb}>
              Experience
            </Sidebar.Item>
            <Sidebar.Item href="/" icon={HiMiniWrenchScrewdriver}>
              Skills
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>  {/* other pages */}
            <Sidebar.Item href="/game" icon={IoLogoGameControllerA}>
              Let's play!
            </Sidebar.Item>
            <Sidebar.Item href="/contact" icon={IoIosMail}>
              Contact me
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  )
}

export default AppSidebar;
