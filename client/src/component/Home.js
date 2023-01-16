import React, { useDebugValue } from 'react';
import { useState } from 'react';



function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangePassword = e => {
        e.preventDefault();
        setPassword(e.target.value);
        console.log(password);
    }
    const handleChangeUsername = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }
    async function createPost(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        let data = await response.json();
        console.log(data);
        // return await response.json();
    }



    return (
        <form>
            <input onChange={handleChangeUsername} type="text" value={username.value} placeholder="User Name:" />
            <input onChange={handleChangePassword} type="password" value={password.value} placeholder="Password:" />
            <button onClick={createPost}> Submit </button>
        </form>
    )
}

export default Home;