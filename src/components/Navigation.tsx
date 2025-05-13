import React, { useEffect, useState } from 'react';
import './Navigation.css';

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
        <img src="src/assets/mumbaisemi-logo.png" alt="mumbaisemi logo" className="nav-logo ms-2 ms-md-5" />
        <button className="navbar-toggler d-md-none" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className={`nav-links d-flex mb-0 me-2 me-md-5 ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="mx-3" onClick={handleNavClick}>Home</a></li>
          <li><a href="#products" className="mx-3" onClick={handleNavClick}>Products</a></li>
          <li><a href="#about" className="mx-3" onClick={handleNavClick}>About Us</a></li>
          <li><a href="#careers" className="mx-3" onClick={handleNavClick}>Careers</a></li>
          <li><a href="#contact" className="mx-3" onClick={handleNavClick}>Contact Us</a></li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navigation; 