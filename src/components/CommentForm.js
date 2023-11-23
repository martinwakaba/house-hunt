import React, { useState } from 'react';


const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      alert("Email Sent!")
      addComment(comment);
      setComment('');
    }
  };

  

  return (
    <>
    <form className="comment-form" onSubmit={handleSubmit}>
       <input
        type="email"
        id="emailInput"
        placeholder="Enter your email"
      />
    <textarea
      className="comment-textarea"
      placeholder="Enter your comment"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
    <button className="comment-button" type="submit">
      Comment
    </button>
  </form>
  <h2>Comments</h2>
  </>
  );
};

export default CommentForm;
