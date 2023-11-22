import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CompanyInfo from './components/CompanyInfo';

const ContactUs = () => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <CompanyInfo email="info@househunt.com" />
      <hr />
      <h2>Comments</h2>
      <CommentForm addComment={addComment} />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
