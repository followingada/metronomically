const config = {
  SPOTIFY_API_URL: "https://api.spotify.com/v1/recommendations",
  SPOTIFY_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
  SPOTIFY_AUTH_SCOPES: "user-read-recently-played playlist-modify-public",
  SPOTIFY_CLIENT_ID: process.env.REACT_APP_CLIENT,
  CALLBACK_URL: `${window.location.origin}/`,
};

export default config;
