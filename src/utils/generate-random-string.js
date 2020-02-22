const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (text.length <= length) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export default generateRandomString;
