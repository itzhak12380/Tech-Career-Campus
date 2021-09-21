import { useState } from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import RegisterForm from "../../Features/RegisterForm/RegisterFormComponent";
import StudentCard from "../../Features/StudentCard/StudentCardComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import './student.css'

const Students = () => {
  const { students } = useSelector((state) => state.students);

  const [isRegister, SetIsRegister] = useState(false);
  return (
    <div>
      <PageHeader title={"סטודנטים"} />
      <button
        className="btn"
        onClick={() => SetIsRegister(isRegister ? false : true)}
      >
        {hebrewVariables.addStudent}
      </button>
      <div className="students-card-container">
        {isRegister ? <RegisterForm SetIsRegister={SetIsRegister} /> : ""}
        <div className="student-card-container">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Students;
