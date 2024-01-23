import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { useTranslation } from "../i18n";

import "./globals.css";

import Navbar from "@/ui/Navbar";
import Sidebar from "@/ui/Sidebar";
import { SidebarProvider } from "@/lib/SidebarContext";

import { languages } from "../i18n/settings";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lng },
}: {
  params: { lng: string };
}) => {
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
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 h-screen`}
      >
        <SidebarProvider>
          <Navbar {...{lng}} />
          <div className="mt-10 flex items-start w-screen">
            <div className="w-16 shrink-0" /> {/* padding for the sidebar */}
            <Sidebar />
            <div className="grow flex">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
