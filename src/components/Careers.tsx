import React from 'react';
import { useNavigate } from 'react-router-dom';
import { careersData } from '../data';

const Careers: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/careers');
  };

  return (
    <section id="careers" className="careers-section">
      <div className="careers-content">
        <h2>{careersData.title}</h2>
        <button onClick={handleRedirect} className="careers-button">
          {careersData.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Careers; 