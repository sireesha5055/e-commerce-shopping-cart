// pages/CartPage.js
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState('fixed');
  const navigate = useNavigate();

  const getSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const getDiscountAmount = () => {
    const subtotal = parseFloat(getSubtotal());
    if (discountType === 'fixed') {
      return discount;
    } else if (discountType === 'percentage') {
      return (subtotal * discount) / 100;
    }
    return 0;
  };

  const getTotalPrice = () => {
    const subtotal = parseFloat(getSubtotal());
    const discountAmount = getDiscountAmount();
    return (subtotal - discountAmount).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          <div className="space-y-4">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="mt-6 p-4 border rounded-md">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg">Subtotal:</p>
              <p className="text-lg">${getSubtotal()}</p>
            </div>
            <div className="mt-4">
              <label htmlFor="discount" className="block mb-2">Apply Discount:</label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2">
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className="px-2 py-1 border rounded"
                >
                  <option value="fixed">Fixed Discount ($)</option>
                  <option value="percentage">Percentage Discount (%)</option>
                </select>
                <input
                  id="discount"
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                  className="px-2 py-1 border rounded w-full sm:w-24"
                  placeholder="Enter discount"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg">Discount:</p>
              <p className="text-lg">-${getDiscountAmount().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-4 text-xl font-bold">
              <p>Total:</p>
              <p>${getTotalPrice()}</p>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;
