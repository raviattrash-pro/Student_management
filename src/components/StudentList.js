import React, { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../services/StudentService";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  
  const navigate = useNavigate();

  const loadStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };
  

  return (
    <div className="container mt-5" >
  <h2 className ="dashboard-title">📋 Student Dashboard</h2>
  <div className="d-flex justify-content-between mb-3">
  <button onClick={() => navigate("/add")}className="btn btn-primary me-3">➕ Add Student</button>
  <input className="form-control w-25" placeholder="Search..." />
</div>
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }} className="table-container" >
        <thead >
          <tr >
            <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td><td>{s.name}</td><td>{s.email}</td><td>{s.course}</td>
              <td>
                <div className="d-flex">
                  <button className="btn btn-info me-2" onClick={() => navigate(`/edit/${s.id}`)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(s.id)}>Delete</button> 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
