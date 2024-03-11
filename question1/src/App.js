import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [stars, setStars] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const newStars = [];
    for (let i = 1; i <= inputValue; i++) {
      newStars.push('*'.repeat(i));
    }
    for (let i = inputValue - 1; i >= 1; i--) {
      newStars.push('*'.repeat(i));
    }
    setStars(newStars);
  };

  return (
    <div>
      <h3>Input: 
        <input type="number" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </h3>
      {stars.map((starLine, index) => (
        <p key={index}>{starLine}</p>
      ))}
    </div>
  );
}

export default App;
