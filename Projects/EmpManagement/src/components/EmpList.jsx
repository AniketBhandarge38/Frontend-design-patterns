import React from "react";

const EmpList = ({ empData, setSelectedEmp, handleDelete }) => {
  return (
    <>
      <h2>Employee List</h2>
      <ul className="emp-list">
        {empData.map((emp) => {
          return (
            <li key={emp.id} onClick={() => setSelectedEmp(emp)}>
              <p>
                {emp.firstName} {emp.lastName}
              </p>
              <span onClick={() => handleDelete(emp)}>❌</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EmpList;
