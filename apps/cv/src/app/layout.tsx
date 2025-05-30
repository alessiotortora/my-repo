import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "@repo/ui/globals.css";
import Script from "next/script";

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
  title: "Alessio's CV",
  description: "My personal CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          defer
          src="https://umami.unriddle.xyz/script.js"
          data-website-id="28edf1b6-fa87-4c30-b100-6c3370cb00b9"
        />
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${alessioScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
