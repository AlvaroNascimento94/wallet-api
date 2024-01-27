import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouter = Router()

authRouter.post("/singup", authController.singup)

export default authRouter