import type React from "react";
import { LocalClock } from "../clock/local-clock";
import { Header } from "./header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 md:py-16 min-h-screen flex flex-col pb-12">
      <div className="fixed top-0 left-0 right-0 w-full h-20 z-50 blur-gradient-top pointer-events-none" />
      <div className="flex justify-end">
        <LocalClock timezone="Europe/Zurich" location="CEST" />
      </div>
      <Header title="Alessio Tortora" description="Developer + (Designer)" />
      {children}
    </div>
  );
}
