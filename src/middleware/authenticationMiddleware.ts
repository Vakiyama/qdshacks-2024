import { type Request, type Response, type NextFunction } from "express";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/auth/login");
  }
}
