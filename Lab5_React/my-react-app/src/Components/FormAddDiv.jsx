import React, { useState } from 'react';

export const FormAddDiv = () => {  
    const [divs, setDivs] = useState([]);  

    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const newdiv = {
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor,
        };

        setDivs([...divs, newdiv]);

        setWidth('');
        setHeight('');
        setBackgroundColor('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                <input 
                    placeholder='Width' 
                    type='text' 
                    value={width} 
                    onChange={(e) => setWidth(e.target.value)} 
                />
                <input 
                    placeholder='Height' 
                    type='text' 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                />
                <input 
                    placeholder='Background Color' 
                    type='text' 
                    value={backgroundColor} 
                    onChange={(e) => setBackgroundColor(e.target.value)} 
                />
                <button type='submit'>Add Div</button>
            </form>

            <div>
                {divs.map((div, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            width: div.width, 
                            height: div.height, 
                            backgroundColor: div.backgroundColor, 
                        }} 
                    />
                ))}
            </div>
        </>
    );
};
