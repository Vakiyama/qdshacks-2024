import { Router, type Request, type Response } from "express";
import { renderToHtml } from "jsxte";
import { AddCategory } from "../views/pages/addCategory";
import { RemoveCategory } from "../views/pages/removeCategory";
import { isAuthenticated } from "../middleware/authenticationMiddleware";
import { type Category, type CategoryServices } from "../interface/interface";
import { CategoryService } from "../database/Categories";
const db = new CategoryService();

const router = Router();

router.get("/add", isAuthenticated, (req: Request, res: Response) => {
  const userId = req.session.userId as number;
  const html = renderToHtml(<AddCategory userId={userId} />);
  res.send(html);
});

router.post("/add", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { name, energy } = req.body;
    const user_id = req.session.userId as number;

    if (!user_id) {
      console.log("User is not logged in");
    }

    if (!name || !energy) {
      console.log("Name or Energy is incorrect");
    }

    const newCategory = await db.createCategory(name, energy, user_id);
    res.redirect("/");
  } catch (error) {
    console.log("Error Creating Category", error);
  }
});

router.get("/remove", isAuthenticated, (req: Request, res: Response) => {
  res.send("Remove Category");
});

router.post("/remove", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user_id = req.session.userId as number;

    if (!name) {
      console.log("Name is incorrect");
      res.send("Name is incorrect");
    }

    const removeCategory = await db.removeCategory(name, user_id);
    res.redirect("/");
  } catch (error) {
    console.log("Error Removing Category", error);
  }
});

router.get("/list", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user_id = req.session.userId as number;
    const categories = await db.getCateoriesByUserId(user_id);
    res.json(categories);
  } catch (error) {
    console.log("Error Getting Categories", error);
  }
});

router.get(
  "/edit/:categoryId",
  isAuthenticated,
  async (req: Request, res: Response) => {}
);

router.post(
  "/edit/:categoryId",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { name, energy } = req.body;
      const user_id = req.session.userId as number;
      const id = Number(req.params.categoryId);

      if (!name || !energy) {
        console.log("Name or Energy is incorrect");
        res.status(400).send("Name or Energy is incorrect");
      }

      const updateCategory = await db.updateCategory(id, name, energy);
    } catch (error) {
      console.log("Error Updating Category", error);
    }
  }
);

router.get(
  "/show/:categoryId",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.categoryId);
      const category = await db.getCategoryById(id);
      res.json(category);
    } catch (error) {
      console.log("Error Getting Category", error);
    }
  }
);

export default router;
