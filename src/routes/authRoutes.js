import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { createUser } from "../shemas/validation/createUser.js";
import { authUser } from "../shemas/validation/authUser.js";

const authRouter = Router();

authRouter.post(
  "/singup",
  validationSchemaMiddleware(createUser),
  authController.singup
);
authRouter.post(
  "/singin",
  validationSchemaMiddleware(authUser),
  authController.singin
);
authRouter.get("/me", authMiddleware, authController.userLogged);

export default authRouter;
