import React from 'react';
import "./login.css";

import {Unauthenticated} from "./unauthenticated";
import {Authenticated} from "./authenticated";
import {AuthState} from "./authState";


export function Login({ userName, authState, onAuthChange}) {
    return (
        <main className="container-fluid text-center">
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}

            {authState === AuthState.Unauthenticated && (
                <Unauthenticated userName={userName} onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)} />
            )}
        </main>
    );
}
