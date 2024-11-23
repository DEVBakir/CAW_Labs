import React, { useState } from 'react';

export const Button = ({ id }) => {  

    const [clicked, setClicked] = useState(false);

    function handleClick () {
        setClicked(true);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Button{id}
            </button>
            {clicked && <p>Button #{id} was clicked</p>}  
        </div>
    );
};
