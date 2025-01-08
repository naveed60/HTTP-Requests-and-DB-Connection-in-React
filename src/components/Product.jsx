import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const { name, description, price, image } = product;

  return (
    <div className="product-card border p-4 rounded shadow-lg">
      <img 
        src={image} 
        alt={name} 
        className="product-image w-full h-48 object-cover rounded" 
      />
      <div className="product-info mt-4">
        <h2 className="product-name text-lg font-bold">{name}</h2>
        <p className="product-description text-gray-600">{description}</p>
        <p className="product-price text-blue-500 font-semibold">${price.toFixed(2)}</p>
        <button 
          onClick={() => onAddToCart(product)} 
          className="add-to-cart-btn bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
