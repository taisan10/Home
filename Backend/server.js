import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import streamRoutes from "./routes/stream.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/", streamRoutes);



app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:5000");
});











// import path from "path";
// import { fileURLToPath } from "url";


// // ---- Serve Frontend ----
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
// });

// -------------------------