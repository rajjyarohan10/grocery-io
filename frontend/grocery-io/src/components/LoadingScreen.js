// src/components/LoadingScreen.js
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Assuming you have this CSS

const LoadingScreen = ({ onSubmitZipCode }) => {
  const [zipCode, setZipCode] = useState(''); // State for zip code input
  const [showInput, setShowInput] = useState(false); // Show input after animation

  useEffect(() => {
    // This will run when the component is mounted

    // 1. Simulate the descrambler effect (this replaces $scramble.scramble)
    const scrambleText = () => {
      const scramble = document.querySelector('.scramble');
      if (!scramble) return;

      let originalText = scramble.textContent;
      let scrambledText = originalText.split('').map(() => '*').join('');
      scramble.textContent = scrambledText;

      let currentIndex = 0;
      const interval = setInterval(() => {
        scramble.textContent = originalText.slice(0, currentIndex + 1) + scrambledText.slice(currentIndex + 1);
        currentIndex++;

        if (currentIndex === originalText.length) {
          clearInterval(interval);
        }
      }, 100); // You can change the timing here for the scramble effect
    };

    scrambleText(); // Start scrambling the text when the component mounts

    // 2. Simulate the end of the loading animation
    const loadingElement = document.querySelector('.Loading');
    loadingElement.addEventListener('animationend', () => {
      setTimeout(() => {
        setShowInput(true); // Show input and button after the animation
      }, 1000); // You can match this duration to your real animation
    });

  }, []); // Empty array means this effect runs only once when the component is mounted

  const handleContinue = () => {
    if (zipCode.trim() === "") {
      alert("Please enter your zip code to continue.");
    } else {
      onSubmitZipCode(zipCode);  // Call the prop function passed from App.js
    }
  };

  return (
    <div id="main">
      <div className="loader">
        <h2 className="zoom">GROCERY.IO</h2>
        <h1 className="scramble">GROCERY.IO</h1>
        <div className="Loading"></div>
      </div>

      {/* Conditional rendering for input and button */}
      {showInput && (
        <>
          <input
            id="zipCodeInput"
            type="text"
            placeholder="Enter Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button id="continueBtn" onClick={handleContinue}>
            Continue
          </button>
        </>
      )}
    </div>
  );
};

export default LoadingScreen;


// Before merging the new LoadingScreen
// src/components/LoadingScreen.js
// import React, { useState, useEffect } from 'react';
// import './LoadingScreen.css'; // Assuming you have this CSS

// const LoadingScreen = () => {
//   const [zipCode, setZipCode] = useState(''); // State for zip code input
//   const [showInput, setShowInput] = useState(false); // Show input after animation

//   useEffect(() => {
//     // This will run when the component is mounted (like $(document).ready)
    
//     // 1. Simulate the descrambler effect (this replaces $scramble.scramble)
//     const scrambleText = () => {
//       const scramble = document.querySelector('.scramble');
//       if (!scramble) return;

//       let originalText = scramble.textContent;
//       let scrambledText = originalText.split('').map(() => '*').join('');
//       scramble.textContent = scrambledText;

//       let currentIndex = 0;
//       const interval = setInterval(() => {
//         scramble.textContent = originalText.slice(0, currentIndex + 1) + scrambledText.slice(currentIndex + 1);
//         currentIndex++;

//         if (currentIndex === originalText.length) {
//           clearInterval(interval);
//         }
//       }, 100); // You can change the timing here for the scramble effect
//     };

//     scrambleText(); // Start scrambling the text when the component mounts

//     // 2. Simulate the end of the loading animation
//     const loadingElement = document.querySelector('.Loading');
//     loadingElement.addEventListener('animationend', () => {
//       setTimeout(() => {
//         setShowInput(true); // Show input and button after the animation
//       }, 1000); // You can match this duration to your real animation
//     });

//   }, []); // Empty array means this effect runs only once when the component is mounted

//   const handleContinue = () => {
//     if (zipCode.trim() === "") {
//       alert("Please enter your zip code to continue.");
//     } else {
//       alert(`Zip Code entered: ${zipCode}. Proceeding...`);
//       // You can add your logic here for what happens next
//     }
//   };

//   return (
//     <div id="main">
//       <div className="loader">
//         <h2 className="zoom">GROCERY.IO</h2>
//         <h1 className="scramble">GROCERY.IO</h1>
//         <div className="Loading"></div>
//       </div>

//       {/* Conditional rendering for input and button */}
//       {showInput && (
//         <>
//           <input
//             id="zipCodeInput"
//             type="text"
//             placeholder="Enter Zip Code"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//           />
//           <button id="continueBtn" onClick={handleContinue}>
//             Continue
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default LoadingScreen;


/* Old code before adding 'zip code' clicking component */
// src/components/LoadingScreen.js
// import React, { useState, useEffect } from 'react';
// import './LoadingScreen.css'; // Import the CSS file
// import $ from 'jquery'; // Import jQuery for use


// const LoadingScreen = () => {
//   const [zipCode, setZipCode] = useState(''); // State for zip code input
//   const [showInput, setShowInput] = useState(false); // State to show input after animation ends

//   useEffect(() => {
//     // Run descramble animation once the component is mounted
//     var $scramble = document.querySelector('.scramble');
//     $(document).ready(function() {
//       $($scramble).scramble(3000, 20, "alphabet", true); // Scramble effect

//       // When the animation ends, show the input and continue button
//       $(".Loading").on("animationend", function() {
//         $(this).animate({
//           width: '0%',
//         }, 1000, function() {
//           setShowInput(true); // Show input field and button
//         });
//       });
//     });
//   }, []);

//   const handleContinue = () => {
//     if (zipCode.trim() === "") {
//       alert("Please enter your zip code to continue.");
//     } else {
//       alert(`Zip Code entered: ${zipCode}. Proceeding...`);
//       // You can add navigation logic here to the next screen
//     }
//   };

//   return (
//     <div id="main">
//       <div className="loader">
//         <h2 className="zoom">GROCERY.IO</h2>
//         <h1 className="scramble">GROCERY.IO</h1>
//         <div className="Loading"></div>
//       </div>

//       {/* Display the input and continue button only after the animation ends */}
//       {showInput && (
//         <>
//           <input
//             id="zipCodeInput"
//             type="text"
//             placeholder="Enter Zip Code"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//           />
//           <button id="continueBtn" onClick={handleContinue}>
//             Continue
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default LoadingScreen;
