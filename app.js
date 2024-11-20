
import express from "express";
import { json } from "body-parser";
import apiRoutes from "./routes/api";

const app = express();
const PORT = 3000;

// Middleware
app.use(json());
app.use("/api", apiRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js SQLite API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
