import jwt from "jsonwebtoken";

export default async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      console.log(token);

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
        req.user = { userId: user.userId, role: user.role };
        next();
      });
    } else {
      res.status(401).json("You are not authenticated!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}
