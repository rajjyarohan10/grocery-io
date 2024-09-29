// import logo from './logo.svg';
// import './App.css';

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingScreen from './components/LoadingScreen';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoadingScreen />} />
//         {/* Add more routes for other pages */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// before passing the zip code button
// src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import LoadingScreen from './components/LoadingScreen';
// import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
// import demoStores from './data/demoStores';  // Your static store list

// function App() {
//   const [zipCode, setZipCode] = useState('');
//   const [city, setCity] = useState('');
//   const [stores, setStores] = useState([]);

//   const handleZipCodeSubmit = (zip) => {
//     setZipCode(zip);

//     // Fetch city based on zip code (from static mapping)
//     const cityName = zipCodeCityMap[zip];
//     if (cityName) {
//       setCity(cityName);
      
//       // For demo, just shuffle and select 10 random grocery stores
//       const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
//       setStores(randomStores);
//     } else {
//       alert("Invalid Zip Code or City Not Found");
//     }
//   };

//   return (
//     <div className="App">
//       {!zipCode && (
//         <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
//       )}

//       {zipCode && city && (
//         <div>
//           <h2>Grocery Stores in {city}</h2>
//           <ul>
//             {stores.map((store, index) => (
//               <li key={index}>{store}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import LoadingScreen from './components/LoadingScreen';
// import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
// import demoStores from './data/demoStores';  // Your static store list

// function App() {
//   const [zipCode, setZipCode] = useState('');
//   const [city, setCity] = useState('');
//   const [stores, setStores] = useState([]);

//   const handleZipCodeSubmit = (zip) => {
//     console.log("Zip Code Submitted:", zip);  // Check if the zip code is being submitted
//     setZipCode(zip);

//     // Fetch city based on zip code (from static mapping)
//     const cityName = zipCodeCityMap[zip];
//     console.log("City Found:", cityName);  // Check if the city is being found based on the zip code

//     if (cityName) {
//       setCity(cityName);
      
//       // Shuffle and select 10 random grocery stores
//       const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
//       console.log("Random Stores:", randomStores);  // Check if random stores are being selected
//       setStores(randomStores);
//     } else {
//       alert("Invalid Zip Code or City Not Found");
//     }
//   };

//   return (
//     <div className="App">
//       {!zipCode && (
//         <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
//       )}

//       {zipCode && city ? (
//         <div>
//           <h2>Grocery Stores in {city}</h2>
//           <ul>
//             {stores.map((store, index) => (
//               <li key={index}>{store}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         zipCode && <p>Submitting zip code, please wait...</p>
//       )}
//     </div>
//   );
// }

// export default App;

// trying to render into a new page
// import React, { useState } from 'react';
// import './App.css';
// import LoadingScreen from './components/LoadingScreen';
// import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
// import demoStores from './data/demoStores';  // Your static store list

// function App() {
//   const [zipCode, setZipCode] = useState('');  // State for storing the entered zip code
//   const [city, setCity] = useState('');  // State for storing the city name
//   const [stores, setStores] = useState([]);  // State for storing random grocery stores
//   const [page, setPage] = useState('loading');  // State for controlling which page to display (loading or results)

//   // Handle zip code submission
//   const handleZipCodeSubmit = (zip) => {
//     setZipCode(zip);

//     // Get city based on zip code
//     const cityName = zipCodeCityMap[zip];

//     if (cityName) {
//       setCity(cityName);
//       alert(cityName);

//       // Shuffle and select 10 random grocery stores
//       const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
//       setStores(randomStores);

//       // Switch to the results page after submission
//       setPage('results');  // Switch the page state to show the results page
//     } else {
//       alert("Invalid Zip Code or City Not Found");
//     }
//   };

//   return (
//     <div className="App">
//       {/* Conditionally render based on the current page state */}
//       {page === 'loading' && (
//         <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
//       )}

//       {page === 'results' && (
//         <div>
//           <h2>Grocery Stores in {city}</h2>
//           <ul>
//             {stores.map((store, index) => (
//               <li key={index}>{store}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


//Trying to add zeels html
//src/App.js
//THIS WORKS BTW!
// import React, { useState } from 'react';
// import './App.css';
// import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
// import demoStores from './data/demoStores';  // Your static store list
// import LoadingScreen from './components/LoadingScreen';

// function App() {
//   const [zipCode, setZipCode] = useState('');  // State for storing the entered zip code
//   const [city, setCity] = useState('');  // State for storing the city name
//   const [stores, setStores] = useState([]);  // State for storing random grocery stores
//   const [page, setPage] = useState('loading');  // State for controlling which page to display (loading or results)

//   // Handle zip code submission
//   const handleZipCodeSubmit = (zip) => {
//     setZipCode(zip);

//     // Get city based on zip code
//     const cityName = zipCodeCityMap[zip];

