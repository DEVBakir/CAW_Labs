import React, { useState } from 'react';

export const ClickButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
};

