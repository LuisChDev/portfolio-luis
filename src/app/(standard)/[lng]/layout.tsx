import React from "react";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { ThemeModeScript } from "flowbite-react";

import "./globals.css";

import Navbar from "@/ui/Navbar";
import Sidebar from "@/ui/Sidebar";
import { SidebarProvider } from "@/lib/SidebarContext";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
import Footer from "@/ui/Footer";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lng },
}: {
  params: { lng: string };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 h-screen`}
      >
        <SidebarProvider>
          <Navbar {...{ lng }} />
          <div className="mt-10 flex items-start w-screen">
            <div className="md:w-16 md:shrink-0" /> {/* padding for the sidebar */}
            <Sidebar />
            <div className="grow flex z-0">{children}</div>
          </div>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
