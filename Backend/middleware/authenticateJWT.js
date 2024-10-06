import jwt from "jsonwebtoken";

const SecretKey = "SECr3t";

export const authenticateJwt = async (req, res, next) => {
  const authHeader = await req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SecretKey, (err, user) => {
      if (err) {
        console.log("unverified token");
        return res.sendStatus(403);
      }
      console.log("token verified");

      req.user = user;
      console.log("before nexxt");
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
