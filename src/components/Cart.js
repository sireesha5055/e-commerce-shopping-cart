import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="border p-4 mb-4 rounded-md shadow-md">
              <h4 className="font-medium">{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
