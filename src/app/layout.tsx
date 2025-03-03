import type { Metadata } from "next";
import { Raleway, Spectral, Spectral_SC } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { StarsBackground } from "./StarsBackground";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const spectralSc = Spectral_SC({
  variable: "--font-spectral-sc",
  subsets: ["latin"],
  weight: ['600', '700'],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ['600', '700'],
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
        className={`${raleway.variable} ${spectralSc.variable} ${spectral.variable} antialiased m-auto max-w-3xl`}
      >
        <StarsBackground />
        <div className="relative z-10">{children}</div>
        <GoogleAnalytics gaId={googleAnalyticsId} />
      </body>
    </html>
  );
}
