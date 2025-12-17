import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterBarberDTO {
  name: string;
  email: string;
  password: string;
}

interface LoginBarberDTO {
  email: string;
  password: string;
}

export async function registerBarber(data: RegisterBarberDTO) {
  const exists = await prisma.barber.findUnique({
    where: { email: data.email },
  });

  if (exists) {
    throw new Error("Email já cadastrado");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const slug = data.email.split("@")[0] + "-" + Date.now();

  const barber = await prisma.barber.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      slug,
    },
    select: {
      id: true,
      name: true,
      email: true,
      slug: true,
      createdAt: true,
    },
  });

  return barber;
}

export async function loginBarber(data: LoginBarberDTO) {
  const barber = await prisma.barber.findUnique({
    where: { email: data.email },
  });

  if (!barber) {
    throw new Error("Email ou senha inválidos");
  }

  const valid = await bcrypt.compare(data.password, barber.password);
  if (!valid) {
    throw new Error("Email ou senha inválidos");
  }

  const token = jwt.sign({ barberId: barber.id }, process.env.JWT_SECRET!, {
    expiresIn: "8h",
  });

  return {
    token,
    barber: {
      id: barber.id,
      name: barber.name,
      email: barber.email,
      slug: barber.slug,
    },
  };
}
