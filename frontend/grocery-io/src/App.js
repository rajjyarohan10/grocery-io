import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import zipCodeCityMap from './data/zipCodeCityMap';
import priceInventory from './data/priceInventory';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function StoresPage() {
  const query = useQuery();
  const zip = (query.get('zip') || '').trim();
  const city = zipCodeCityMap[zip];

  // Derive stores from your inventory (Aldi/Walmart/ShopRite etc.)
  const stores = [...new Set(priceInventory.map(p => p.storeName))].sort();

  if (!zip) return <div style={{ padding: 24 }}>Missing zip. Go back to <Link to="/">home</Link>.</div>;
  if (!city) return <div style={{ padding: 24 }}>Unknown zip: <b>{zip}</b>. Try 21043, 21250, 10001... :contentReference[oaicite:2]{index=2}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Grocery Stores in {city}</h1>
      <p style={{ opacity: 0.8 }}>Zip: {zip}</p>

      <ul>
        {stores.map(store => (
          <li key={store}>
            <Link to={`/stores/${encodeURIComponent(store)}?zip=${encodeURIComponent(zip)}`}>
              {store}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoreProductsPage() {
  const { storeName } = useParams();
  const query = useQuery();
  const zip = (query.get('zip') || '').trim();
  const city = zipCodeCityMap[zip];

  const decodedStore = decodeURIComponent(storeName || '');
  const products = priceInventory.filter(p => p.storeName === decodedStore);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 12 }}>
        <Link to={`/stores?zip=${encodeURIComponent(zip)}`}>← Back to stores</Link>
      </div>

      <h1>{decodedStore}</h1>
      {city ? <p style={{ opacity: 0.8 }}>Showing for {city} ({zip})</p> : null}

      {products.length === 0 ? (
        <p>No products found for this store.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {products.map(p => (
            <div key={`${p.productID}-${p.storeName}`} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 12 }}>
              <img
                src={p.imageUrl}
                alt={p.productName}
                style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 10 }}
              />
              <h3 style={{ margin: '10px 0 4px' }}>{p.productName}</h3>
              <div style={{ opacity: 0.8 }}>{p.category}</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>{p.currentPrice}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <LoadingScreen
      onSubmitZipCode={(zip) => {
        navigate(`/stores?zip=${encodeURIComponent(zip)}`);
      }}
    />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/:storeName" element={<StoreProductsPage />} />
      </Routes>
    </Router>
  );
}
