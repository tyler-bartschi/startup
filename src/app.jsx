import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {Login} from "./login/login";
import {Home} from "./home/home";
import {Reviews} from "./reviews/reviews";
import {Account} from "./account/account";

export default function App() {
    return ( 
        <BrowserRouter>
            <div className="body">
                <div className="header-color">
                    <header className="container-fluid">
                        <nav>
                            <NavLink to="/" className="page-title"><h1>badreads</h1></NavLink>
                            <menu className="nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link px-2 py-1 link-dark">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="home" className="nav-link px-2 py-1 link-dark">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="reviews" className="nav-link px-2 py-1 link-dark">Reviews</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="account" className="nav-link px-2 py-1 link-dark">Account</NavLink>
                                </li>
                            </menu>
                        </nav>
                    </header>
                </div>
                
                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/home" element={<Home />} />
                    <Route path='/reviews' element={<Reviews />} />
                    <Route path='/account' element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <div>
                        <p><b>Author: </b><span className="dev-name">Tyler Bartschi</span></p>
                        <p><b>GitHub: </b><a href="https://github.com/tyler-bartschi/startup" className="source-link">Source Code</a></p>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main container-fluid text-center>404: Return to sender. Address unknown. Nerd.</main>
}