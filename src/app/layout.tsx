import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Flowbite, ThemeModeScript } from "flowbite-react";

import './globals.css'

import Navbar from "@/ui/Navbar";
import Sidebar from "@/ui/Sidebar";
import { SidebarProvider } from "@/lib/SidebarContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luis Chavarriaga: Software Engineer',
  description: 'Luis Chavarriaga\'s personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 h-screen`}>
        <SidebarProvider>
          <Navbar />
          <div className="mt-10 flex items-start">
            <Sidebar />
            {children}
          </div>
        </SidebarProvider>
      </body>

    </html>
  )
}
