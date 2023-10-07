import express from "express";
import connectToDatabase from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

connectToDatabase();

export default app;
