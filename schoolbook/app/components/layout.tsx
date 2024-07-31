"use client";

import { Header } from "../app/components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname === "/sign/signup" ? null : <Header />}
        {children}
        {pathname === "/sign/signup" ? null : <Footer />}
      </body>
    </html>
  );
}
