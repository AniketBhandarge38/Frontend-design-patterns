const Name = ({ setName, setActiveTab }) => {
  return (
    <div className="container">
      <div className="fill-details">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={() => setActiveTab("email")}>Next</button>
      </div>
    </div>
  );
};

export default Name;
