import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || 'Unknown');
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-generator">
      <h2>Random Quote</h2>
      <p>"{quote}"</p>
      <p><strong>- {author}</strong></p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default QuoteGenerator;