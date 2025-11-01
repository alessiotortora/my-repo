"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";
import { VinylRecord } from "./vinyl-record";

interface SpotifyAlbumWrapperProps {
  albumUrl?: string;
  albumName?: string;
}

export function AlbumWrapper({ albumUrl, albumName }: SpotifyAlbumWrapperProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isTapped, setIsTapped] = useState(false);

  const toggleVinyl = () => {
    setIsTapped(!isTapped);
  };

  return (
    <div className="relative w-40 h-40">
      {/* Album cover */}
      <motion.div
        className="absolute inset-0 z-[1] cursor-pointer md:cursor-default"
        onTapStart={toggleVinyl}
      > 
        <img src={albumUrl} alt={albumName} className="w-full h-full object-cover rounded-md" />
        {/* Texture overlay */}
        <img
          src="/texture.png"
          alt="texture overlay"
          className="absolute inset-0 w-full h-full object-cover rounded-md mix-blend-screen"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "0%" }}
        animate={isDesktop || isTapped ? { opacity: 1, x: "50%" } : { opacity: 1, x: "0%" }}
        transition={{ duration: 0.4 }}
      >
        <VinylRecord className="absolute z-[0] inset-0 w-full h-full" albumUrl={albumUrl} />
      </motion.div>
    </div>
  );
}
