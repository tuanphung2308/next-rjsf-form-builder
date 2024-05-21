import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"

import {cn} from "@/lib/utils"
import "./globals.css";
import React from "react";
import {TooltipProvider} from "@/components/ui/tooltip";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Shadcn RJSF",
  description: "Made with <3",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}><TooltipProvider>{children}</TooltipProvider>
    </body>
    </html>
  );
}
