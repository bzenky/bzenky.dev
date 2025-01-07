import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Asano - Software Developer",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

const googleAnalyticsId = process.env.GA_TRACKING_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-auto max-w-3xl`}
      >
        {children}
        <GoogleAnalytics gaId={googleAnalyticsId} />
      </body>
    </html>
  );
}
