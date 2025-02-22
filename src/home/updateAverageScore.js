export function updateAverageScore(revs=[]) {
    if (revs.length === 0){
        return 0;
    } else {
        let total = 0;
        revs.forEach((i) => total += parseInt(i.score, 10));
        total = total / revs.length;
        return total.toFixed(1) || 0;
    }
}