import { Router } from "express";
import authRoutes from "./auth";
import taskRoutes from "./task";
import { env } from "../config/env";

const router = Router();

router.use(`/${env.API_VERSION}/auth`, authRoutes);
router.use(`/${env.API_VERSION}/task`, taskRoutes);

export default router;