import { Router } from "express";
const router = Router();

import logRoutes from "./logs";
router.use("/log", logRoutes);

export default router;
