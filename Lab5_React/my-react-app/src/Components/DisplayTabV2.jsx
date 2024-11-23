import React, { useState } from 'react';

export const DisplayTabV2 = ({ tab }) => {  

    return (
       <ul>
            {tab.map((element,index)=> {
               return  <li>Element {index} is : {element}</li>
            })}
       </ul>
    );
};
