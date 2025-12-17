import { Request, Response } from "express";
import {
  createAppointment,
  listAppointmentsByBarber,
} from "../services/appointment.service";

export async function create(req: Request, res: Response) {
  try {
    const { date, userId, serviceId } = req.body;

    const appointment = await createAppointment({
      date: new Date(date),
      userId,
      serviceId,
      barberId: req.barber!.barberId,
    });

    return res.status(201).json(appointment);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}

export async function list(req: Request, res: Response) {
  const appointments = await listAppointmentsByBarber(req.barber!.barberId);
  return res.json(appointments);
}
