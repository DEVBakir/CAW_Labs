import React, { useState } from 'react';

export const Exo1_4 = ({ id }) => {  

    const [count, setCounter] = useState(0);

    function increment () {
        setCounter(count + 1);
    }
    function decrement () {
        setCounter(count - 1);
    }

    return (
        <>
         <h1>{count}</h1>
         <button onClick={increment}>Incremet</button>
         <button onClick={decrement}>Decrement</button>

        </>
    );
};
