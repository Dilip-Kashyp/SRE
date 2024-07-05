const studentDB = require("../db/userDB.js");

const getStudents = (req, res) => {
  res.status(200).json({
    status: true,
    data: studentDB,
  });
};

const addStudent = (req, res) => {
  const { name, email, section } = req.body;
  let lastId = Math.max(...studentDB.map((student) => student.id));
  if (!name || !section || !email) {
    res.status(201).json({
      status: false,
      message: `All fields required!`,
    });
    return;
  }
  const newStudent = {
    id: ++lastId,
    name: name,
    class: section,
    email: email,
  };
  studentDB.push(newStudent);
  res.status(201).json({
    status: true,
    message: "student created",
  });
};

const getStudentById = (req, res) => {
  const { id } = req.body;
  const foundStudent = studentDB.find((student) => student.id === id);
  console.log(foundStudent);
  if (!foundStudent) {
    res.status(404).json({
      status: false,
      message: `student not found with id ${id}`,
    });
    return;
  }
  res.status(200).json({
    status: true,
    message: foundStudent,
  });
};

const updateStudent = (req, res) => {
  const { id, ...updatedData } = req.body;
  const studentId = parseInt(id, 10);

  const foundIndex = studentDB.findIndex((student) => student.id === studentId);

  if (foundIndex === -1) {
    res.status(404).json({
      status: false,
      message: `Student not found with id ${id}`,
    });
    return;
  }

  studentDB[foundIndex] = { ...studentDB[foundIndex], ...updatedData };

  res.status(200).json({
    status: true,
    message: studentDB[foundIndex],
  });
};

const deleteStudent = (req, res) => {
  const studentId = req.body;

  const foundIndex = studentDB.findIndex((student) => student.id === studentId);

  if (foundIndex === -1) {
    res.status(404).json({
      status: false,
      message: `Student not found with id ${studentId}`,
    });
    return;
  }

  const deletedStudent = studentDB.splice(foundIndex, 1);

  res.status(200).json({
    status: true,
    message: "Student deleted successfully",
    student: deletedStudent[0],
  });
};

module.exports = {
  getStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
