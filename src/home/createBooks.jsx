import React from 'react';
import {Book} from "/src/add-book/bookTemplate"

export function CreateBooks(bookArr, navigate) {
    const bookRows = [];
    if (JSON.stringify(bookArr) === "[]") {
        bookRows.push(
            <div key={0}>No books yet!</div>
        );
    } else {
        for (let i = 0; i < bookArr.length; i++) {
            let cur_item = bookArr[i];
            let cur_book = new Book(cur_item.title, cur_item.author, cur_item.summary, cur_item.pages, cur_item.image, cur_item.reviews);
            bookRows.push(
                <div key={i} className="book">
                    <div className="book-wrapper">
                        <img className="cover-image" src={cur_book.image} alt="cover image" width="150px" />
                        <div className="book-data-wrapper">
                            <div className="book-data">
                                <p id="book-title"><b>{cur_book.title}</b></p>
                                <p id="author">Author: {cur_book.author}</p>
                                <p className="average-review">Average: <span className="rating">{cur_book.getAverage()}</span> / 5</p>
                            </div>
                            <div className="button-wrapper">
                                <button className="review-button" type="submit" onClick={() => {
                                    fetch('/api/books/state', {
                                        method: 'put',
                                        body: JSON.stringify({value: i}),
                                        headers: {'Content-type': 'application/json; charset=UTF-8'},
                                    })
                                        .finally(navigate('/reviews'));
                                    }} >+ Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {bookRows}
        </div>
    );
}


{/*     <div className="book">
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
            </div> */}