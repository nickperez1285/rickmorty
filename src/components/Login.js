import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router"
import axios from "axios"
import Register from './Register'
const Login = (props) => {
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
    const login = (e) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://wonderlist.herokuapp.com/api/auth/login'
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
    console.log(fail)
    return (
        <div>
    
    <div id= "loginForm" >
        <div id="fail" style ={{
            display: (fail ? "none" : "block")
        }}> Login Failed!</div><br/>

        <form id= "lform" >
            <label>USERNAME</label>
            <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        />
            <label> PASSWORD</label>
            <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        />
            
            <button onClick = {login} >
            LOGIN
            </button><br/>
            <p id= 'default'>
                (default login -
                username: 'user1',
                password: 'pass1')
             <Link id = "reglink" to="/reg">Register</Link>
             </p>
            </form><br/>
            
        </div><br/>
    </div>
    )
}
export default (Login);