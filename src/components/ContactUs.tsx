import React from 'react';
import { contactUsData } from '../data';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" style={{ minHeight: '100vh', background: '#eaf1fb' }}>
      <div className="container pt-3">
        <h2 className="subtitle mb-5 pt-5 fw-bold text-center">{contactUsData.title}</h2>
        
        <div className="row g-4">
          {/* Contact Information Card */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow" style={{ borderRadius: '1rem', background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 fw-bold" style={{ color: '#0d2957' }}>{contactUsData.getInTouch.title}</h3>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-envelope-fill fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>Email</h5>
                    <a href={`mailto:${contactUsData.getInTouch.email}`} className="text-decoration-none d-inline-block text-truncate" style={{ color: '#0d6efd', maxWidth: '100%' }}>
                     {contactUsData.getInTouch.email}
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-geo-alt-fill fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>Address</h5>
                    <p className="mb-0" style={{ color: '#6c757d' }}>
                      {contactUsData.getInTouch.address.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < contactUsData.getInTouch.address.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-linkedin fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div className="w-100">
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>LinkedIn</h5>
                    <a 
                      href={contactUsData.getInTouch.linkedInUrl}
                      target="_blank" 
                      className="text-decoration-none d-inline-block text-truncate" 
                      style={{ 
                        color: '#0d6efd',
                        maxWidth: '100%'
                      }} 
                      rel="noopener"
                    >
                      {contactUsData.getInTouch.linkedIn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
              <iframe
                title={contactUsData.map.title}
                src={contactUsData.map.src}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.7rem', minHeight: '400px' }}
                allowFullScreen
                // loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 