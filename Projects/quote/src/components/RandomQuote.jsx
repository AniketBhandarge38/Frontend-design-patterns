import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const API_URL = "https://dummyjson.com/quotes/random";

    const response = await fetch(API_URL);
    const data = await response.json();
    setQuote(data);
  };

  const handleClick = () => {
    fetchQuote();
  };
  return (
    <main>
      <h2>{quote.quote}</h2>
      <hr />
      <h3>{quote.author}</h3>

      <button onClick={() => handleClick()}>New Quote</button>
    </main>
  );
};

export default RandomQuote;
