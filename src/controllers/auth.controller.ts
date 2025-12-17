import { Request, Response } from "express";
import { registerBarber, loginBarber } from "../services/auth.service";

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Nome, email e senha são obrigatórios",
    });
  }

  try {
    const barber = await registerBarber({ name, email, password });
    return res.status(201).json(barber);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email e senha são obrigatórios",
    });
  }

  try {
    const result = await loginBarber({ email, password });
    return res.json(result);
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
}
