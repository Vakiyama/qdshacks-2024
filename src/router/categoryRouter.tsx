import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { type Category, type CategoryServices } from "../interface/interface";
import { CategoryService } from "../database/Categories";
const db = new CategoryService()

const router = Router();

router.post("/category/add", async (req: Request, res: Response) => {
    try {

        const {name, energy} = req.body;
        
        if (!name || !energy) {
            console.log("Name or Energy is incorrect")
        }
        
        const newCategory = await db.createCategory(name, energy)
        // this will be a redirect to be a new htmx page
    } catch (error) {
        console.log("Error Creating Category", error)
    }
})

router.post ('/category/remove', async (req: Request, res: Response)=> {
    try {
        const {name} = req.body;
        
        if (!name) {
            console.log("Name is incorrect")
        }
        
        const removeCategory = await db.removeCategory(name)

    } catch {

    }
})

router.post ('/category/find', (req: Request, res: Response)=> {

})


router.post ('/category/view', (req: Request, res: Response)=> {

})

