import mongoose, { Schema, model } from "mongoose";

export default model(
  "Grade",
  new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    gradeType: { type: String, enum: ["HW", "Quiz", "Test"], default: "HW": },
    name: { type: String, required: [true, "Give this grade a name"] },
    earned: { type: Number, required: [true, "Earned points are required"]
    possible: {
      type: Number,
      required: [true, "How many points were possible?"],

    },
  })
