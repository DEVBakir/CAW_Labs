import React, { useState } from 'react';

export const ClickButtonV2 = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>
      {counter % 2 == 1 ? 'Clicked' : 'Not Clicked'}
      </p>
    </div>
  );
};

