import React from 'react';
import "./home.css";
import {useNavigate} from 'react-router-dom';

export function Home({average, updateScore}) {
    const navigate = useNavigate();
    const [quote, setQuote] = React.useState("Tell them hi for me. Please.");
    const [quoteAuthor, setQuoteAuthor] = React.useState('Zachary Huckins');

    // sets the quote on load
    React.useEffect(() => {
        fetch("https://quote.cs260.click")
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.quote);
            setQuoteAuthor(data.author);
          })
          .catch();
    }, []);

    // sets an interval to repeatedly attempt to update the score
    React.useEffect(() => {
        updateScore(JSON.parse(localStorage.getItem('scores')) || []);
        const interval = setInterval(() => {updateScore(JSON.parse(localStorage.getItem('scores')) || [])}, 2000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="container-fluid">

            <div className="quote-wrapper">
                <div className="quote-of-the-day">
                    <h4 className="h4-home">Quote of the Day</h4>
                    <span className="quote">{quote}</span>
                    <span className="quote-author">- {quoteAuthor}</span>
                </div>
            </div>

            <h3 className="h3-home">Reviews</h3>
            <div className="book">
                <div className="book-wrapper">
                    <img className="cover-image" src="/the-way-of-kings.jpg" alt="The Way of Kings cover" width="150px" />
                    <div className="book-data-wrapper">
                        <div className="book-data">
                            <p id="book-title"><b>The Way of Kings</b></p>
                            <p id="author">Author: Brandon Sanderson</p>
                            <p className="average-review">Average: <span className="rating">{average}</span> / 5</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="review-button" type="submit" onClick={() => navigate('/reviews')} >+ Review</button>
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