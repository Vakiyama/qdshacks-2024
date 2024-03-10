import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import bcrypt from "bcrypt";
import { renderToHtml } from "jsxte";
import { Login } from "../views/pages/Login";
import { Register } from "../views/pages/Register";
import { UserService } from "../database/Users";
import { ensureNotAuthenticated } from "../middleware/authenticationMiddleware";
import { CategoryService } from "../database/Categories";
const router = Router();
const db = new UserService();
const categoryService = new CategoryService();

declare module "express-session" {
  export interface SessionData {
    userId?: number;
  }
}

router.get("/login", (req: Request, res: Response) => {
  const html = renderToHtml(<Login />);
  res.send(html);
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await db.findUserByEmail(email);
    console.log("user", user);

    if (!user) {
      return res.status(401).send("Invalid username or password");
    }
    // @ts-ignore
    console.log(password, user.password_hash);
    // @ts-ignore
    const match = await bcrypt.compare(password, user.password_hash);
    console.log(match);
    if (!match) {
      res.status(401).send("Invalid username or password");
    } else {
      console.log(user);
      // @ts-ignore
      req.session.userId = user.user_id;
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get(
  "/register",
  ensureNotAuthenticated,
  (req: Request, res: Response, next: NextFunction) => {
    const html = renderToHtml(<Register />);
    res.send(html);
  }
);

router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  try {
    const user = await db.findUserByUsername(username);
    if (user) {
      res.status(400).send("Username already exists");
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const id = await db.createUser(email, username, hashedPassword);
      console.log("The user got created");
      req.session.userId = Number(id);
      categoryService.createCategory("Study", 5, req.session.userId);
      categoryService.createCategory("Work", 5, req.session.userId);
      categoryService.createCategory("Leisure", 25, req.session.userId);
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/auth/login");
  });
});

export default router;
