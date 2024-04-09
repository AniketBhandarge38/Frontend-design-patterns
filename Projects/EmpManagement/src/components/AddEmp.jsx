import React, { useState } from "react";

function AddEmp({ employees, setEmployees, setAddEmp }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  let nextId = 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fname.trim() === "" || lname.trim() === "" || email.trim() === "")
      return;

    const newEmployee = {
      id: nextId++,
      firstName: fname,
      lastName: lname,
      email: email,
      contactNumber: "4121091095",
      age: 43,
      dob: "26/08/1979",
      salary: 1,
      address: "Address1",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/0/93.png",
    };

    setEmployees([newEmployee, ...employees]);
    setAddEmp(false);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button onClick={() => setAddEmp(false)}>❌</button>
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setFname(e.target.value)}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          id="lname"
          type="text"
          placeholder="Enter last name"
          onChange={(e) => setLname(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddEmp;
