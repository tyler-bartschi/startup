export function updateAverageScore(revs=[]) {
    if (revs) {
        let scores = revs;
        let total = 0;
        scores.forEach((i) => total += parseInt(i.score, 10));
        let avg = total / scores.length;
        return avg.toFixed(1) || 0;
    }
}