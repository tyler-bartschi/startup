import React from 'react';

import {ErrorDialog} from './errorDialog';


export function Unauthenticated(props){
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        login('/api/auth/login');
    }

    async function createUser() {
        login('/api/auth/create');
    }

    async function login(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({username: userName, password: password}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setUserName('');
            setPassword('');
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <div>
            <h1 className="welcome">Welcome to <span className="welcome-title">badreads</span>!</h1>
            <div className="login-box">
                <div>
                    <div className="input-group mb-3 pt-3">
                        <span className="input-group-text">Username</span>
                        <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password {'\u200B'}</span>
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    </div>
                    <div className="btn-wrapper">
                        <button type="submit" className="btn" onClick={() => loginUser()} disabled={!userName || !password} >Login</button>
                        <button type="submit" className="btn create-btn" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
                    </div>
                </div>
            </div>
            <ErrorDialog message={displayError} onHide={() => setDisplayError(null)} />
        </div>
    );
}