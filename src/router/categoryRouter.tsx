import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { type Category } from "../interface/interface";


const router = Router();

router.post("/category/add", (req: Request, res: Response) => {
    const { name, energy } = req.body;
    const user_id = req.session.userId;
    if (user_id) {
        db.createCategory(name, energy, user_id);
        res.redirect("/");
    } else {
        res.status(401).send("Unauthorized");
    }
})