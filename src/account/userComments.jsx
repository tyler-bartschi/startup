import React from 'react';

export function UserComments(reviewText){
    const reviewRows = []

    // const reviewText = localStorage.getItem('userScores');
    // const reviewText = fetch('/api/reviews/user')
    //                     .then((response) => response.json());

    if (JSON.stringify(reviewText) != "[]") {
        // console.log(reviewText);
        // let reviews = reviewText;
        let count = 0;
        for (let i = 0; i < reviewText.length; i++) {
            reviewRows.push(
                <div key={count} className="comment">
                    <p className="book-title">{reviewText[i].title}</p>
                    <p className="star">{"★".repeat(reviewText[i].score)}</p>
                    <p className="comment-text">{reviewText[i].comment}</p>
                </div>
            );
            count++;
        }
    } else {
        reviewRows.push(
            <p key="0">No reviews yet. Leave a review to see it here!</p>
        );
    }

    return (
        <div>
            {reviewRows}
        </div>
    );
}

// reviewText && reviewText != "null" && reviewText != "[]"