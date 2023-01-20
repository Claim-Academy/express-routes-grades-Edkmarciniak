import { Router } from "express";
import studentController from "./controller.js";

const router = new Router();

router.get("/", (_, res) => {
  res.json(STUDENTS);
});

router.get("/attendance", (_, res) => {
  res.json(STUDENTS.map((student) => student.name));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const student = STUDENTS.find((student) => student.id === Number(id));

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

router.post("/", (req, res) => {
  const newStudent = req.body;

  if (newStudent.name) {
    STUDENTS.push({ ...newStudent, grades: [] });

    res.json(STUDENTS);
  } else {
    res.status(400).json({ message: "Student name is required" });
  }
});

router.put("/:id/grades", (req, res) => {
  const { id } = req.params;

  const student2Update = STUDENTS.find((student) => student.id === Number(id));

  if (student2Update) {
    student2Update.grades.push(req.body);

    res.json(student2Update);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

router.delete("/:id", (req, res) => {
  res.json(STUDENTS.filter((student) => student.id !== Number(req.params.id)));
});

export default router;
