"use client";

import {
  MediaControlBar,
  MediaController,
  MediaFullscreenButton,
  MediaPlayButton,
  MediaPlaybackRateButton,
  MediaTimeRange,
} from "media-chrome/react";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <MediaController>
      <video
        slot="media"
        src={src}
        preload="auto"
        muted
        className="w-full h-full object-contain"
        playsInline
        suppressHydrationWarning
      />
      <MediaControlBar>
        <MediaPlayButton />
        <MediaTimeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
};

export default VideoPlayer;
