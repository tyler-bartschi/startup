import React from 'react';
import "./review.css";
import {ScoreTable} from './scoreTable';
import {Review} from './reviewData';
import {OtherReviews} from "./otherReviews";
import {leaveReview} from "./leaveReview";
import {LoadInfo} from "./loadInfo";
import {Book} from "/src/add-book/bookTemplate";
import {ErrorDialog} from "/src/login/errorDialog";

export function Reviews({userName}) {
    let t = "temp"
    let temp_book_start = new Book(t, t, t, t, t);
    const [otherRevs, setOtherReviews] = React.useState(<OtherReviews />);
    const [reviewScore, setReviewScore] = React.useState("");
    const [userReview, setUserReview] = React.useState("");
    const [info, setInfo] = React.useState("");
    const [book, setBook] = React.useState(temp_book_start);
    const [reviewListDisplay, setReviewListDisplay] = React.useState([]);
    const [displayError, setDisplayError] = React.useState(null);
    const [average, setAverage] = React.useState(0);


    function simulateWebSocket() {
        const reviewInterval = setInterval(() => {
            let review_arr = leaveReview();
            updateReviews(review_arr[0], review_arr[1], review_arr[2], false);
        }, 8000);

        return () => clearInterval(reviewInterval);

    }

    React.useEffect(() => {
        if (book.title !== "temp"){
            simulateWebSocket();
        }
    }, [book]);

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

    function removeEffect(e) {
        e.target.classList.remove('shake');
        e.target.classList.remove('flash-red');
    }

    React.useEffect(() => {
        setOtherReviews(OtherReviews(reviewListDisplay))
        let temp_average = calculateAverage();
        setInfo(LoadInfo(book, reviewListDisplay, temp_average));
    }, [reviewListDisplay]);


    async function calculateAverage() {
        let temp_average = 0;
        for (let i = 0; i < reviewListDisplay.length; i++) {
            temp_average += parseInt(reviewListDisplay[i].score, 10);
        }
        temp_average = temp_average / reviewListDisplay.length;
        temp_average = temp_average.toFixed(1);
        setAverage(temp_average);
        return temp_average;
    }

    async function updateList(cur_review) {
        setReviewListDisplay(prevValue => [cur_review, ...prevValue]);
    }


    async function updateReviews(reviewScore, userReview, userName, fromUser=true) {
        if (reviewScore === 0) {
            setDisplayError("Invalid Score: score cannot be 0");
            setReviewScore("");
            return;
        }
        let cur_review = new Review(userName, userReview, reviewScore, book.title);
        await updateList(cur_review);
        await fetch('/api/books/update/reviews', {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({title: book.title, review: cur_review}),
        });
        if (fromUser) {
            setReviewScore("");
            setUserReview("");
            await fetch('/api/user/reviews/update', {
                method: "PUT",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({review: cur_review}),
            });
        }

    }

    React.useEffect(() => { 
        setInfo("loading...");
        const wait = setTimeout(() => {
            fetch("/api/books/state")
            .then((response) => response.json())
            .then((data) => {
                let state = data.value;
                getBook(state);
            });
        }, 200);
        
        return () => clearTimeout(wait);
    }, []);

    function getBook(state) {
        fetch('/api/books')
            .then((response) => response.json())
            .then((data) => {
                let info = data[state];
                let temp_book = new Book(info.title, info.author, info.summary, info.pages, info.image, info.reviews);
                setBook(temp_book);
                setAverage(temp_book.getAverage());
                setReviewListDisplay(temp_book.reviews);
                setInfo(LoadInfo(temp_book, reviewListDisplay, average));
            });
    }


    return (
        <main className="container-fluid">
            {info}
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
                    <button className="review-submit" type="submit" onClick={() => updateReviews(reviewScore, userReview, userName)} disabled={!reviewScore || !userReview}>Submit Review</button>
                </div>
            </div>

            <div className="accordion" id="collapsible-reviews">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="main-heading">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviews" aria-expanded="true" aria-controls="collapseReviews">
                            Other Reviews
                        </button>
                    </h2>
                    <div id="collapseReviews" className="accordion-collapse collapse show" aria-labelledby="main-heading" data-bs-parent="#collapsible-reviews">
                        {otherRevs}
                    </div>
                </div>
            </div>
            <ErrorDialog message={displayError} onHide={() => setDisplayError(null)} />
        </main>
    );
}
