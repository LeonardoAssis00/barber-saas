import { prisma } from "../lib/prisma";

interface CreateAppointmentDTO {
  date: Date;
  userId: string;
  serviceId: string;
  barberId: string;
}

export async function createAppointment(data: CreateAppointmentDTO) {
  return prisma.appointment.create({
    data: {
      date: data.date,
      userId: data.userId,
      serviceId: data.serviceId,
      barberId: data.barberId,
    },
  });
}

export async function listAppointmentsByBarber(barberId: string) {
  return prisma.appointment.findMany({
    where: {
      barberId,
    },
    include: {
      user: true,
      service: true,
    },
    orderBy: {
      date: "asc",
    },
  });
}
