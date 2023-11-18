import { Router } from "express";
import { Register } from "../controllers/Auth.Controller.js";



const router = Router()

router.post("/register",Register)

export default router;