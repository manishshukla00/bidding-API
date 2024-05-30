import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
configDotenv();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error.message));

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening at port:${port}`));
