import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = e => {
        e.preventDefault();
        setPassword(e.target.value);
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
        console.log(data.message);
        if (data.message === "logged in!"){
            navigate("/drive")
        }
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