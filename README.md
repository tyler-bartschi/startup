# Badreads (a book reviewing website)

[My Notes](notes.md)

My startup will be a book-reviewing website, named "badreads" as a play on the popular book website "goodreads," though there will not be any particular focus on negative reviews, as the name might suggest. The startup will provide a way to create and save a personal account, provide a list of books to review, allow comments to be made on any particular book, and will update average book scores in real time.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://dohowzcs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever read a phenomenal book and just had to tell someone about it? Have you, like me, ever read a high school English book that was the most boring thing ever and just need to complain about it? Well, I've got the solution for you! Badreads is a great place to rave about (or complain about) your favorite (or least favorite) books!

### Design

![Design image](/images/startup_design_sketches.png)

The design will consist of 4 main pages: the login page, the home page, the review page, and the account page. The login page will have fields for a username and password, and login/register options. The home page will have a quote of the day and the list of books that are available for review. The review page will open when a book is selected for review, and will have the ratings, comments, and book information. The account page will have account details, including a username, password, and your past comments.

```mermaid
sequenceDiagram
    actor You
    actor Other User
    actor Website
    You->>Website: Login
    You->>Website: Comment
    Website->>Other User: Your comment
    You->>Website: Account Updates
    Other User->>Website: Comment
    Website->>You: Other User's Comment

```

### Key features

- Allows comments and reviews on different books
- Updates in real time the list of comments on the books
- Updates in real time the average score for the books
- Randomly generates a quote each time the website is loaded
- Saves and displays your past comments
- Has a short description and information on the books
- Supports account updates

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure. Four pages: a login page, a home page, a review page, and an account page. Hyperlinks will be included to navigate the webpage smoothly.
- **CSS** - CSS will be used to style the webpage, and will include building a header with the website title and relevant links. It will also format the rest of the site to be visually appealing.
- **React** - React and JavaScript will provide reactability to the site, and will enable text fields such as the username, password, and book comment fields to be used. It will also provide functionality to the various buttons of the website, such as the login and register buttons on the login page.
- **Service** - Services provided will include displaying comments from other users and recalling the user's past comments on their account page. An outside API will be used to randomize quotes for the quote of the day.
- **DB/Login** - Login and account data will be persistently stored in a database, as well as information such as past comments and reviews. The database will also provide information necessary for calculating average review scores.
- **WebSocket** - WebSocket will facilitate the real time updates of other user's comments to the browser, as well as updating the average review score for each book in real time.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
