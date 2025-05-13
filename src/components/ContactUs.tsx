import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" style={{ minHeight: '100vh', background: '#f7fafd' }}>
      <div className="container py-5">
        <h2 className="subtitle mb-5 fw-bold text-center">Contact Us</h2>
        
        <div className="row g-4">
          {/* Contact Information Card */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow" style={{ borderRadius: '1rem', background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 fw-bold" style={{ color: '#0d2957' }}>Get in Touch</h3>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-envelope-fill fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>Email</h5>
                    <a href="mailto:mumbaisemiconductor@gmail.com" className="text-decoration-none" style={{ color: '#0d6efd' }}>
                      mumbaisemiconductor@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-geo-alt-fill fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>Address</h5>
                    <p className="mb-0" style={{ color: '#6c757d' }}>
                      MumbaiSemi,<br />
                      SINE, IIT Bombay, Powai,<br/ >
                      Mumbai - 400076,<br />
                      Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-linkedin fs-3 me-3" style={{ color: '#0d6efd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#0d2957' }}>LinkedIn</h5>
                    <a href="https://www.linkedin.com/company/mumbaisemi/" target="_blank" className="text-decoration-none" style={{ color: '#0d6efd' }} rel="noopener">
                    www.linkedin.com/company/mumbaisemi
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
                title='SOCIETY FOR INNOVATION & ENTREPRENEURSHIP - SINE, IIT BOMBAY'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2193.9255571415792!2d72.9161457!3d19.1326834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f5cb8be0d9%3A0x4e30aaa1f576ffad!2sSOCIETY%20FOR%20INNOVATION%20%26%20ENTREPRENEURSHIP%20-%20SINE%2C%20IIT%20BOMBAY!5e1!3m2!1sen!2sin!4v1746860097328!5m2!1sen!2sin"
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