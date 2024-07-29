import React from "react";
import "./globals.css";

import type { Metadata } from "next";
import {NextUIProvider} from "@nextui-org/react";

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veldin Task ",
  description: "Interview task using Next.js, Airtable & Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
