import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainMenu from "@/components/MainMenu";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <nav className="flex justify-start md:justify-center">
          <MainMenu></MainMenu>
        </nav>

        <main className="font-sans p-5">{children}</main>
      </body>
    </html>
  );
}
