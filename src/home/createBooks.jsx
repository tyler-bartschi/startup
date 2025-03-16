import React from 'react';

export function CreateBooks(bookArr) {
    const bookRows = [];
    if (bookArr.length === 0) {
        bookRows.push(
            <div key={0}>No books yet!</div>
        );
    } else {
        for (let i = 0; i < bookArr.length; i++) {
            bookRows.push(
                <div key={i} className="book">
                    <div className="book-wrapper">
                        <img className="cover-image" src={bookArr[i].image} alt="cover image" width="150px" />
                        <div className="book-data-wrapper">
                            <div className="book-data">
                                <p id="book-title"><b>{bookArr[i].title}</b></p>
                                <p id="author">Author: {bookArr[i].author}</p>
                                <p className="average-review">Average: <span className="rating">{bookArr[i].getAverage()}</span> / 5</p>
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