import express from "express";
import STUDENTS from "./GRADES.js";

const app = express();

app.get("/api/students", (_, res) => {
  res.json(STUDENTS);
});

app.get("/api/students/attendance", (_, res) => {
  res.json(STUDENTS.map((student) => student.name));
});

app.get("/api/students/:id", req, res) => {
  const { id } = req.params.id

  res.send(student);
};

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
