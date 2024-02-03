"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { HiX, HiMenu } from "react-icons/hi";

import { useSidebarContext } from "@/lib/SidebarContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default ({ lng }: { lng: string }) => {
  const { isSidebarOpen, setSidebarOpen } = useSidebarContext();

  return (
    <header>
      <Navbar
        fluid
        className="fixed top-0 z-20 w-full border-b border-gray-200 bg-white p-0
        dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="p-3 w-full pr-4">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <button
                className="ml-3 mr-2 cursor-pointer rounded p-2 text-gray-600
                hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100
                focus:ring-2 focus:ring-gray-100 dark:text-gray-400
                dark:hover:bg-gray-700 dark:hover:text-white
                dark:focus:bg-gray-700 dark:focus:ring-gray-700"
                aria-controls="sidebar"
                aria-expanded
                onClick={() => {
                  setSidebarOpen(!isSidebarOpen);
                }}
              >
                {isSidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>

              <Navbar.Brand className="ml-4">
                <Image
                  alt="Luis Logo"
                  src="/favicon.ico"
                  height="24"
                  width="24"
                  className="ml-2"
                />
                <span className="self-center whitespace-nowrap px-3 text-xl
                font-semibold dark:text-white">
                  Luis Chavarriaga
                </span>
              </Navbar.Brand>
            </div>

            <div className="flex text-stone-900">
              <LanguageSwitcher {...{lng}} />
              <DarkThemeToggle />
            </div>

          </div>
        </div>
      </Navbar>
    </header>
  )
};
