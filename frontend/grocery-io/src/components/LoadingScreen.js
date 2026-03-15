import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onSubmitZipCode }) {
  const [zipCode, setZipCode] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowInput(true), 1800); // simple "loading" delay
    return () => clearTimeout(t);
  }, []);

  const handleContinue = () => {
    const z = zipCode.trim();
    if (!z) return alert('Please enter a zip code.');
    onSubmitZipCode(z);
  };

  return (
    <div className="LoadingScreenWrap">
      <div className="Loading">
        <div className="scramble">GROCERY.IO</div>
      </div>

      {showInput && (
        <div className="ZipRow">
          <input
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter zip (ex: 21043)"
          />
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
}
