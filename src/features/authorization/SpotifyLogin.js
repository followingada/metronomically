import React from "react";
import authoriseUser from "../../utils/authorise-user";

const SpotifyLogin = ({ className }) => {
  return (
    <button className={className} onClick={authoriseUser}>
      Log in with Spotify
    </button>
  );
};

export default SpotifyLogin;
