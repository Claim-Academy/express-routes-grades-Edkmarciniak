import STUDENTS from "../GRADES.js";

import { promises as fs } from "fs";

const studentsWithoutIds = STUDENTS.map((student) => {
  const { id, ...rest } = student;
  return rest;
});

fs.writeFile(
  "students.json",
  JSON.stringify(studentsWithoutIds, null, 2),
  "utf-8"
);
