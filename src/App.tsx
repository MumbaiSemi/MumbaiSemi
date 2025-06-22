import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import './App.css';
import { indexData } from './data';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = indexData.title;
  }, []);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Products />
                <AboutUs />
                <ContactUs />
              </>
            } />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
