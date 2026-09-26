import React from 'react';
import "../styles/splashScreen.css";
function SplashScreen() {
    return (
        <div className="splash-screen-section">
            <img src="techliterateSplashScreenLogo.jpeg" alt="TechLiterate Logo" className='splash-screen-logo' />
            <div className="splash-screen-loading"></div>
        </div>
    )
}

export default SplashScreen;