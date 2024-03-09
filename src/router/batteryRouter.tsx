import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";

const router = Router();

router.post("/battery/")