import React, { useEffect, useState } from 'react';
import './Navigation.css';
import mumbaiSemiLogo from '/assets/mumbaisemi-logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on nav link click (for mobile UX)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`main-nav p-3 d-flex align-items-center ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-content w-100 d-flex align-items-center justify-content-between">
        <img 
          src={mumbaiSemiLogo} 
          alt="mumbaisemi logo" 
          className="nav-logo ms-2 ms-md-5" 
          style={{
            height: 'auto',
            maxWidth: '100%',
            transition: 'all 0.3s ease'
          }}
        />
        <button 
          className="navbar-toggler d-md-none" 
          type="button" 
          aria-label="Toggle navigation" 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            border: 'none',
            padding: '0.5rem',
            backgroundColor: 'transparent'
          }}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} fs-3`} style={{ color: 'rgb(52, 143, 254)' }}></i>
        </button>
        <ul className={`nav-links d-flex mb-0 me-2 me-md-5 ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="mx-2" onClick={handleNavClick}>Home</a></li>
          <li><a href="#products" className="mx-2" onClick={handleNavClick}>Products</a></li>
          <li><a href="#about" className="mx-2" onClick={handleNavClick}>About</a></li>
          <li><a href="#contact" className="mx-2" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>

      <style>{`
        .nav-logo {
          width: 220px;
        }
        @media (max-width: 768px) {
          .nav-logo {
            width: 200px;
          }
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            max-width: 300px;
            height: 100vh;
            background:rgb(6, 41, 75);
            flex-direction: column;
            align-items: center;
            padding: 6rem 0 2rem 0;
            margin: 0;
            transition: right 0.3s ease-in-out;
            box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }
          .nav-links.open {
            right: -5%;
          }
          .nav-links li {
            margin: 1rem 0;
            width: 100%;
            text-align: center;
          }
          .nav-links a {
            font-size: 1.2rem;
            color: #0d2957;
            transition: color 0.3s ease;
            display: block;
            padding: 0.5rem 0;
          }
          .nav-links a:hover {
            color: rgb(52, 143, 254);
          }
        }
        @media (max-width: 576px) {
          .nav-logo {
            width: 170px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation; 