import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'

export default function App() {
    return ( 
        <div className="body">
            <div className="header-color">
                <header className="container-fluid">
                    <nav>
                        <a href="/" className="page-title"><h1>badreads</h1></a>
                        <menu className="nav">
                            <li className="nav-item"><a href="index.html" className="nav-link px-2 py-1 link-dark">Login</a></li>
                            <li className="nav-item"><a href="home.html" className="nav-link px-2 py-1 link-dark">Home</a></li>
                            <li className="nav-item"><a href="reviews.html" className="nav-link px-2 py-1 link-dark">Reviews</a></li>
                            <li className="nav-item"><a href="account.html" className="nav-link px-2 py-1 link-dark">Account</a></li>
                        </menu>
                    </nav>
                </header>
            </div>
            <main className="container-fluid text-center">
                App components go here
            </main>
            <footer>
                <div>
                    <p><b>Author: </b><span className="dev-name">Tyler Bartschi</span></p>
                    <p><b>GitHub: </b><a href="https://github.com/tyler-bartschi/startup" className="source-link">Source Code</a></p>
                </div>
            </footer>
        </div>
    );
}
