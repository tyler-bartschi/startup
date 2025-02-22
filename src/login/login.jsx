import React from 'react';
import "./login.css";

import {Unauthenticated} from "./unauthenticated";
import {Authenticated} from "./authenticated";
import {AuthState} from "./authState";


export function Login({ userName, authState, onAuthChange}) {
    return (
        <main className="container-fluid text-center">
            <h1 className="welcome">Welcome to <span className="welcome-title">badreads</span>!</h1>
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}

            {authState === AuthState.Unauthenticated && (
                <Unauthenticated userName={userName} onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)} />
            )}
        </main>
    );
}


            <div className="login-box">
                <div>
                    <div className="input-group mb-3 pt-3">
                        <span className="input-group-text">Username</span>
                        <input className="form-control" type="text" placeholder="your username" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <div className="btn-wrapper">
                        <button type="submit" className="btn">Login</button>
                        <button type="submit" className="btn create-btn">Create</button>
                    </div>
                </div>
            </div>