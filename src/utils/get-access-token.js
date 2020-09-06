const getAccessToken = () => {
  let localToken = localStorage.getItem("accessToken");
  return localToken && localToken !== "undefined" ? localToken : null;
};

export default getAccessToken;
