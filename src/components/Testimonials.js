import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    feedback: 'The quality is unmatched. Quick delivery and amazing support!',
    role: 'Fashion Enthusiast',
  },
  {
    id: 2,
    name: 'Meera Kapoor',
    feedback: 'Loved the experience! Beautiful products and easy checkout.',
    role: 'Blogger',
  },
  {
    id: 3,
    name: 'Rohit Verma',
    feedback: 'Stylish and affordable. This is my new favorite shopping spot!',
    role: 'Model',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div
            className={`testimonial-card ${testimonial.id === 2 ? 'highlight' : ''}`}
            key={testimonial.id}
          >
            <p className="testimonial-feedback">“{testimonial.feedback}”</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-role">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
