import React from 'react';
import dhruvaProImage from '/assets/dhruvapro.png';
import { productsData } from '../data';

const cardData = productsData.cards;

const fadeInStyles = (idx: number) => ({
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `fadeInUp 0.7s forwards`,
  animationDelay: `${0.1 + idx * 0.1}s`,
});

const Products: React.FC = () => {
  return (
    <div id='products' style={{ minHeight: '200vh', background: '#f4f8fc' }}>
      {/* Section 1: Product Cards */}
      <section className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="container py-5">
          <h2 className="subtitle mb-5 fw-bold text-center" style={{ fontSize: '2.5rem' }}>{productsData.title}</h2>
          <div className="row justify-content-center g5">
            {cardData.map((card, idx) => (
              <div className="col-12 col-lg-6 col-xl-3 d-flex justify-content-center my-4 mx-0 px-3" key={card.title} style={fadeInStyles(idx)}>
                <div
                  className="card h-100 p-5 border-0 shadow product-card"
                  style={{
                    borderRadius: '2rem',
                    background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    overflow: 'hidden',
                    position: 'relative',
                    minHeight: '450px',
                    maxWidth: '400px',
                    width: '100%'
                  }}
                >
                  <div className="text-center">
                    <i className={`bi ${card.icon} product-icon`} style={{ fontSize: '3.5rem', color: '#0d6efd', marginBottom: '1.5rem', transition: 'color 0.3s' }}></i>
                    <div className="product-title fw-bold" style={{ fontSize: '1.4rem', color: '#0d2957', marginBottom: '1rem' }}>{card.title}</div>
                  </div>
                  <div className="mb-4 text-secondary" style={{ minHeight: 140, fontSize: '1rem', lineHeight: '1.6' }}>{card.description}</div>
                  <div>
                    {card.links.map(link => (
                      <div key={link.name} className='mt-3'>
                        <a href={link.href} className="product-link" style={{ color: '#0d6efd', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s', fontSize: '1.2rem' }}>{link.name}</a>
                        <div className="small text-muted" style={{ fontSize: '1rem' }}>{link.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Info + Image */}
      <section id="aboutdhruvapro" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#eaf1fb' }}>
        <div className="container">
          <div className="row align-items-center">
            <h3 className="fw-bold m-4 subsubtitle" style={{ color: '#0d2957' }}>{productsData.aboutDhruvaPro.title}</h3>
            <div className="col-lg-8 mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
              <div className="about-dhruvapro-content" style={{ opacity: 0, transform: 'translateY(30px)', animation: 'fadeInUp 0.7s forwards 0.3s' }}>
                <div className="card border-0 shadow-sm mb-4 pb-1" style={{ 
                  background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
                  borderRadius: '1rem',
                }}>
                  <div style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8' }}>
                    {productsData.aboutDhruvaPro.description.map((text, index) => (
                      <p key={index} className='pb-3' dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="about-dhruvapro-image" style={{ opacity: 0, transform: 'translateX(30px)', animation: 'fadeInRight 0.7s forwards 0.5s', position: 'relative'}}>
                <div className="card shadow" style={{ borderRadius: '1rem', overflow: 'hidden', maxWidth: 520, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                  <img 
                    src={dhruvaProImage} alt="DhruvaPro" className="img-fluid" 
                    style={{ objectFit: 'contain', height: '100%', width: '100%', borderRadius: '0.7rem', transition: 'transform 0.3s ease'}} 
                  />
                  <div className="card-img-overlay d-flex align-items-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',opacity: 0,transition: 'opacity 0.3s ease'}}>
                    <div className="text-white p-4">
                      <h5 className="mb-2">{productsData.aboutDhruvaPro.overlay.title}</h5>
                      <p className="mb-0">{productsData.aboutDhruvaPro.overlay.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          to { opacity: 1; transform: none; }
        }
        @keyframes fadeInRight {
          to { opacity: 1; transform: none; }
        }
        .product-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          z-index: 2;
        }
        .product-card:hover .product-icon {
          color: #6610f2 !important;
        }
        .product-link:hover {
          color: #6610f2 !important;
          text-decoration: underline;
        }
        .about-dhruvapro-image .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .about-dhruvapro-image .card:hover img {
          transform: scale(1.07);
        }
        .about-dhruvapro-image .card:hover .card-img-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Products; 