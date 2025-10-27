import express from "express";
import { streamVideo } from "../controllers/streamController.js";

const router = express.Router();
router.get("/video/:category/:filename", streamVideo);
export default router;

