import { type Request, type Response, type NextFunction } from "express";
import { User } from "../user";
import { UserService } from "../database/Users";
import { CategoryService } from "../database/Categories";

export const mock = false;

async function isAuthenticatedMock(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const categories = [];
  categories.push({ name: "work", charge: 25 });
  categories.push({ name: "school", charge: 55 });
  categories.push({ name: "health", charge: 5 });
  const userObject = new User("test user", categories, 1);
  res.locals.user = userObject;
  req.session.userId = 2;
  return next();
}

async function isAuthenticatedReal(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.session && req.session.userId) {
    const userService = new UserService();
    const categoryDb = new CategoryService();
    const userId = req.session.userId;
    try {
      const user = await userService.findUserById(userId);
      const categories = await categoryDb.getCategoriesByUserId(userId);

      const categoriesNameAndEnergy = categories!.map((category) => {
        return { name: category.name, charge: category.energy };
      });
      if (user) {
        const userObject = new User(
          user.username,
          categoriesNameAndEnergy,
          userId
        );
        res.locals.user = userObject;
        return next();
      }
    } catch (error) {
      console.error("Error in isAuthenticated middleware", error);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    return res.redirect("/auth/login");
  }
}

export async function ensureNotAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session?.userId) {
    next();
  } else {
    res.redirect("/");
  }
}

export const isAuthenticated = mock ? isAuthenticatedMock : isAuthenticatedReal;
