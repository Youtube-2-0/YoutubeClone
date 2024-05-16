import React, { useState } from 'react';
import './CommentForm.css';
import { FaHamburger } from 'react-icons/fa'; // Import hamburger button icon
import ErrorMessage from './ErrorMessage'; // Import ErrorMessage component

const CommentForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        comment: ''
    });
    const [error, setError] = useState('');
    const [comments, setComments] = useState([]); // State to store comments

    //
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formInput.name.trim() === '' || formInput.comment.trim() === '') {
            alert('Please fill out all fields');
            return;
        }
        // This will add the new comment to the comments state
        setComments(prevComments => [
            ...prevComments,
            { name: formInput.name, comment: formInput.comment }
        ]);
        // This should reset form data and error state after submission
        setFormInput({
            name: '',
            comment: ''
        });
        setError('');
    };


    return (
        <div>
            <h2>Leave a Comment</h2>

            <form onSubmit={handleSubmit}> {/*Form submission in reponse to the user input*/}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formInput.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" name="comment" value={formInput.comment} onChange={handleChange} placeholder="Your comment..."  />
                </div>
                <button type="submit"><FaHamburger /></button> {/* Submit button with hamburger icon */}
            </form>
            {/* Render previous comments */}
            {comments.length > 0 && (
                <div className="previous-comments">
                    <h3>Previous Comments</h3>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <p><strong>{comment.name}:</strong> {comment.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentForm;


/*

Components Map

1. Main - App.jsx define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
        c. Home Page - HomePage.jsx (child of Main)
		d. VideoList - VideoList.jsx (child of Main)
		e. Show Page - ShowPage.jsx (child of Main)
			    i. Comment Form - CommentForm.jsx (child component of ShowPage)
		f. About Page - AboutPage.jsx
		g. Sitemap - SiteMap.jsx (child of Main)
2. Readme - README.MD
3. //data/fetch.jsx (not in Components Folder)
4. assets - photos (not in components Folder)

App.jsx - Main component of a React application. Serves as the entry point for the application UI (user interface).

*/