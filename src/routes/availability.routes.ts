import { Router } from "express";
import { create, list } from "../controllers/availability.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", create);
router.get("/", list);

export default router;
