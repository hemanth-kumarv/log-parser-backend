import { Router } from "express";
const router = Router();

import multer from "multer";
const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
  },
});

import { parseLogs } from "../../controllers/v1/logs";

// POST
router.post("/parse", uploader.single("logs"), parseLogs);

export default router;
