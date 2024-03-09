import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { type Category } from "../interface/interface";

const router = Router();

router.post("/category/add", (req: Request, res: Response) => {})