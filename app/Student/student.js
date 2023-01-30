import { Schema, model } from "mongoose";
import GradeSchema from "./grade-schema.js";

const StudentSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  minLength: [3, "Name must be at least 3 characters long"],
  trim: true,
  validate: {
    validator(name) {
      return /[a-zA-Z]+([\s][a-zA-Z]+)*/.test(name);
    },
    message:
      "Student name must only contain letters and only one space between names",
  },
});

export default model("Student", StudentSchema);
