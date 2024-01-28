import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouter = Router()

authRouter.post("/singup", authController.singup)
authRouter.post("/singin", authController.singin)

export default authRouter