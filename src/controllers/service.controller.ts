import { Request, Response } from "express";
import {
  createService,
  listServicesByBarber,
} from "../services/service.service";

export async function create(req: Request, res: Response) {
  try {
    const { name, price, duration } = req.body;

    // barberId vem do token (authMiddleware)
    const barberId = req.barber!.barberId;

    const service = await createService({
      name,
      price,
      duration,
      barberId,
    });

    return res.status(201).json(service);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function list(req: Request, res: Response) {
  try {
    const barberId = req.barber!.barberId;

    const services = await listServicesByBarber(barberId);

    return res.json(services);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
