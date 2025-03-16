import React from 'react';
import "./home.css";
import {useNavigate} from 'react-router-dom';
import {CreateBooks} from './createBooks';
import {Book} from "../add-book/bookTemplate";

export function Home({average, updateScore}) {
    const navigate = useNavigate();
    const [quote, setQuote] = React.useState("Tell them hi for me. Please.");
    const [quoteAuthor, setQuoteAuthor] = React.useState('Zachary Huckins');
    const [booksList, setBookList] = React.useState(CreateBooks([]));
    // push starter book into the bookList on load
    
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
    // React.useEffect(() => {
    //     updateScore(JSON.parse(localStorage.getItem('scores')) || []);
    //     const interval = setInterval(() => {updateScore(JSON.parse(localStorage.getItem('scores')) || [])}, 2000);
        
    //     return () => clearInterval(interval);
    // }, []);

    React.useEffect(() => {
        fetch("/api/books")
            .then((response) => response.json())
            .then((data) => {
                setBookList(CreateBooks(data));
            })
            .catch();
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
            {booksList}

            <div className="add-book-wrapper">
                <button className="add-book-button" type="submit" onClick={() => navigate('/add-book')} >Add A Book!</button>
            </div>

        </main>
    );
}


