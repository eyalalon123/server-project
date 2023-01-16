import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Register() {
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
    const handleRegister = async (e) => {
        if (username && password) {
            e.preventDefault();
            console.log('clikced')
            try {
                const response = await fetch('http://localhost:5000/register', {
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
            } catch (err) {
                console.log(err)
            }
            createNewfolder();
            navigate("/drive")
        }
    }
    const createNewfolder = async (e) => {
            console.log('clikced')
            try {
                const response = await fetch('http://localhost:5000/createNewFolder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username
                    })
                });
                let data = await response.json();
                console.log(data);
            } catch (err) {
                console.log(err)
            }

    }

    const moveToLogin = () => {
        navigate("/login")
    }
    return (
        <div>
            <form>
                <input onChange={handleChangeUsername} type="text" value={username.value} placeholder="User Name:" />
                <input onChange={handleChangePassword} type="password" value={password.value} placeholder="Password:" />
                <button onClick={handleRegister}> Register </button>
                <button onClick={moveToLogin}> Already a member? </button>
            </form>
        </div>
    )
}

export default Register;