import { Router, type Request, type Response } from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { renderToHtml } from "jsxte";
import { Home } from "../views/pages/Home";
import { type User } from "../interface/interface";
const router = Router();




declare module "express-session" {
  export interface SessionData {
    userId?: number;
  }
}

router.get("/login", (req: Request, res: Response) => {
  const html = renderToHtml(
    <Home>
      <p>"Hello QDS"</p>
    </Home>
  );
  res.send(html);
});

router.post(
  "/login",
  [
    body("username")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      const user = await db.findUserbyUsername(username, password);
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(401).send("Invalid username or password");
      } else {
        req.session.userId = user.id;
        res.redirect("/");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/register", (req: Request, res: Response) => {
  const html = renderToHtml(
    <Home>
      <p>"Hello QDS"</p>
    </Home>
  );
  res.send(html);
});

router.post(
  "/register",
  [
    body("username", "Username is required").notEmpty(),
    body("username", "Username must be 3-20 characters long").isLength({
      min: 3,
      max: 20,
    }),
    body("email", "Email is not valid").isEmail(),
    body("password", "Password is required").notEmpty(),
    body("password", "Password must be at least 6 characters long").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const saltRounds = 10;
    try {
      const user = await db.findUserByUsername(username);
      if (user) {
        res.status(400).send("Username already exists");
      } else {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        await db.createUser(username, email, hashedPassword);
        res.redirect("/auth/login");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/auth/login");
  });
});

export default router;
