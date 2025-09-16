"use client";
import "./globals.css";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { Geist, Geist_Mono } from "next/font/google";
import MainMenu from "@/components/main-menu";
import Providers from "@/provider";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark overflow-x-hidden`}
      >
        <nav className="flex pt-7 justify-center">
          <MainMenu></MainMenu>
        </nav>

        <main className="font-sans p-5">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
