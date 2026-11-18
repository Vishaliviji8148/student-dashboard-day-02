import React from "react";
import "../styles/StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h2>STUDENT ID CARD</h2>
      </div>

      <div className="student-info">
        <img
          src={student.image || "https://via.placeholder.com/100"}
          alt="Student"
          className="student-image"
        />

        <h2>{student.name}</h2>
        <p className="student-role">Student</p>

        <div className="details">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Year:</strong> {student.year}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      </div>

      <div className="card-footer">
        <p>STUDENT DASHBOARD</p>
      </div>
    </div>
  );
}

export default StudentCard;