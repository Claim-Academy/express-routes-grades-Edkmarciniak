import express from "express";

import studentRoutes from "./app/student/routes.js";

const app = express();

app.use("api/students", studentRoutes);

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
