import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/dataBase.js";
import transactionRouter from "./routes/transactionsRoutes.js";



const app = express();

connectDb();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listing in port ${port}`));
