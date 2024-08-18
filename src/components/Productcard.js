// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart, animateProduct }) => {
  return (
    <div className={`relative border rounded-md p-4 shadow-md flex flex-col ${animateProduct === product.id ? 'animate-fly-to-cart' : ''}`}>
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
        <div className="mt-auto flex justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
