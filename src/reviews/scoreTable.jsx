import React from 'react';

export function ScoreTable(scoresText) {
    const scoreRows = [];
    console.log(scoresText);
    if (JSON.stringify(scoresText) != "[]") {
        let raw_scores = scoresText.reviews;
        let scores = countScores(raw_scores);
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
            <tbody>
                {scoreRows}
            </tbody>
        </table>
        
    );

    function countScores(raw_scores) {
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