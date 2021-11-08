const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  const authHeader = request.get("Authorization");
  if (!authHeader) {
    request.isAuth = false;
    return next();
  }
  const token = authHeader.split("")[1];
  isTokenAvailable(token, request, next);

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "secretKey");
  } catch (error) {
    request.isAuth = false;
    return next();
  }
  isDecodedToken(decodedToken, request, next);
  request.isAuth = true;
  request.userId = decodedToken.userId;
  next();
};

function isTokenAvailable(token, request, next) {
  if (!token || token === "") {
    request.isAuth = false;
    return next();
  }
}

function isDecodedToken(decodedToken, request, next) {
  if (!decodedToken) {
    request.isAuth = false;
    return next();
  }
}
