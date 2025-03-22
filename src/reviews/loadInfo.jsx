import React from "react";
import {ScoreTable} from "./scoreTable";

export function LoadInfo(value, reviews, average) {
    let scoreTable = ScoreTable(reviews);

    return (
        <div>
            <div className="book-wrapper">
                <div className="image">
                    <img className="book-cover-review" src={value.image} width="150px" alt="The Way of Kings cover" />
                </div>
                <div className="book-data-wrapper">
                    <div className="book-data-review">
                        <p className="title">{value.title}</p>
                        <p><b>Author: </b><span>{value.author}</span></p>
                        <p><b>Page Count: </b><span>{value.pages}</span></p>
                    </div>
                </div>
                <div className="rating-data-wrapper">
                    <div className="rating-data">
                        <h4 className="h4-review" >Total Ratings</h4>
                        {scoreTable}
                        <p><b>Average Rating: </b><span className="rating-reviews">{average}</span> / 5</p>
                    </div>
                </div>
            </div>

            <div className="summary container-fluid">
                <h4 className='h4-summary' >Summary</h4>
                {value.summary}
            </div>
        </div>
    );
}