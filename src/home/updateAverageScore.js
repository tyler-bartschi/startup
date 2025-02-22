export function updateAverageScore(revs=[]) {
    let total = 0;
    revs.forEach((i) => total += parseInt(i.score, 10));
    total = total / revs.length;
    return total.toFixed(1) || 0;
}