import { prisma } from "../lib/prisma";

interface CreateAvailabilityDTO {
  weekDay: number;
  startTime: string;
  endTime: string;
  barberId: string;
}

export function createAvailability(data: CreateAvailabilityDTO) {
  return prisma.availability.create({
    data,
  });
}

export function listAvailabilityByBarber(barberId: string) {
  return prisma.availability.findMany({
    where: { barberId },
    orderBy: { weekDay: "asc" },
  });
}
