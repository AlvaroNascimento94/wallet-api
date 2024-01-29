import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = Router()

authRouter.post("/singup", authController.singup)
authRouter.post("/singin", authController.singin)
authRouter.get("/me", authMiddleware, authController.userLogged);

export default authRouter