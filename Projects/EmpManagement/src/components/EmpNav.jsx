import React from "react";

const EmpNav = ({ addEmp, setAddEmp }) => {
  return (
    <nav>
      <h1>Employee Management</h1>

      <button onClick={() => setAddEmp(!addEmp)}>Add Employee</button>
    </nav>
  );
};

export default EmpNav;
