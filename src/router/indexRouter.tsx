import express from "express";
import { renderToHtml } from "jsxte";
import { Home } from "../views/pages/Home";
import { Login } from "../views/pages/Login";
import { Register } from "../views/pages/Register";
import { Categories } from "../views/pages/Categories";
import type { User } from "../user";
import { isAuthenticated } from "../middleware/authenticationMiddleware";
import { CategoryScreen } from "../views/pages/CategoryScreen";

const router = express.Router();

router.get("/", (req, res) => {
  const user = res.locals.user as User;
  const html = renderToHtml(
    <CategoryScreen/>
  );
  res.send(html);
});

export const indexRouter = router;
