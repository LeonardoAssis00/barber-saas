import { prisma } from "../lib/prisma";

interface CreateServiceDTO {
  name: string;
  price: number;
  duration: number;
  barberId: string;
}

export async function createService(data: CreateServiceDTO) {
  return prisma.service.create({
    data: {
      name: data.name,
      price: data.price,
      duration: data.duration,
      barberId: data.barberId,
    },
  });
}

export async function listServicesByBarber(barberId: string) {
  return prisma.service.findMany({
    where: {
      barberId,
    },
  });
}
