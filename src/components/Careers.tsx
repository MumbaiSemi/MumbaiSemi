import React from 'react';
import { useNavigate } from 'react-router-dom';

const Careers: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/careers');
  };

  return (
    <section id="careers" className="careers-section">
      <div className="careers-content">
        <h2>Careers</h2>
        <button onClick={handleRedirect} className="careers-button">
          View Career Opportunities
        </button>
      </div>
    </section>
  );
};

export default Careers; 