import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0 && !showPrice) {
        setShowPrice(true);
      } else if (window.pageYOffset === 0 && showPrice) {
        setShowPrice(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPrice]);

  return (
    <div className="main">
  <div className="red"><h1>Hurry up! </h1>
  <h1>CHOOSE YOUR FAVOURITE PACK</h1></div>
      <div className="main-content">
        <h2>Individual Pack</h2>
        <p>Online protection for your identity, privacy, and devices. 
          Includes antivirus, VPN, and protection score.
          Individual plans are now available.
        </p>
        {showPrice && (
          <div className="price-section">
              <h2>$110.90</h2>
          </div>
        )}
        <button>Button 1</button>
        <button>Button 2</button>
      </div>

      <div className="main-content">
        <h2>Family Pack</h2>
        <p>Online protection for your identity, privacy, and devices. 
          Includes antivirus, VPN, and protection score.
          Individual plans are now available.</p>
        {showPrice && (
          <div className="price-section">
            <h2>$229.99</h2>
          </div>
        )}
        <button>Button 1</button>
        <button>Button 2</button>
      </div>

      
    </div>
  );
}

export default App;
