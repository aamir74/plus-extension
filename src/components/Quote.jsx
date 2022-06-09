import React, { useEffect, useState } from "react";
import { getRandomQuote } from "../utils/getRandomQuote";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const getQuote = async () => {
    try {
      const quote = await getRandomQuote();
      if (quote) setQuote(quote);
      console.log({ quote });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuote();
    setInterval(() => getQuote(), 60000);
  }, []);
  return (
    <div className="footer-container">
      <small>{quote.text}</small> -{" "}
      <small>
        <em>{quote.author}</em>
      </small>
    </div>
  );
};

export { Quote };
