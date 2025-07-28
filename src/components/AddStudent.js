import React, { useState } from "react";
import { createStudent } from "../services/StudentService";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(student);
    navigate("/");
  };

  return (
    <div className="text-center mt-5">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="center-form d-flex flex-column align-items-center">
        <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" value={student.email} onChange={handleChange} required /><br />
        <input name="course" placeholder="Course" value={student.course} onChange={handleChange} required /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;
