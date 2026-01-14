import { Router } from "express";
import { login,refresh } from "../controllers/auth.controller";

const router = Router();
router.post("/login", login);  // Login endpoint
router.post("/refresh", refresh); // Refresh token endpoint
export default router;