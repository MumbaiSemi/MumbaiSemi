import React, { useEffect, useState } from 'react';
import './Home.css';
import { homeData } from '../data';
// import './Home.js';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="global-glow-effect"></div>
      <section id="home" className="home-section d-flex">
        <div className="left-half d-flex flex-column align-items-start justify-content-center" style={{ minHeight: '100vh', zIndex: 1 }}>
          <div
            style={{
              color: '#017ce7',
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 400,
              marginBottom: '4rem',
              fontFamily: 'Oxanium, sans-serif',
              textAlign: 'left',
              width: '100%',
              maxWidth: '550px'
            }}
            className="hover-underline home-text"
          >
            {homeData.mainText}
          </div>
        </div>
        <div className="right-half"></div>
      </section>
    </>
  );
};

export default Home; 
