const Password = ({ setPassword, setActiveTab }) => {
  return (
    <div>
      <div className="container">
        <button onClick={() => setActiveTab("date")}>Back</button>
        <div className="fill-details">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Password;
