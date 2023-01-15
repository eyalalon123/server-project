import React, { useDebugValue } from 'react';
import { useState } from 'react';



function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangePassword = e => {
        e.preventDefault();
        setPassword = passwordValue;
    }
    const handleChangeUsername = e => {
        e.preventDefault();
        setUsername = usernameValue;
    }
    const getUsername = async () => {
        let res = await fetch("localhost:5000/manage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
            .then(response => response.json())
            .catch(error => { throw error });
    }


    return (
        <>
            <form>
                <input onChange={handleChangeUsername} type="text" value={usernameValue} placeholder="User Name:" />
                <input onChange={handleChangePassword} type="password" value={passwordValue} placeholder="Password:" />
            </form>
        </>
    )
}

export default Home;