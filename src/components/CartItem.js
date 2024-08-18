// components/CartItem.js
import React from 'react';

const CartItem = ({ product, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex items-center border-b pb-4 mb-4">
      <img src={product.image} alt={product.title} className="h-20 w-20 object-cover mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
            className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded"
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <span className="mx-2">{product.quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
            className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="ml-4 text-red-500 hover:text-red-700 font-bold"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
