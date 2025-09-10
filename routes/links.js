import express from "express";
import {getIndex, submitLink} from "../controllers/linksController.js"

const router = express.Router();

router.get("/", getIndex);
router.post("/submit", submitLink);

export default router;