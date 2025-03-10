import React from 'react';
import "./account.css";
import {UserComments} from './userComments';
import {useNavigate} from 'react-router-dom';
import {ErrorDialog} from '/src/login/errorDialog';

export function Account(props) {
    const navigate = useNavigate();
    const [newUserName, setNewUserName] = React.useState("");
    const [newPassword, setNewPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function changeUserName() {
        change('/api/auth/changeUser', "username");
    }

    async function changePassword() {
        change('/api/auth/changePass', "password");
    }

    async function change(endpoint, type) {
        if (type === "username") {
            const response = await fetch(endpoint, {
                method: 'put',
                body: JSON.stringify({field: "username", value: newUserName}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (response?.status === 200) {
                localStorage.setItem('userName', newUserName);
                props.onUserChange(newUserName);
                setNewUserName('');
            } else {
                const body = await response.json();
                setNewUserName('');
                setDisplayError(`Error: ${body.msg}`);
            }
        } else if (type === "password") {
            const response = await fetch(endpoint, {
                method: 'put',
                body: JSON.stringify({field: "password", value: newPassword}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!(response?.status === 200)) {
                const body = await response.json();
                setNewPassword("");
                setDisplayError(`Error: ${body.msg}`);
            } else {
                setNewPassword("");
            }
        }
    }


    return (
        <main className="main-account">
            <h2 className="h2-account">Account Overview</h2>
            <div className="username-wrapper">
                <div className="sidebar"></div>
                <span className="account-username">{props.userName}</span>
            </div>
            <div className="past-comments">
                <h4 className="h4-account" >Your Comments</h4>
                <UserComments />
            </div>

            <h3 className="h3-account">Change Email or Password</h3>
            <div className="change-wrapper">
                <div className="input-group mb-2">
                    <label className="input-group-text">Username: </label>
                    <input className="form-control" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="new username" />
                </div>
                <button type="submit" className="change-button" onClick={() => changeUserName()} disabled={!newUserName} >Change Username</button>

                <div className="input-group mb-2">
                    <label className="input-group-text">Password: </label>
                    <input className="form-control" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="new password" />
                </div>
                <button type="submit" className="change-button" onClick={() => changePassword()} disabled={!newPassword} >Change Password</button>
            </div>
            
            <div>
                <button className="logout" type="submit" onClick={() => navigate('/')}>Return to login</button>
            </div>
            <ErrorDialog message={displayError} onHide={() => setDisplayError(null)} />
        </main>
    );
}