import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { type Category } from "../interface/interface";
import { CategoryService } from "../database/Categories";
const db = new CategoryService()

const router = Router();

router.post("/category/add", (req: Request, res: Response) => {
    
})

router.post ('/category/remove', (req: Request, res: Response)=> {

})