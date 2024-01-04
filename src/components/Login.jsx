import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // ** how to fetch values from UserContext **
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        // ** How to send data to UserContext **
        setUser({ userName, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text" placeholder='Username' />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
