import React from 'react';
import "./review.css";

export function Reviews() {
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
                {/* placeholder for database data that will render the number of different reviews */}
                {/* and WebSocket will update this in real-time to reflect new reviews */}
                <div className="rating-data-wrapper">
                    <div className="rating-data">
                        <h4 class="h4-review" >Total Ratings</h4>
                        <table className="data-table" >
                            <tr>
                                <td><span className="star">★★★★★</span></td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><span className="star">★★★★</span></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><span className="star">★★★</span></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><span className="star">★★</span></td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><span className="star">★</span></td>
                                <td>0</td>
                            </tr>
                        </table>
                        <p><b>Average Rating: </b><span className="rating-reviews">4.5</span> / 5</p>
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

            <h3 class="h3-review">Reviews</h3>
            <div className="review-box">
                <form>
                    <div className="score-box">
                        <label className="selection-header" for="rating-select">Overall Score</label>
                        <select className="rating-selections" id="rating-select" name="selection">
                            <option selected>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                        <span>/ 5</span>
                    </div>
                    <div>
                        <textarea className="form-control review-text" name="user-review" placeholder="Your Review Here"></textarea>
                    </div>
                    <div className="username">
                        <span>- Your Username</span>
                    </div>
                    <div>
                    <button className="review-submit" type="submit">Submit Review</button>
                    </div>
                </form>
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