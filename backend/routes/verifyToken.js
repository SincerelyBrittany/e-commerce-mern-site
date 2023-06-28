import jwt from "jsonwebtoken";

// Verify json webtoken

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY),
      (err, user) => {
        if (err) res.status(401).json("Token is not valid!");
        req.user = user;
        next();
      };
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not authorized");
    }
  });
};
