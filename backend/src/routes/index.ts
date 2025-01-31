import { Router } from "express";
import authRoutes from "./auth";
import todoRoutes from "./todo";
import { env } from "../config/env";

const router = Router();

router.use(`/${env.API_VERSION}/auth`, authRoutes);
router.use(`/${env.API_VERSION}/todo`, todoRoutes);

export default router;