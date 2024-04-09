import React from "react";

const EmpInfo = ({ empData }) => {
  return (
    <>
      <h2>Employee Information</h2>

      <img src={empData.imageUrl} alt="" />
      <p>
        {empData.firstName} {empData.lastName}
      </p>
    </>
  );
};

export default EmpInfo;
