import { type Request, type Response, type NextFunction } from "express";
import { User } from "../user";
import { UserService } from "../database/Users";
import { CategoryService } from "../database/Categories";

export async function isAuthenticated(
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
      const categories = await categoryDb.getCateoriesByUserId(userId);

      const categoriesNameAndEnergy = categories!.map((category) => {
        return { name: category.name, charge: category.energy };
      });
      if (user) {
        const userObject = new User(user.username, categoriesNameAndEnergy, userId);
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
