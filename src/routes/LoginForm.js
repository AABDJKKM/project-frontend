import React from "react";
import "../styles/Loginform.css";
import { Icon } from '@iconify/react';



const LoginForm = () => {
    return (
        <div className = "page">
            {/* <div className="cover">
                <h1>Login</h1>
                <form>
                    <div className="label-container">
                        <label>Username</label>
                        <input icon="mdi:account-outline" className="extended-input" type="text" placeholder="Type your username"/>
                    </div>
                    <div className="label-container">
                        <label>Password</label>
                        <input icon="mdi:account-outline" className="extended-input" type="text" placeholder="Type your password"/>
                    </div>
                </form>
            </div> */}
            <div className = "cover">
                <h1>Login</h1>
                <form>
                    <div className="names-aligned label-container">
                        <label className="text-content">Username</label>
                        <input icon="mdi:account-outline" className="extended-input" type="text" placeholder="Type your username"/>
                    </div>
                    <div className="names-aligned">
                        <p className="text-content">Password</p>
                        <input className="extended-input" type="password" placeholder="Type your password"/>
                    </div>
                    <a className="password">Forgot password</a> 
        
                    <p>Aren't a member yet?</p>
                    <button>Register here!</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm