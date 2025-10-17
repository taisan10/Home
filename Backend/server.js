import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

