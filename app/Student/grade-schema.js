import { Schema } from "mongoose";

export default new Schema( {
  gradeType: {
     type: String,
     enum: ["HW", "Quiz", "Test"],
     default: "HW": },
},
name: {
  type:
  String,
  required: [true, "Grade name is required"],
  minlength: [3, "Grade name must be at least 3 characters long"],
  trim: true,
  unique: true,
},
earned: {
  type: Number,
  required: [true, "Earned points are required"],
},
possible: {
  type: Number,
  required: [true, "Possible points are required"],
},
});




