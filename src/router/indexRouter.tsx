import express from "express";
import { renderToHtml } from "jsxte";
import { Home } from "../views/pages/Home";
import { Login } from "../views/pages/Login";
import { Register } from "../views/pages/Register";
import { Categories } from "../views/pages/Categories";
import type { User } from "../user";
import { isAuthenticated } from "../middleware/authenticationMiddleware";

const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  const user = res.locals.user as User;
  const html = renderToHtml(
    <Categories powerOpacity={1} userId={user ? user.userId : undefined} />
  );
  res.send(html);
});

export const indexRouter = router;
