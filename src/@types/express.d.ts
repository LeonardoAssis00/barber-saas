import { Barber } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      barber?: {
        barberId: string;
      };
    }
  }
}

export {};
