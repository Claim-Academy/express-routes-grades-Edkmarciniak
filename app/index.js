import express from "express";
import studentRoutes from "./student/routes.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
