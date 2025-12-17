import { Router } from "express";
import { create, list } from "../controllers/service.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Todas as rotas abaixo exigem autenticação
router.use(authMiddleware);

// Criar serviço (ADMIN)
router.post("/", create);

// Listar serviços do barbeiro logado
router.get("/", list);

export default router;
