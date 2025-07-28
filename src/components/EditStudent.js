import React, { useEffect, useState } from "react";
import { getStudentById, updateStudent } from "../services/StudentService";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadStudent = async () => {
      const res = await getStudentById(id);
      setStudent(res.data);
    };
    loadStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/");
  };

  return (
    <div className="text-center mt-5">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}className="center-form d-flex flex-column align-items-center">
        <input name="name" value={student.name} onChange={handleChange} required /><br />
        <input name="email" value={student.email} onChange={handleChange} required /><br />
        <input name="course" value={student.course} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
