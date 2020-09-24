import axios from "axios";
import { tempoQuery } from "../config/query-seeds";
import getAccessToken from "./get-access-token";
import parametriseQuery from "./query-parametrise";
import config from "../config";

const apiCall = async (option) => {
  const range = option.label.toLowerCase();
  const token = getAccessToken();
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const query =
    range === "custom"
      ? { ...tempoQuery[range], min_tempo: option.min, max_tempo: option.max }
      : tempoQuery[range];
  const url = parametriseQuery(config.SPOTIFY_API_URL, query);

  axios
    .get(url, { headers: authHeader })
    .catch((err) => {
      const { error } = err.response.data;
      console.log("Error", error.message);
      if (error.status === 401) {
        //function to log user in again
        //the rerun the api call
      }
      return err;
    })
    .then((response) => {
      console.log(response.data.tracks);
      return response.data.tracks;
    });
};

export default apiCall;
