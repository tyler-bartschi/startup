import React from 'react';

export function ScoreTable() {
    const [scores, setScores] = React.useState([]);
    const scoreRows = [];

    const scoresText = localStorage.getItem('scores');
    

    if (scoresText) {
        let raw_scores = JSON.parse(scoresText);
        setScores(countScores());
        for (let i = 5; i > 0; i--) {
            scoreRows.push(
                <tr key={i}>
                    <td><span className="star">{"★".repeat(i)}</span></td>
                    <td>{scores[i - 1]}</td>
                </tr>
            );
        }
    } else {
        for (let i = 5; i > 0; i--) {
            scoreRows.push(
                <tr key={i}>
                    <td><span className="star">{"★".repeat(i)}</span></td>
                    <td>0</td>
                </tr>
            );
        }
    }

    return (
        <table className="data-table">
            {scoreRows}
        </table>
        
    );

    function countScores() {
        let counted_scores = [];
        for (let i = 1; i < 6; i++) {
            let count = 0;
            for (const item of raw_scores) {
                if (item.score == i) {
                    count++;
                }
            }
            counted_scores.push(count);
        }
        return counted_scores;
    }

}