import { Router } from "express";
import STUDENTS from "../GRADES.js";

const router = new Router();

router.get("api/students", (_, res) => {
  res.json(STUDENTS);
});
