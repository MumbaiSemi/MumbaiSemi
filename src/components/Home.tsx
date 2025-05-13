import React, { useEffect, useState } from 'react';
import './Home.css';
// import './Home.js';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  mousePosition
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      
      // Update CSS variables for the glow effect
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="glow-effect"></div>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center flex-column-reverse flex-md-row text-center text-md-start">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start mb-4 mb-md-0">
            <div className="home-text w-100">
              <h1 className="text-primary hover-underline mx-2 mx-md-5">
                Shaping the future of advanced technologies with high-performance chips
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <div className="home-text">
              <h1 className="m-0">
                <img 
                  src="src/assets/home-logo.png" 
                  alt="MumbaiSemi" 
                  className="img-fluid home-chip-img" 
                  style={{ 
                    transform: 'rotate(315deg)', 
                    maxWidth: '320px', 
                    width: '80vw',
                    transition: 'transform 0.3s ease, filter 0.3s ease'
                  }} 
                />
              </h1>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home; 
