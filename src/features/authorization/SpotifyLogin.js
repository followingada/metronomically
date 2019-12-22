import React from "react";

const SpotifyLogin = ({ className }) => {
  const handleClick = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
    const redirect_uri = "http://localhost:3000";
    const scope = "user-read-private user-read-email";
    const state = generateRandomString(16);

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += `&client_id=${encodeURIComponent(client_id)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    url += `&state=${encodeURIComponent(state)}`;

    window.location = url;
  };

  return (
    <button className={className} onClick={handleClick}>
      Log in with Spotify
    </button>
  );
};

const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (text.length <= length) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export default SpotifyLogin;
