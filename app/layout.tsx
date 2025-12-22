"use client";
import "./globals.css";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import MainMenu from "@/components/main-menu";
import Providers from "@/provider";
import MobileMenu from "@/components/mobile-main-menu";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex pt-7 justify-center">
            <div className="block md:hidden">
              <MobileMenu />
            </div>
            <div className="hidden md:block">
              <MainMenu />
            </div>
          </nav>

          <main className="font-sans flex flex-1 max-w-5xl justify-center mr-auto ml-auto md:py-25 px-5 md:px-0">
            <Providers>{children}</Providers>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
