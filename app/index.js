import express from "express";
import studentRoutes from "./student/routes.js";
import StudentController from "./student/controller.js";

StudentController.getStudents().then((students) => {
  console.log(students);
});
const app = express();

app.use(express.json());

app.use("/api/students/", studentRoutes);

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
