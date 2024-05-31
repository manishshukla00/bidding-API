import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import upload from "../multer/multerConfig.js";
import {
  createItem,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem,
} from "../controllers/item.js";

const router = express.Router();

router.post("/create", verifyToken, upload.single("image"), createItem);
router.get("/allItems", verifyToken, getAllItems);
router.get("/:id", verifyToken, getItemById);
router.put("/update/:id", verifyToken, updateItem);
router.delete("/delete/:id", verifyToken, deleteItem);

export default router;
