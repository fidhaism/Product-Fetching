import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <header className="app-header">
        <h1>Product Showcase: Discover Quality Finds</h1>
      </header>
      <main className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-body">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
