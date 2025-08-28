import React, { Suspense } from 'react';
import ModelViewer from './ModelViewer';
import './Product3D.css';

const Product3D = () => (
  <div className="product-3d-container">
    <h1 className="brand-name">Vastraalena</h1>
    <div className="viewer-wrapper">
      <ModelViewer />
    </div>
    <div className="actions">
      <button>Color</button>
      <button>Size</button>
      <button>Add to Cart</button>
    </div>
  </div>
);

export default Product3D;
