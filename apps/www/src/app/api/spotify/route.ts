import { NextResponse } from "next/server";

interface SpotifyArtist {
  name: string;
}

const getAccessToken = async () => {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN || "",
    }),
  });

  const data = await res.json();
  return data.access_token;
};

export async function GET() {
  try {
    const access_token = await getAccessToken();

    const nowPlayingRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If no track is currently playing, fallback to recently played
    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      const recentRes = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      const recentData = await recentRes.json();
      const track = recentData.items[0].track;

      return NextResponse.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((a: SpotifyArtist) => a.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
        playedAt: recentData.items[0].played_at,
      });
    }

    const data = await nowPlayingRes.json();
    const track = data.item;

    return NextResponse.json({
      isPlaying: true,
      title: track.name,
      artist: track.artists.map((a: SpotifyArtist) => a.name).join(", "),
      album: track.album.name,
      albumImageUrl: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
    });
  } catch (error) {
    console.error("Spotify fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch track" }, { status: 500 });
  }
}
