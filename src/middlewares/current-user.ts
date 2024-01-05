import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

interface JwtPayload {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: JwtPayload;
    }
  }
}
export const currentUser = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session || !req.session.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as JwtPayload;

    req.currentUser = payload;
  } catch (error) {}

  next();
};
