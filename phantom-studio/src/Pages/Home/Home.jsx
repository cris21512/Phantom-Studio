import React from "react";
import './Home.css';

import LiquidChrome from "../../Backgrounds/LiquidChrome/LiquidChrome";


const Home = () => {
    return (
        <div className="Home-style">
            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                <LiquidChrome
                    baseColor={[0.1, 0.1, 0.1]}
                    speed={0.30}
                    amplitude={0.22}
                    interactive={true}
                />
            </div>
            <div className="home-center">
                <h1 className="text-7xl">Phantom Studio</h1>
                <p></p>
            </div>
        </div>
    );
}

export default Home;