import React from 'react';
import "./login.css"

export function Login() {
    return (
        <main className="container-fluid text-center">
            <h1 className="welcome">Welcome to <span className="welcome-title">badreads</span>!</h1>
            <div className="login-box">
                <form>
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
                </form>
            </div>
        </main>
    );
}