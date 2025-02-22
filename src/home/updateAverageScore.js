export function updateAverageScore() {
    const [scores, setScores] = React.useState([]);
    const scoresText = localStorage.getItem('scores');

    if (scoresText) {
        setScores(JSON.parse(scoresText));
        return calculateScore();
    } else {
        return 0;
    }

    async function calculateScore() {
        let total = 0;
        scores.forEach((i) => total += parseInt(i.score, 10));
        return Math.round(total / scores.length());
    }

}