import jwt from "jsonwebtoken";
import { userModelSchema } from "../db/index.js";

const SecretKey = "SECr3t";

export const authenticateJwt = async (req, res, next) => {
  const authHeader = await req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
