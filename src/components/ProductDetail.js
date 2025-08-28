import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src="https://via.placeholder.com/400x400" alt="Product" />
      </div>
      <div className="product-info">
        <h2>Elegant Kurti</h2>
        <p className="price">₹999</p>
        <p className="description">
          A beautifully designed kurti perfect for festive occasions and casual outings. Made with love and quality fabric.
        </p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail; 