import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "@repo/ui/globals.css";
import { ConsoleArt } from "@repo/ui/components/console-art";
import { OpenPanelComponent } from '@openpanel/nextjs';

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const alessioScript = localFont({
  src: "../../public/fonts/AlessioScript-Regular.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alessio's Portfolio",
  description: "Brief introduction to my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <OpenPanelComponent
        clientId='1e3d9bcf-a30b-43c6-b9d9-c49430003861'
        trackScreenViews={true}
        trackOutgoingLinks={true}
        trackAttributes={true}
      />
  
      <body
        className={`${inter.variable} ${newsreader.variable}  ${alessioScript.variable} antialiased`}
      >
        <OpenPanelComponent
        clientId='1e3d9bcf-a30b-43c6-b9d9-c49430003861'
        trackScreenViews={true}
        trackOutgoingLinks={true}
        trackAttributes={true}
      />
        <ConsoleArt message="Welcome to my portfolio!\n\nYou opened the console, so you must be interested! Feel free to send me a message: hello@alessiotortora.com" />
        {children}
      </body>
    </html>
  );
}
