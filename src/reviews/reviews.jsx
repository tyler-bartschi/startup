import React from 'react';
import "./review.css";
import {ScoreTable} from './scoreTable';
import {Score} from './scoreModifier';

export function Reviews({userName, average, updateScore}) {
    const [scoreTable, updateScoreTable] = React.useState(<ScoreTable />);
    const [reviewScore, setReviewScore] = React.useState("");
    const [userReview, setUserReview] = React.useState("");
    const [revs, setReviews] = React.useState(JSON.parse(localStorage.getItem('scores')) || []);

    // maybe change this to whenever the list of reviews updates
    React.useEffect(() => {
            updateScoreTable(<ScoreTable />);
            updateScore(revs);
    }, [revs]);
    
    // functions to check if the score entered is valid, and display a visual indication if it is not
    function check_score(e) {
        if (e.target.value >= 0 && e.target.value <= 5) {
            setReviewScore(e.target.value);
        } else {
            e.target.classList.add('shake');
            e.target.classList.add('flash-red');
            setTimeout(() => removeEffect(e), 200);
        }
    }

    async function removeEffect(e) {
        e.target.classList.remove('shake');
        e.target.classList.remove('flash-red');
    }

    async function updateReviews(reviewScore, userReview, userName) {
        let cur_score = new Score(userName, userReview, reviewScore);
        setReviews(prevValue => [cur_score, ...prevValue]);
    }

    React.useEffect(() => {
        localStorage.setItem('scores', JSON.stringify(revs));
    }, [revs]);

    return (
        <main className="container-fluid">
            <div className="book-wrapper">
                <div className="image">
                    <img className="book-cover-review" src="/the-way-of-kings.jpg" width="150px" alt="The Way of Kings cover" />
                </div>
                <div className="book-data-wrapper">
                    <div className="book-data-review">
                        <p className="title">The Way of Kings</p>
                        <p><b>Author: </b><span>Brandon Sanderson</span></p>
                        <p><b>Page Count: </b><span>1,280</span></p>
                    </div>
                </div>
                <div className="rating-data-wrapper">
                    <div className="rating-data">
                        <h4 class="h4-review" >Total Ratings</h4>
                        {scoreTable}
                        <p><b>Average Rating: </b><span className="rating-reviews">{average}</span> / 5</p>
                    </div>
                </div>
            </div>

            <div className="summary container-fluid">
                <h4 className='h4-summary' >Summary</h4>
                <p>I long for the days before the Last Desolation. Before the Heralds abondoned us and the Knights Radiant turned against us. When there was still magic in Roshar and honor in the hearts of men.</p>
                <p>In the end, not war but victory proved the greater test. Did our foes see that the harder they fought, the fiercer our resistance? Fire and hammer forge a sword; time and neglect rust it away. So we won the world, yet lost it.</p>
                <p>Now there are four whom we watch: the surgeon, forced to forsake healing and fight in the most brutal war of our time; the assassin, who weeps as he kills; the liar, who wears her scholar's mantle over a thief's heart; and the prince, whose eyes open to the ancient past as his thirst for battle wanes.</p>
                <p>One of them may redeem us. One of them will destory us.</p>
            </div>

            <h3 className="h3-review">Reviews</h3>
            <div className="review-box">
                <div className="score-box">
                    <span className="selection-header">Overall Score</span>
                    <input id="rating" className="text rating-select" value={reviewScore} onChange={(e) => check_score(e)} placeholder="5"></input>
                    <span>/ 5</span>
                </div>
                <div>
                    <textarea id="text-reveiw" className="form-control review-text" value={userReview} onChange={(e) => setUserReview(e.target.value)} placeholder="Your Review Here"></textarea>
                </div>
                <div className="username">
                    <span>- {userName}</span>
                </div>
                <div>
                    {/* when submitting, check if the review score is 0. if it is, reject */}
                    <button className="review-submit" type="submit" onClick={() => updateReviews(reviewScore, userReview, userName)} disabled={!reviewScore || !userReview}>Submit Review</button>
                </div>
            </div>

            {/* This will use database data to render past comments */}
            {/* it might also use WebSocket so new comments are rendered in real time */}

            <div className="accordion" id="collapsible-reviews">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="main-heading">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviews" aria-expanded="true" aria-controls="collapseReviews">
                            Other Reviews
                        </button>
                    </h2>
                    <div id="collapseReviews" className="accordion-collapse collapse show" aria-labelledby="main-heading" data-bs-parent="#collapsible-reviews">
                        <div className="accordion-body">
                            <div className="review">
                                <span className="review-star">★★★★★</span>
                                <span className="review-comment">This book was so good! Loved it!</span>
                                <span className="review-user">- Tyler</span>
                            </div>
                            <div className="review">
                                <span className="review-star">★★★★★</span>
                                <span className="review-comment">Placeholder</span>
                                <span className="review-user">- Placeholder</span>
                            </div>
                            <div className="review">
                                <span className="review-star">★★★★★</span>
                                <span className="review-comment">placeholder</span>
                                <span className="review-user">- Placeholder</span>
                            </div>
                            <div className="review">
                                <span className="review-star">★★★★</span>
                                <span className="review-comment">placeholder</span>
                                <span className="review-user">- Placeholder</span>
                            </div>
                            <div className="review">
                                <span className="review-star">★★★</span>
                                <span className="review-comment">placeholder</span>
                                <span className="review-user">- Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}