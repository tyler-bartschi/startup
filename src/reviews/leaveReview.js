export function leaveReview() {
    let score = Math.floor(Math.random() * 5) + 1;
    let comment = "";
    if (score == 1) {
        comment = "This book was too long and boring.";
    } else if (score == 2) {
        comment = "This book was alright, not my taste";
    } else if (score == 3) {
        comment = "Not bad, by my standards.";
    } else if (score == 4) {
        comment = "Enjoyed the read! Would read it again.";
    } else if (score == 5) {
        comment = "Loved it!";
    } else {
        comment = "Error";
    }

    let name = "some guy";

    return [score, comment, name];
}