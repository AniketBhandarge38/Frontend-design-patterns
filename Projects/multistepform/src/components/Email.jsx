const Email = ({ setEmail, setActiveTab }) => {
  return (
    <div className="container">
      <button onClick={() => setActiveTab("name")}>Back</button>
      <div className="fill-details">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={() => setActiveTab("date")}>Next</button>
      </div>
    </div>
  );
};

export default Email;
