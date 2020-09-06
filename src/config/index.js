import env from "../env";

const config = {
  SPOTIFY_API_URL: "https://api.spotify.com/v1/recommendations",
  SPOTIFY_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
  SPOTIFY_AUTH_SCOPES: "user-read-recently-played playlist-modify-public",
  SPOTIFY_CLIENT_ID: env.SPOTIFY_CLIENT_ID,
  CALLBACK_URL: `${window.location.origin}/`,
};

export default config;
