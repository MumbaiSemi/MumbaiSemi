import React, { useEffect, useState } from 'react';
import './Home.css';
import { homeNewData } from '../data';
// import './Home.js';

const Home: React.FC = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });

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
    <section id="home" className="home-section d-flex">
      <div className="glow-effect"></div>
      <div className="left-half d-flex flex-column align-items-center justify-content-center" style={{ 
        minHeight: '100vh', 
        zIndex: 1,
        position: 'relative'
      }}>
        <h1 style={{ 
          color: '#fff', 
          fontWeight: 800, 
          fontSize: '4rem', 
          letterSpacing: '2px', 
          fontFamily: 'Oxanium, sans-serif', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {homeNewData.title}
        </h1>
        <div style={{ 
          color: '#e0e6f7', 
          fontSize: '2rem', 
          fontWeight: 400, 
          marginBottom: '2.5rem', 
          fontFamily: 'Oxanium, sans-serif',
          textAlign: 'center',
          textTransform: 'capitalize',
          // maxWidth: '800px'
        }}
        dangerouslySetInnerHTML={{ __html: homeNewData.subtitle }}
        />
        <a href="#products" className="btn btn-primary px-5 py-2" style={{ 
          borderRadius: '2rem', 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          background: 'linear-gradient(90deg, #4f8cff 0%, #2563eb 100%)', 
          border: 'none', 
          boxShadow: '0 4px 24px rgba(37,99,235,0.15)'
        }}>
          {homeNewData.buttonText}
        </a>
      </div>
      <div className="right-half"></div>
    </section>
  );
};

export default Home; 