//     if (cityName) {
//       setCity(cityName);
//       const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
//       setStores(randomStores);
//       setPage('results');  // Switch the page state to show the results page
//     } else {
//       alert("Invalid Zip Code or City Not Found");
//     }
//   };

//   return (
//     <div id="main">
//       {page === 'loading' && (
//         <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
//       )}

//       {page === 'results' && (
//         <div>
//           <h1>Grocery Stores in {city}</h1>
//           <div className="grocery-list">
//             <ul>
//               {stores.map((store, index) => (
//                 <li key={index}>{store}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );


  
// }

// export default App;

// Trying to make the groccery stores clickable + unwanted side menu still showing up
// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
// import demoStores from './data/demoStores';  // Your static store list
// import LoadingScreen from './components/LoadingScreen';
// import StoreProducts from './components/StoreProducts'; // New Component for showing products

// function App() {
//   const [zipCode, setZipCode] = useState('');  // State for storing the entered zip code
//   const [city, setCity] = useState('');  // State for storing the city name
//   const [stores, setStores] = useState([]);  // State for storing random grocery stores
//   const [page, setPage] = useState('loading');  // State for controlling which page to display (loading or results)

//   // Handle zip code submission
//   const handleZipCodeSubmit = (zip) => {
//     setZipCode(zip);

//     // Get city based on zip code
//     const cityName = zipCodeCityMap[zip];

//     if (cityName) {
//       setCity(cityName);
//       const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
//       setStores(randomStores);
//       setPage('results');  // Switch the page state to show the results page
//     } else {
//       alert("Invalid Zip Code or City Not Found");
//     }
//   };

//   return (
//     <Router>
//       <div id="app-container" style={{ display: 'flex' }}>
//         {/* Sidebar structure */}
//         <div id="sidebar">
//           <h2>Grocery Comparison</h2>
//           <div className="tab list" onClick={() => alert("Show Groceries List")}>Groceries List</div>
//           <div className="tab expenses" onClick={() => alert("Show Groceries Expenses")}>Groceries Expenses</div>
//           <div className="tab deals" onClick={() => alert("Show Weekly Deals")}>Weekly Wonders</div>
//           <div className="tab location" onClick={() => alert("Show Location Information")}>Geographical Location</div>
//           <div className="account-section">
//             <p>Login / Create Account</p>
//             <form className="login-form" onSubmit={(e) => e.preventDefault()}>
//               <input type="text" placeholder="Username" required />
//               <input type="password" placeholder="Password" required />
//               <button type="submit">Go</button>
//             </form>
//           </div>
//         </div>

//         {/* Main content area */}
//         <div id="main">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 page === 'loading' ? (
//                   <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
//                 ) : (
//                   <div>
//                     <h1>Grocery Stores in {city}</h1>
//                     <div className="grocery-list">
//                       <ul>
//                         {stores.map((store, index) => (
//                           <li key={index}>
//                             <Link to={`/store/${store}`}>{store}</Link> {/* Make each store a clickable link */}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )
//               }
//             />
//             <Route path="/store/:storeName" element={<StoreProducts />} /> {/* Route for store products page */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import zipCodeCityMap from './data/zipCodeCityMap';  // Your static city lookup
import demoStores from './data/demoStores';  // Your static store list
import LoadingScreen from './components/LoadingScreen';
import StoreProducts from './components/StoreProducts'; // New Component for showing products

function App() {
  const [zipCode, setZipCode] = useState('');  // State for storing the entered zip code
  const [city, setCity] = useState('');  // State for storing the city name
  const [stores, setStores] = useState([]);  // State for storing random grocery stores
  const [page, setPage] = useState('loading');  // State for controlling which page to display (loading or results)

  // Handle zip code submission
  const handleZipCodeSubmit = (zip) => {
    setZipCode(zip);

    // Get city based on zip code
    const cityName = zipCodeCityMap[zip];

    if (cityName) {
      setCity(cityName);
      const randomStores = [...demoStores].sort(() => 0.5 - Math.random()).slice(0, 10);
      setStores(randomStores);
      setPage('results');  // Switch the page state to show the results page
    } else {
      alert("Invalid Zip Code or City Not Found");
    }
  };

  return (
    <Router>
      <div id="app-container">
        {/* Main content area */}
        <div id="main">
          <Routes>
            <Route
              path="/"
              element={
                page === 'loading' ? (
                  <LoadingScreen onSubmitZipCode={handleZipCodeSubmit} />
                ) : (
                  <div>
                    <h1>Grocery Stores in {city}</h1>
                    <div className="grocery-list">
                      <ul>
                        {stores.map((store, index) => (
                          <li key={index}>
                            <Link to={`/store/${store}`}>{store}</Link> {/* Make each store a clickable link */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              }
            />
            <Route path="/store/:storeName" element={<StoreProducts />} /> {/* Route for store products page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
