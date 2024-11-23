import React, { useState } from 'react';

export const ListUsers = () => {  
    const [users, setUsers] = useState(["Mohamed", "Ali", "Bakir", "Lokman"]);

    const handleDelete = (userToDelete) => {
        setUsers(users.filter(user => user !== userToDelete)); 
    };

    return (
        <ul>
            {
                users.map((element, index) => (
                    <li key={index}>
                        {element} 
                        <button style={{marginLeft: 5}} onClick={() => handleDelete(element)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
};
