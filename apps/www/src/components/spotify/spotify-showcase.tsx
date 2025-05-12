interface NowPlayingResponse {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  playedAt?: string;
}

async function getNowPlaying(): Promise<NowPlayingResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/spotify`, {
    next: { revalidate: 30 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

import { AlbumWrapper } from "./album-wrapper";

export async function SpotifyShowcase() {
  const song = await getNowPlaying();

  if (!song.title) {
    return (
      <div className="flex items-center justify-center mt-12">
        <p className="text-gray-500">Not playing anything right now</p>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-14">
      <div className="relative block md:hidden h-10">
        <img src="/arrow.svg" alt="handwritten arrow" className="h-6 absolute top-2 left-44" />
        <p className=" absolute top-0 left-60 font-script text-lg tracking-wider">
          tap me and scratch!
        </p>
      </div>

      <div className="flex md:gap-32 flex-col md:flex-row">
        <div>
          {song.albumImageUrl && (
            <AlbumWrapper albumUrl={song.albumImageUrl} albumName={song.album} />
          )}
        </div>

        <div className="space-y-2 items-center flex mt-4 md:mt-0">
          {(() => {
            const prefix = song.isPlaying ? "Currently listening to" : "Recently played";
            return (
              <p>
                {prefix}{" "}
                {song.songUrl ? (
                  <>
                    <a
                      href={song.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4"
                    >
                      {song.title}
                    </a>{" "}
                    by{" "}
                    <a
                      href={song.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4"
                    >
                      {song.artist}
                    </a>{" "}
                    from the album{" "}
                    <a
                      href={song.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4"
                    >
                      {song.album}
                    </a>
                  </>
                ) : (
                  <>
                    <span className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4">
                      {song.title}
                    </span>{" "}
                    by{" "}
                    <span className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4">
                      {song.artist}
                    </span>{" "}
                    from the album{" "}
                    <span className="font-normal underline decoration-dashed decoration-muted-foreground underline-offset-4">
                      {song.album}
                    </span>
                  </>
                )}
                .
              </p>
            );
          })()}
        </div>
      </div>
      <div className="relative hidden md:block">
        <img
          src="/arrow.svg"
          alt="handwritten arrow"
          className="h-6 absolute top-0 left-52 rotate-180 transform scale-x-[-1]"
        />
        <p className="absolute my-6 top-[-15] left-[17rem] font-script tracking-wider">
          scratch me
        </p>
      </div>
    </div>
  );
}
