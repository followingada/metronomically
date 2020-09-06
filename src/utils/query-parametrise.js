const parametriseQuery = (url, query) => {
  let parametrisedQueryURL = url;
  if (typeof query == "object" && Object.keys(query).length > 0) {
    parametrisedQueryURL +=
      "?" +
      Object.keys(query)
        .map((k) => {
          return encodeURIComponent(k) + "=" + encodeURIComponent(query[k]);
        })
        .join("&");
  }
  return parametrisedQueryURL;
};

export default parametriseQuery;
