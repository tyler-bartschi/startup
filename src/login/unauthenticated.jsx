import React from 'react';


export function Unauthenticated(props){
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
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
                        <button type="submit" className="btn create-btn" onClick={() => loginUser()} disabled={!userName || !password}>Create</button>
                    </div>
                </div>
            </div>
            <errorDialog message={displayError} onHide={() => setDisplayError(null)} />
        </div>
    );
}