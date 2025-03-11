import React from 'react';

export function UserComments(){
    const reviewRows = []

    // const reviewText = localStorage.getItem('userScores');
    const reviewText = fetch('/api/reviews/user')
                        .then((resposne) => response.text());

    if (reviewText && reviewText != "null" && reviewText != "[]") {
        const reviews = JSON.parse(reviewText);
        let count = 0;
        for (const review of reviews) {
            reviewRows.push(
                <div key={count} className="comment">
                    <p className="book-title">The Way of Kings</p>
                    <p className="star">{"★".repeat(review.score)}</p>
                    <p className="comment-text">{review.comment}</p>
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
