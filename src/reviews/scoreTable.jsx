import React from 'react';

export function ScoreTable() {
    const [scores, setScores] = React.useState([]);
    const scoreRows = [];

    const scoresText = localStorage.getItem('scores');
    

    if (scoresText) {
        setScores(JSON.parse(scoresText));

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
}


{/* <table className="data-table" >
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
                        </table> */}