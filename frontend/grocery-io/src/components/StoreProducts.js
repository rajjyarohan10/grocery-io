// src/components/StoreProducts.js
import React, { useState, useEffect } from 'react';
import priceInventory from '../data/priceInventory'; // Ensure this path is correct

const StoreProducts = () => {
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    // Since you want to display all products, just set the full inventory as the state
    if (Array.isArray(priceInventory)) {
      setStoreProducts(priceInventory); // Set all products to state
    } else {
      console.error("priceInventory is not an array!");
    }
  }, []);

  return (
    <div>
      <h2>All Available Products</h2>
      <div className="product-list">
        {storeProducts.length > 0 ? (
          <ul>
            {storeProducts.map((product, index) => (
              <li key={index}>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  style={{ width: '50px', height: '50px' }}
                />
                <span>{product.productName}</span> - {product.currentPrice}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default StoreProducts;
