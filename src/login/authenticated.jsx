import React from 'react';
import {useNavigate} from 'react-router-dom';

export function Authenticated(props){
    const navigate = useNavigate();

    async function logout() {
        fetch('/api/auth/logout', {
            method: 'delete',
        })
          .catch(() =>{})
          .finally(() => {
            localStorage.removeItem('userName');
            props.onLogout();
          });
    }

    return (
        <div>
            <h1 className="welcome-user">Welcome <span className="welcome-title">{props.userName}</span>!</h1>
            <div className="login-box">
                <div>
                    <div className="btn-wrapper">
                        <button type="submit" className="btn" onClick={() => navigate('/home')} >Home</button>
                        <button type="submit" className="btn logout-btn" onClick={() => logout()} >Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}