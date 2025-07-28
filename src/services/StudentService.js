// This mock simulates a real REST API without a backend
let mockStudents = [
  { id: 1, name: "Alice", email: "alice@example.com", course: "Math" },
  { id: 2, name: "Bob", email: "bob@example.com", course: "Science" }
];

export const getAllStudents = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockStudents }), 300);
  });

export const getStudentById = (id) =>
  new Promise((resolve) => {
    const student = mockStudents.find(s => s.id === parseInt(id));
    setTimeout(() => resolve({ data: student }), 300);
  });

export const createStudent = (student) =>
  new Promise((resolve) => {
    const newStudent = { ...student, id: Date.now() };
    mockStudents.push(newStudent);
    setTimeout(() => resolve({ data: newStudent }), 300);
  });

export const updateStudent = (id, updatedStudent) =>
  new Promise((resolve) => {
    mockStudents = mockStudents.map(s => s.id === parseInt(id) ? { ...updatedStudent, id: s.id } : s);
    setTimeout(() => resolve({ data: updatedStudent }), 300);
  });

export const deleteStudent = (id) =>
  new Promise((resolve) => {
    mockStudents = mockStudents.filter(s => s.id !== parseInt(id));
    setTimeout(() => resolve(), 300);
  });
