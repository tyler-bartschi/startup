import React from 'react';
import "./home.css";

export function Home() {
    return (
        <main className="container-fluid">

            <div className="quote-wrapper">
                <div className="quote-of-the-day">
                    <h4>Quote of the Day</h4>
                    <span className="quote">Tell them hi for me. Please.</span>
                    <span className="quote-author">-Zachary Huckins</span>
                </div>
            </div>

            <h3>Reviews</h3>
            <div className="book">
                <div className="book-wrapper">
                    <img className="cover-image" src="/the-way-of-kings.jpg" alt="The Way of Kings cover" width="150px" />
                    <div className="book-data-wrapper">
                        <div className="book-data">
                            <p id="book-title"><b>The Way of Kings</b></p>
                            <p id="author">Author: Brandon Sanderson</p>
                            <p className="average-review">Average: <span className="rating">4.4</span> / 5</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="review-button" type="submit">+ Review</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="book">
                <div className="book-wrapper">
                    <img className="cover-image" src="/crime-and-punishment.jpg" alt="Crime and Punishment cover" width="150px" />
                    <div className="book-data-wrapper">
                        <div className="book-data">
                            <p id="book-title"><b>Crime and Punishment</b></p>
                            <p id="author">Author: Fyodor Dostoevsky</p>
                            <p className="average-review">Average: <span className="rating">1.5</span> / 5</p>
                        </div>
                    
                        <div className="button-wrapper">
                            <button className="review-button disabled" type="submit" disabled>✔ Reviewed</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}