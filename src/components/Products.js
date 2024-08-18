import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [animateProduct, setAnimateProduct] = useState(null);
  const [animateCart, setAnimateCart] = useState(false); // Trigger cart animation
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAnimateProduct(product.id);
    setAnimateCart(true);  // Trigger cart animation

    // Reset animation state after a short delay
    setTimeout(() => {
      setAnimateProduct(null);
      setAnimateCart(false);
      navigate('/cart');
    }, 1000); // Duration for both animations
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <div key={product.id} className="relative border rounded-md p-4 shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className={`h-48 w-full object-cover mb-4 ${animateProduct === product.id ? 'animate-fly-to-cart' : ''
              }`}
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-700">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}
            className="mt-4 hover:bg-blue-600"
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default Products;
