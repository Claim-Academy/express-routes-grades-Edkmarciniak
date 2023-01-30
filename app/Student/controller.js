import mongoose from "mongoose";
import config from "../config.js";
import Student from "./Student.js";

mongoose.set(strictQuery, true);

mongoose
  .connect(config.getDbConn("students"))
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

export const controller = {
  getStudents() {
    return Student.find();
  },

  getStudent(id) {
    return Student.findById(id);
  },

  createStudent(student) {
    return Student.create(student);
  },

  createStudentGrade(id, grade) {
    return Student.findByIdAndUpdate(id, { $push: { grades: grade } });
  },

  updateStudentName(id, name) {
    return StudentByIdAndUpdate(id, { name }, { strict: "throw" });
  },

  updateStudentGrade(id, grade) {
    return Student.findByIdAndUpdate(
      id,
      { $push: { grades: grade } },
      { strict: "throw" }
    );
  },
};

export default controller;

Student.updateMany(
  {},
  {
    $set: { "grades.$[elem]._id": mongoose.Types.ObjectId() },
  },

  // Must pass in the arrayFilters option to updateMany() to use the elem._id
  {
    // Only update grades that don't have an _id
    arrayFilters: [{ "elem._id": { $exists: false } }],
  }
)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// TODO: Set up the corresponding route in app/student/routes.js 👇🏾

// TODO: Add method to get a single student by id

// TODO: Add method to create a new student (scores can be empty)

// TODO: Add method to update a single student's name by id

// TODO: Add method to update a single score by student id and score id

// TODO: Add method to delete a single score by student id and score id

// TODO: Add method to delete a single student by id
