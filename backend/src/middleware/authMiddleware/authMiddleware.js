import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    throw {
      status: 401,
      message: "Нет токена",
    };
  const token = authHeader.split(" ")[1];

  try {
    const userPayload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = userPayload;
    next();
  } catch (err) {
    throw { status: 403, message: "Неверный или просроченный токен" };
  }
};
