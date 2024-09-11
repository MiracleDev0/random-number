import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);

    if (!isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(random);
    } else {
      setRandomNumber('Invalid input'); 
    }
  };

  return (
    <div className="random-number-generator"> 
      <input 
        type="number" 
        value={min} 
        onChange={e => setMin(e.target.value)} 
        placeholder="Minimum number" 
      />
      <input 
        type="number" 
        value={max} 
        onChange={e => setMax(e.target.value)} 
        placeholder="Maximum number" 
      />
      <button onClick={generateRandomNumber}>Generate</button>
      {randomNumber !== null && (
        <p>Random number: {randomNumber}</p>
      )}
    </div>
  );
}

export default RandomNumberGenerator;