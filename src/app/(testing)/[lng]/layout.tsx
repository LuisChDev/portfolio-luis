import React from "react";
import { dir } from "i18next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${inter.className} bg-gray-900 h-screen`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
