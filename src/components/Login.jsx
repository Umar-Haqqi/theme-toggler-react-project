import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // ** how to fetch values from UserContext **
    const { setUser } = useContext(UserContext)
    // ** Now the data is set in user of UserContext, and can be extracted **

    const handleSubmit = (e) => {
        e.preventDefault();

        // ** How to send data to UserContext **
        setUser({ userName, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            /><br />

            <input type="password" placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <button onClick={handleSubmit}>Submit</button>
        </div >
    )
}

export default Login
