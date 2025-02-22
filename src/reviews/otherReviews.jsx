import React from 'react';

export function OtherReviews(props){
    const reviewRows = [];

    const reviewText = localStorage.getItem('scores');

    if (reviewText !== "[]" && reviewText !== null){
        let review_arr = JSON.parse(reviewText);
        for (let i = 0; i < review_arr.length; i++) {
            let cur_review = review_arr[i];
            reviewRows.push(
                <div key={i} className="review">
                    <span className="review-star">{"★".repeat(cur_review.score)}</span>
                    <span className="review-comment">{cur_review.comment}</span>
                    <span className="review-user">- {cur_review.name}</span>
                </div>
            );
        }
    } else {
        reviewRows.push(
            <div key="0" className="review-placeholder">No reviews yet!</div>
        );
    }

    return (
        <div className='accordion-body'>
            {reviewRows}
        </div>
    );
}