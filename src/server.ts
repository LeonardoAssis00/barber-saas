import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.routes";
import serviceRoutes from "./routes/service.routes";
import availabilityRoutes from "./routes/availability.routes";

const app = express();

app.use("/availability", availabilityRoutes);

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/services", serviceRoutes); //No server.ts, você precisa registrar a rota (se ainda não fez):

app.get("/", (req, res) => {
  res.json({ status: "API Barber SaaS rodando 🚀" });
});

app.listen(3333, () => {
  console.log("🔥 Server running on http://localhost:3333");
});
