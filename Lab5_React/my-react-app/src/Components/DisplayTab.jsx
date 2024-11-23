import React, { useState } from 'react';

export const DisplayTab = ({ tab }) => {  

    return (
       <ul>
            {tab.map((element)=> {
               return  <li>{element}</li>
            })}
       </ul>
    );
};
