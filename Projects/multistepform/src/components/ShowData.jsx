const ShowData = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.date}</p>
    </div>
  );
};

export default ShowData;
