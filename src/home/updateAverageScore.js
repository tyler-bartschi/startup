export function updateAverageScore() {
    const scoresText = localStorage.getItem('scores');

    if (scoresText) {
        let scores = JSON.parse(scoresText);
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