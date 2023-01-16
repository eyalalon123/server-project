import React, { useDebugValue } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'



function Home(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

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
        if(data.message === 'logged in!'){
            navigate('/drive')
            props.setUsername(username)
        }
        else {
            alert("username and password doesnt match")
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