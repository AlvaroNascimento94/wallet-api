import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { createTransaction } from "../shemas/validation/createTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(createTransaction),
  transactionController.create
);
transactionRouter.get("/transactions", transactionController.findAllByUser);

transactionRouter.put("/transactions/:id", transactionController.findAndUpdate);

transactionRouter.delete("/transactions/:id", transactionController.findAndDelete);



export default transactionRouter;
