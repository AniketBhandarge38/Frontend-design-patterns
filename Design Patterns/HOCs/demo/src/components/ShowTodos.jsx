import React from "react";

const ShowTodos = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodos;
