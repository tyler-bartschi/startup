import React from 'react';
import "./account.css";

export function Account() {
    return (
        <main className="main-account">
            <h2 className="h2-account">Account Overview</h2>
            <div className="username-wrapper">
                <div className="sidebar"></div>
                {/* this will pull data from the database to display your username */}
                <span className="username">--username--</span>
            </div>
            <div className="past-comments">
                <h4 className="h4-account" >Your Comments</h4>
                {/* this will pull data from the database to display your past comments */}
                <div className="comment">
                    <p className="book-title">The Way of Kings</p>
                    <p className="star">★★★★★</p>
                    <p className="comment-text">--user's comment goes here--</p>
                </div>
            </div>

            <div className="change-wrapper">
                {/* use services to change the email or password to a new email or password */}
                <h3 className="h3-account">Change Email or Password</h3>
                <form>
                    <div className="input-group mb-2">
                        <label className="input-group-text" for="change-email">Username: </label>
                        <input className="form-control" type="text" placeholder="new username" />
                    </div>
                </form>
                <button type="submit" className="change-button">Change Username</button>

                <form>
                    <div className="input-group mb-2">
                        <label className="input-group-text" for="change-password">Password: </label>
                        <input className="form-control" type="password" placeholder="new password"/>
                    </div>
                </form>
                <button type="submit" className="change-button">Change Password</button>
            </div>
            
            <div>
                <button className="logout" type="submit">Logout</button>
            </div>
        </main>
    );
}