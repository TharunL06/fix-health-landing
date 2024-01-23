import React from 'react';
import './Testimonials.css'; 

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      content: "I had a wonderful experience with Fix Health! The staff was friendly, and the doctors were highly skilled. I felt well taken care of throughout my entire journey.",
      author: "John Doe, New York",
    },
    {
      id: 2,
      content: "The doctors at Fix Health are true professionals. They took the time to listen to my concerns and provided personalized care. I appreciate their commitment to patient well-being.",
      author: "Jane Smith, Los Angeles",
    },
    {
      id: 3,
      content: "The personalized care I received at Fix Health exceeded my expectations. I highly recommend their services!",
      author: "Sarah Johnson, Chicago",
    },
    {
      id: 4,
      content: "Fix Health's commitment to patient well-being sets them apart. I'm grateful for the exceptional care I received.",
      author: "Mike Anderson, San Francisco",
    },
    
  ];

  return (
    <div className="testimonials-container">
      <h3 className='text-heading'>Testimonials</h3>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <p className='highlight'>{testimonial.content}</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
