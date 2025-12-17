import { Request, Response } from "express";
import {
  createAvailability,
  listAvailabilityByBarber,
} from "../services/availability.service";

export async function create(req: Request, res: Response) {
  try {
    const { weekDay, startTime, endTime } = req.body;
    const barberId = req.barber!.barberId;

    const availability = await createAvailability({
      weekDay,
      startTime,
      endTime,
      barberId,
    });

    return res.status(201).json(availability);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function list(req: Request, res: Response) {
  const barberId = req.barber!.barberId;
  const availability = await listAvailabilityByBarber(barberId);
  return res.json(availability);
}
