import React from 'react'
import { useState, useEffect } from 'react'
import './Skills.scss'

const Skills = () => {
    const [reviews, setReviews] = useState([
        { name: 'John Doe', text: 'Awesome product!' },
        { name: 'Jane Doe', text: 'I loved it!' },
        { name: 'Jim Smith', text: 'Highly recommend!' },
        { name: 'Sara Wilson', text: 'Great product!' },
        { name: 'Bob Williams', text: 'Amazing!' },
        { name: 'Alice Jones', text: 'I love it!' },
        { name: 'Alex Brown', text: 'I recommend it!' },
        { name: 'Steve Davis', text: 'It is the best!' },
        { name: 'Mary Taylor', text: 'I like it!' },
        { name: 'Karen White', text: 'I love it!' },
        { name: 'Lisa Green', text: 'I recommend it!' },
        // Add more reviews here
      ]);
    
      return (
        <div className="review-card__anim1">
          {reviews.map((review, index) => (
            <div
              className="review-card"
              key={index}
              style={{ animationDelay: `${index * 3}s` }}
            >
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      );
    };

export default Skills