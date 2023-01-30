import { Schema, model } from "mongoose";
import Grade from "./Grade.js";

export default model(
  "Student",
  new Schema({
    name: { type: String, required: [true, "Name is required"] },
    grades: { type: [Grade.schema], default: [] },
  })
);
