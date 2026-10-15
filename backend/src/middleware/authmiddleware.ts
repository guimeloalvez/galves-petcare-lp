import { NextFunction } from "express";
import { type Request, type Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

export interface JwtPayLoad {
  id_func: string;
  nome: string;
  email: string;
}

export interface AuthReq extends Request {
  user?: JwtPayLoad;
}
export const ensureAuth = (
  request: AuthReq,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ message: "Não foi provido autorização" });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return response.status(401).json({ message: "Formato de token invalido" });
  }

  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return response.status(500).json({ message: "Chave não encontrada" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayLoad;

    request.user = decoded;

    return next();
  } catch (error) {
    return response.status(401).json({ message: "JWT invalido ou expirado" });
  }
};
