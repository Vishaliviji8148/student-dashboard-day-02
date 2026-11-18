import React from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const student = {
    name: "John Smith",
    id: "STU2026001",
    department: "Computer Science",
    year: "2nd Year",
    email: "john@gmail.com",
    image: ""
  };

  return (
    <div>
      <StudentCard student={student} />
    </div>
  );
}

export default App;