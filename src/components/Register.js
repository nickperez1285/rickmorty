import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router"
import axios from "axios"

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();
    const [fail, setFail] = useState(true
    )
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const register = (e) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://wonderlist.herokuapp.com/api/auth/register'
        e.preventDefault();
        axios.post(proxyurl + url, credentials)
            .then(res => {
                if (res.status == 200) {
                    history.push("/list")
                    // localStorage.setItem('token', res.data)

                }
            })
            .catch(err => {
                setFail(false)
                console.log(err);
            });
    }





    return (
        <div>
 
    <form >
        <label>Username</label>
        <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        />
        <label> password</label>
        <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        />
        
        <button onClick = {register} >
        Register
        </button>
    </form>

        <div id="fail" style ={{
            display: (fail ? "none" : "block")
        }}> Please chose different username </div>

</div>


    )
}

export default Register