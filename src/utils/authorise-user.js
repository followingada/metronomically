import config from "../config";
import generateRandomString from "./generate-random-string";
import parametriseQuery from "./query-parametrise";

const authoriseUser = () => {
  const loginParams = {
    client_id: config.SPOTIFY_CLIENT_ID,
    scope: config.SPOTIFY_AUTH_SCOPES,
    redirect_uri: config.CALLBACK_URL,
    response_type: "token",
    state: generateRandomString(16)
  };

  const url = parametriseQuery(config.SPOTIFY_AUTHORIZE_URL, loginParams);

  return (window.location.href = url);
};

export default authoriseUser;
