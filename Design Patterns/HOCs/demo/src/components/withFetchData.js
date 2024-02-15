import { useState, useEffect } from "react";

export const withFetchData = (WrappedComponent, fetchData) => {
  return function (props) {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        const data = await fetchData(props);
        setData(data);
      };
      fetchWrapper();
    }, [props]);

    return <WrappedComponent {...props} data={data} />;
  };
};
