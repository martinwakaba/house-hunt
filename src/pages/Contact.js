import React, { useState } from 'react';
import CommentForm from '../components/CommentForm';
import CompanyInfo from '../components/CompanyInfo';
import Footer from '../components/Footer';
const Contact = () => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <>
      <div className="contact-container">
      <div className="header">
        <h1>Contact Form</h1>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <CommentForm addComment={addComment} />
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment}
            </li>
          ))}
        </ul>
      </div>
      <div className="company-info">
        <CompanyInfo email="info@househunt.com" />
      </div>
      <hr className="divider" />
      
    </div>

    <Footer />
    </>

 
  );
};

export default Contact;