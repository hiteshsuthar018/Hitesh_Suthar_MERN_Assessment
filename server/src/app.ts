import express, { Application, Request, Response } from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";

const app: Application = express();
app.use(express.json());
app.use(cors({origin:"*"}));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Pulse HR Skill Matrix API");
});
app.use("/api/employees", employeeRoutes);

export default app;