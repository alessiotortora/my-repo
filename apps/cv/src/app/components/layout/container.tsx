import { DownloadIcon } from "@radix-ui/react-icons";
import type React from "react";
import { Header } from "./header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 md:py-16 min-h-screen flex flex-col pb-12">
      <div className="w-full flex justify-end h-12 text-xs">
        <a
          href="/pdf/resume_2025_updated.pdf"
          download
          className="flex items-center gap-1 px-4 py-2 rounded-lg transition-colors duration-200 text-muted-foreground hover:text-foreground"
          aria-label="Download CV"
        >
          <DownloadIcon className="size-3" />
          <span className="text-[0.6rem] font-medium">Download CV</span>
        </a>
      </div>
      <Header title="Alessio Tortora" description="Developer + (Designer)" />
      {children}
      <div className="w-full flex flex-col justify-end items-end h-16 mt-12 font-script">
        <span>Alessio Tortora</span>
        <span className="text-sm">
          {new Date().toLocaleDateString("en-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
