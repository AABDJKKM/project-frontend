import React from "react";
import "../styles/Loginform.css";
import { Icon } from '@iconify/react';



const LoginForm = () => {
    return (
        <div className = "page">
            <div className = "cover">
                <h1>Login</h1>
                <div className="names-aligned">
                    <p className="text-content">Username</p>
                    <Icon icon="mdi:account-outline" className="icon" />
                    <input className="extended-input" type="text" placeholder="Type your username"/>
                </div>
                <div className="names-aligned">
                    <p className="text-content">Password</p>
                    <input className="extended-input" type="password" placeholder="Type your password"/>
                </div>

                <p>Forgot password</p> 
     
                <p>Aren't a member yet?</p>
                <button>Register here!</button>
            </div>
        </div>
    )
}

export default LoginForm