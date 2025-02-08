import { ThemeProvider } from "@/components/theme-provider";
import { AppWrapper } from "@/context/index";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "perfect paper and boards",
  description: "Get the fine quality paper and boards with no worries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="pb-20">
            <Navbar />
          </div>
          <AppWrapper>
            <Providers>{children}</Providers>
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
