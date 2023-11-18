import { Router } from "express";
import authRoutes from './Auth.Routes.js'
import productRoutes from './Product.Routes.js'

const router = Router()

router.use('/auth',authRoutes)
router.use('/product',productRoutes)

export default router