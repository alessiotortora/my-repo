"use client";

import { MotionConfig, type Transition, motion } from "framer-motion";
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

const Context = createContext<{
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

function InnerContent() {
  const ctx = useContext(Context);
  const isOpen = ctx.status === "open";

  return (
    <button
      type="button"
      onClick={() => {
        if (isOpen) {
          ctx.setStatus("idle");
          return;
        }
        ctx.setStatus("open");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (isOpen) {
            ctx.setStatus("idle");
            return;
          }
          ctx.setStatus("open");
        }
      }}
      className="relative aspect-[1.3] h-40 md:h-64 border-0 bg-transparent p-0"
    >
      <motion.div
        initial={{
          backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #4eb1e7 100%)",
        }}
        animate={
          isOpen
            ? {
                backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #399ee6 80%)",
              }
            : {}
        }
        style={{ backgroundAttachment: "fixed" }}
        className="absolute bottom-0 left-0 h-[140px] md:h-[220px] w-full rounded-[16px] md:rounded-[22px] rounded-tl-none shadow-[0_32px_32px_-12px_rgba(0,0,0,0.46)] md:shadow-[0_48px_48px_-16px_rgba(0,0,0,0.46)] ring-1 ring-white/25"
      >
        <motion.div
          initial={{
            backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #4eb1e7 100%)",
          }}
          animate={
            isOpen
              ? {
                  backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #399ee6 80%)",
                }
              : {}
          }
          style={{ backgroundAttachment: "fixed" }}
          className="absolute -top-4 md:-top-5 left-0 h-4 md:h-10 w-[40%] rounded-tl-[16px] md:rounded-tl-[22px] rounded-tr-[8px] md:rounded-tr-[12px]"
        >
          <motion.div
            initial={{
              backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #4eb1e7 100%)",
            }}
            animate={
              isOpen
                ? {
                    backgroundImage: "linear-gradient(to bottom right, #b4e0fa 0%, #399ee6 100%)",
                  }
                : {}
            }
            style={{
              backgroundAttachment: "fixed",
              maskImage:
                "radial-gradient(circle 8px at 8px 0px, transparent 0, transparent 8px, black 8px)",
            }}
            className="size-2 md:size-3 absolute -right-2 md:-right-3 top-2 md:top-3"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          transform: "perspective(1100px) rotateX(0deg)",
        }}
        whileTap={{
          transform: "perspective(1100px) rotateX(-10deg)",
        }}
        animate={
          isOpen
            ? {
                transform: "perspective(1100px) rotateX(-70deg)",
              }
            : {}
        }
        className="absolute bottom-0 left-0 grid h-32 md:h-52 w-full origin-bottom place-items-center rounded-[22px] bg-gradient-to-br from-[#b4e0fa] to-[#4eb1e7] shadow-[0_-1px_1px_1px_rgba(0,0,0,0.06),0_-6px_6px_3px_rgba(0,0,0,0.06),0_-3px_3px_1.5px_rgba(0,0,0,0.06),0_-12px_12px_6px_rgba(0,0,0,0.06),0_-24px_24px_12px_rgba(0,0,0,0.06)] ring-1 ring-white/20"
      />
    </button>
  );
}

export default function Folder() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setStatus("idle");
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <Context.Provider value={{ status, setStatus }}>
      <MotionConfig transition={transition}>
        <main className="relative flex h-72 w-full items-center justify-center border border-muted-foreground/20 rounded-md">
          <InnerContent />
        </main>
      </MotionConfig>
    </Context.Provider>
  );
}
