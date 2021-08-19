import React, {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setUserPassword] = useState("")
    const [Message, setMessage] = useState("")

    const handleLogin = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    const login = (e) => {
        e.preventDefault()
        if (username === "admin" && password === "admin") {
            setMessage("Dobro pajalovat")
        } else {
            setMessage("Error")
        }
        setUserPassword("")
        setUsername("")
    }

    return (
        <form>
            <label htmlFor="name">Login:</label>
            <input type="text" id="name" value={username} onChange={handleLogin}/>

            <label htmlFor="Password">Password:</label>
            <input type="Password" id="Password" value={password} onChange={handlePassword}/>

            <input type="submit" value="Login" onClick={login}/>
            <div>{Message}</div>
        </form>

    )
}

export default Login