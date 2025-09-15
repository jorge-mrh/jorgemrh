"use client";
import "./globals.css";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { Geist, Geist_Mono } from "next/font/google";
import MainMenu from "@/components/main-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    useAuthStore.getState().initialize();
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <nav className="flex justify-start pt-7 md:justify-center">
          <MainMenu></MainMenu>
        </nav>

        <main className="font-sans p-5">{children}</main>
      </body>
    </html>
  );
}
