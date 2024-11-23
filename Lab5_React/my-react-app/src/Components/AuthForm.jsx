import React, { useState } from 'react';
import { ListUsers } from './ListUsers';

export const AuthForm = ({ tab }) => {  
    const [submited, setSubmited] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setSubmited(true); 
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text'/>
                <br />
                <label>Password</label>
                <input type='password'/>
                <br />
                <button type="submit">Submit</button>
            </form>
            {
                submited && <div>
                    <h2>List Of Users</h2>
                    <ListUsers />
                </div>
            }
        </>
    );
};
