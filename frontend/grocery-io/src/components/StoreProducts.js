// // src/components/StoreProducts.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import priceInventory from '../data/priceInventory'; // Assuming you've loaded the CSV data here

// const StoreProducts = () => {
//   const { storeName } = useParams(); // Get the store name from the URL

//   // Filter products based on the store name
//   const storeProducts = priceInventory.filter(item => item['Store Name'] === storeName);

//   return (
//     <div>
//       <h2>Products Available at {storeName}</h2>
//       <div className="product-list">
//         <ul>
//           {storeProducts.map((product, index) => (
//             <li key={index}>
//               <img src={product['Image URL']} alt={product['product Name']} style={{ width: '50px', height: '50px' }} />
//               <span>{product['product Name']}</span> - {product['Current Price']}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StoreProducts;


// src/components/StoreProducts.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import priceInventory from '../data/priceInventory'; // Import the CSV data here

const StoreProducts = () => {
  const { storeName } = useParams(); // Get the store name from the URL
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the store name
    const filteredProducts = priceInventory.filter(
      (item) => item['Store Name'].trim() === storeName.trim()
    );
    setStoreProducts(filteredProducts); // Set the filtered products to state
  }, [storeName]);

  return (
    <div>
      <h2>Products Available at {storeName}</h2>
      <div className="product-list">
        {storeProducts.length > 0 ? (
          <ul>
            {storeProducts.map((product, index) => (
              <li key={index}>
                <img
                  src={product['Image URL']}
                  alt={product['product Name']}
                  style={{ width: '50px', height: '50px' }}
                />
                <span>{product['product Name']}</span> - {product['Current Price']}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found for this store.</p>
        )}
      </div>
    </div>
  );
};

export default StoreProducts;
