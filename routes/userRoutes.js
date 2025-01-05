import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
// Include .js extension
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export default router; // Use ES Modules syntax for export
