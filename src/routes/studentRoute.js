const express = require("express");
const {
  getStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController.js");

const router = express.Router();

router.route("/").get(getStudents);
router.route("/").post(getStudentById);
router.route("/addstudent").post(addStudent);
router.route("/update").put(updateStudent);
router.route("/deleteStudent").delete(deleteStudent);

module.exports = router;
