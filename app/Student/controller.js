import mongoose from "mongoose";
import config from "../config.js";
import Student from "./student.js";

mongoose
  .connect(config.getDbConn("students"))
  .then(() => console.log("Connected to MongoDB..."));

console.log(config.dbConn);
