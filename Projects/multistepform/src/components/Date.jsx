const Date = ({ setDate, setActiveTab }) => {
  return (
    <div className="container">
      <button onClick={() => setActiveTab("email")}>Back</button>
      <div className="fill-details">
        <input
          type="date"
          id="date"
          onChange={(event) => setDate(event.target.value)}
        />
        <button onClick={() => setActiveTab("password")}>Next</button>
      </div>
    </div>
  );
};

export default Date;
