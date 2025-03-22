import React from 'react';

export function UserComments(reviewText){
    const reviewRows = []

    if (JSON.stringify(reviewText) != "[]") {
        let reviewData = JSON.parse(reviewText);
        for (let i = 0; i < reviewData.length; i++) {
            reviewRows.push(
                <div key={i} className="comment">
                    <p className="book-title">{reviewData[i].title}</p>
                    <p className="star">{"★".repeat(reviewData[i].score)}</p>
                    <p className="comment-text">{reviewData[i].comment}</p>
                </div>
            );
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
