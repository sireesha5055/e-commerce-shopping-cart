import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Commerce Store </Link>

        <div className="relative flex items-center">
          <Link to="/cart" className={`text-xl ${cartItemCount > 0 ? 'animate-scale-cart' : ''}`}>
            🛒
          </Link>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
