// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/Productcard';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ addToCart }) => {
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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            animateProduct={animateProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
