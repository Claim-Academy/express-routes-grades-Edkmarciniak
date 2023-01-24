import mongoose from "mongoose";
import config from "../config.js";
import Student from "./Student.js";

mongoose
  .connect(config.getDbConn("students"))
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

export default {
  getStudents() {
    return Student.find();
  },
};
