import React from 'react';
import './About.css';
import bgImage from '../assets/BG1.png';


const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-overlay">
        <div className="about-left">
          <h1>About Vastraalane</h1>
          <p>
            Vastraalane is your destination for timeless elegance and contemporary fashion.
            We specialize in ethnic and fusion wear that brings tradition and modern aesthetics together.
          </p>

          <div className="about-section">
            <h2>Terms & Conditions</h2>
            <p>
              By shopping with Vastraalane, you agree to our terms and conditions.  
              All products are carefully inspected before dispatch.  
              Prices, offers, and product availability are subject to change without prior notice.  
              Any misuse of our content, images, or brand name is strictly prohibited.  
              Orders once placed cannot be altered; please review your cart carefully before checkout.
            </p>
          </div>

          <div className="about-section">
            <h2>Return Policy</h2>
            <p>
              We accept returns within <strong>7 days</strong> of delivery for unused items with original tags and packaging.  
              Customized, altered, or sale items are non-returnable.  
              Refunds (if applicable) will be processed within 7–10 business days after we receive and inspect the returned item.
            </p>
          </div>

          <div className="about-section">
            <h2>Customer Care</h2>
            <p>
              Our customer support team is here to help with any queries regarding orders, products, or services.  
              Email us at <a href="mailto:info@vastraalane.com">info@vastraalane.com </a>  
                or call <strong>+91-9910678434</strong> during working hours.
            </p>
          </div>

          <div className="about-section">
            <h2>Store Timings</h2>
            <p>
              <strong>Monday – Saturday:</strong> 10:00 AM – 8:00 PM  
              <br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
