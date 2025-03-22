import React from 'react';
import { useNavigate} from 'react-router-dom';
import './add-book.css';
import {Book} from "./bookTemplate";

export function AddBook() {
    const navigate = useNavigate();
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [pages, setPages] = React.useState('');
    const [summary, setSummary] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [failMessage, setFailMessage] = React.useState('');

    async function updateBooks() {
        setSuccessMessage("");
        setFailMessage("");
        let new_book = new Book(title, author, summary, pages, "/placeholder.jpg")
        await fetch('/api/books/update', {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(new_book),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.msg === "Successfully added") {
                    setSuccessMessage("Successfully added!");
                } else {
                    setFailMessage("Book already exists!");
                }
            });
        setTitle("");
        setAuthor("");
        setPages("");
        setSummary("");
    }

    return (
        <main className="container-fluid">
            <h3 className="add-header">Add A Book</h3>
            <div className="main-data-wrapper">
                <img className="add-image" src="/placeholder.jpg"/>
                <div className="text-data-wrapper">
                    <div className='data-input-box'>
                        <span className="input-header">Title:</span>
                        <input id="title" className="input-box" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    </div>
                    <div className="data-input-box">
                        <span className="input-header" >Author:</span>
                        <input id="author" className='input-box' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />
                    </div>
                    <div className="data-input-box">
                        <span className="input-header" >Page Count:</span>
                        <input id="pages" className="input-box" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Enter page count" />
                    </div>
                </div>
                <div className="data-summary-box text-data-wrapper">
                    <div className="input-header">Summary:</div>
                    <textarea id="summary" className="summary-box" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Enter summary" />
                </div>
                
            </div>

            <button className="add-button" type="submit" onClick={() => updateBooks()} disabled={!title || !author || !pages || !summary} >Add Book</button>
            <button className="return-button" type="submit" onClick={() => navigate('/home')}>Back to Home</button>
            <div className="return-add-message-success">{successMessage}</div>
            <div className="return-add-message-fail">{failMessage}</div>
            
        </main>
    );
}
