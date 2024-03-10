import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import { isAuthenticated } from "../middleware/authenticationMiddleware";
import { type Category, type CategoryServices } from "../interface/interface";
import { CategoryService } from "../database/Categories";
const db = new CategoryService()


const router = Router();

router.post("/category/add", isAuthenticated, async (req: Request, res: Response) => {
    try {

        const [name, energy] = req.body;
        const user_id = req.session.userId as number;

        if (!user_id) {
            req.flash("error", "You must be logged in to create a category")
            res.redirect("/login")
        }
        
        if (!name || !energy) {
            console.log("Name or Energy is incorrect")
        }
        
        const newCategory = await db.createCategory(name, energy, user_id)
        // this will be a redirect to be a new htmx page
    } catch (error) {
        console.log("Error Creating Category", error)
    }
})

router.post ('/category/remove', isAuthenticated, async (req: Request, res: Response)=> {
    try {
        const {name} = req.body;
        const user_id = req.session.userId as number;
        
        if (!name) {
            console.log("Name is incorrect")
        }
        
        const removeCategory = await db.removeCategory(name)

    } catch {

    }
})

router.post ('/category/find', isAuthenticated, (req: Request, res: Response)=> {

})


router.post ('/category/view', isAuthenticated, (req: Request, res: Response)=> {

})

>>>>>>> afc84a4c1286394eb65960d6959a9e985153bec4
