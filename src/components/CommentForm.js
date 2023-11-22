import React, { useState } from 'react';


const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
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
  );
};

export default CommentForm;
