export class Book {
    constructor(title, author, summary, pages, image, reviews=[]) {
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.pages = pages;
        this.image = image;
        this.reviews = reviews;
        this.average = 0;
    }

    updateAverage() {
        if (this.reviews.length == 0) {
            this.average = 0;
        } else {
            let total = 0;
            for (let i = 0; i < this.reviews.length; i++) {
                total += parseInt(this.reviews[i].score, 10);
            }
            let new_avg = total / this.reviews.length
            this.average = new_avg.toFixed(1);
        }
    }

    getAverage() {
        this.updateAverage();
        return this.average;
    }
}