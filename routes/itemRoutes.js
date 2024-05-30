import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import upload from "../multer/multerConfig.js";
import { createItem } from "../controllers/item.js";

const router = express.Router();

router.post("/create", verifyToken, upload.single("image"), createItem);

export default router;
