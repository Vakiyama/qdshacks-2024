import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { isAuthenticated } from "../middleware/authenticationMiddleware";
import { type Category, type CategoryServices } from "../interface/interface";
import { CategoryService } from "../database/Categories";
const db = new CategoryService();

const router = Router();

router.post("/add", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const [name, energy] = req.body;
    const user_id = req.session.userId as number;

    if (!user_id) {
      console.log("User is not logged in");
    }

    if (!name || !energy) {
      console.log("Name or Energy is incorrect");
    }

    const newCategory = await db.createCategory(name, energy, user_id);
    res.redirect("back");
  } catch (error) {
    console.log("Error Creating Category", error);
  }
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
  } catch {}
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

export default router;
