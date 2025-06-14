import React from 'react';
import workAtMumbaiSemiImage from '/assets/workatmumbaisemi.png';
import vijayaKumarImage from '/assets/VijayaKumarKanchetla.jpg';
import rajeshZeleImage from "/assets/RajeshZele.jpg"

interface TeamMemberProps {
  name: string;
  title: string;
  education: string;
  image: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, education, image, linkedinUrl }) => {
  return (
    <div className="col-lg-5 col-md-6 mb-4">
      <div className="card border-0 shadow-sm h-100" style={{ 
        background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
        borderRadius: '1rem',
        transition: 'transform 0.3s ease'
      }}>
        <div className="card-body p-4">
          <div className="text-center">
            <img 
              src={image}
              alt={name}
              className="rounded-circle mb-3 border border-4 border-dark"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h4 className="fw-bold mb-2" style={{ color: '#0d2957' }}>{name}</h4>
            <p className="text-muted mb-3">{title}</p>
            <p style={{ fontSize: '0.9rem', color: '#2c3e50', lineHeight: '1.6' }}>
              {education}
            </p>
            <a 
              href={linkedinUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
              title={`${name}'s LinkedIn Profile`}
            >
              <i className="bi-linkedin" style={{ color: '#0077b5', fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Vijaya Kumar Kanchetla",
      title: "Co-founder",
      education: "Ph.D., IIT Bombay",
      image: vijayaKumarImage,
      linkedinUrl: "https://www.linkedin.com/in/vijay-kumar-kanchetla-58470588/"
    },
    {
      name: "Rajesh Zele",
      title: "Co-founder",
      education: "Ph.D., Carnegie Mellon Univ., PA, USA",
      image: rajeshZeleImage,
      linkedinUrl: "https://www.linkedin.com/in/rajeshzele"
    }
  ];

  return (
    <section id="about" style={{ minHeight: '100vh', background: '#f4f8fc', paddingTop: '80px' }}>
      <div className="container py-5">
        <h2 className="subtitle mb-5 fw-bold text-center">About Us</h2>

        {/* What We Do Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-9 mb-4 mb-lg-0">
            <div className="about-content" style={{ 
              opacity: 0, 
              transform: 'translateY(30px)', 
              animation: 'fadeInUp 0.7s forwards 0.3s',
              maxWidth: '95%'
            }}>
              <h3 className="mb-4 fw-bold subsubtitle" style={{ color: '#0d2957' }}>What We Do</h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem',
                maxWidth: '100%'
              }}>
                We are a fab-less semiconductor company designing high-performance <b>RF, Analog, Mixed-signal, and Digital ICs</b> for advanced communications, AI/ML hardware, autonomous vehicles, low-power IoT, and more. Our core strength lies in developing innovative circuits to address the challenges in chip design.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8',
                maxWidth: '100%'
              }}>
                We research and innovate to produce disruptive solutions for futuristic challenges to develop high-quality semiconductor chips in India for national and global needs. Our first product, <b>DhruvaPro</b>, is an example of our commitment to delivering best-in-class semiconductor chips for the technical problems of our nation and across the world.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-image" style={{ 
              opacity: 0, 
              transform: 'translateX(30px)', 
              animation: 'fadeInRight 0.7s forwards 0.5s', 
              position: 'relative',
              maxWidth: '100%',
              margin: '0 auto'
            }}>
              <img 
                src={workAtMumbaiSemiImage} 
                alt="Work at MumbaiSemi" 
                className="img-fluid" 
                style={{ 
                  height: 'auto', 
                  width: '100%', 
                  objectFit: 'cover', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderRadius: '1rem'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Work at MumbaiSemi Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="work-section" style={{ opacity: 0, transform: 'translateY(30px)', animation: 'fadeInUp 0.7s forwards 0.7s' }}>
              <div className="card border-0 shadow-sm" style={{
                background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
                borderRadius: '1rem',
              }}>
                <h3 className="mb-4 fw-bold text-center subsubtitle" style={{ color: '#0d2957' }}>Work at MumbaiSemi</h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-center">
                        <p style={{ 
                          fontSize: '1rem', 
                          color: '#2c3e50', 
                          lineHeight: '1.8', 
                          textAlign: 'center',
                          maxWidth: '800px',
                          padding: '0 2rem'
                        }}>
                          At MumbaiSemi, we love to work on challenging problems that demand precision, creativity, and excellent technical skills. We collaborate strongly, learn continuously, and take pride in the quality of our work.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <p style={{ 
                          fontSize: '1rem', 
                          color: '#2c3e50', 
                          lineHeight: '1.8', 
                          textAlign: 'center',
                          maxWidth: '800px',
                          padding: '0 2rem'
                        }}>
                          Whether you're just starting your career or have years of tape-outs behind you, you will work alongside people passionate about pushing the limits of chip design.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <p style={{ 
                          fontSize: '1rem', 
                          color: '#2c3e50', 
                          lineHeight: '1.8', 
                          textAlign: 'center',
                          maxWidth: '800px',
                          padding: '0 2rem'
                        }}>
                          Diverse perspectives lead to stronger designs. We're proud to be an equal opportunity employer — and we're always looking for curious, driven minds to join us. We want to hear from you if you enjoy solving challenging chip design problems. Please send us a copy of your CV.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-indicators position-relative mb-0 mt-4">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container">
          <h3 className="my-5 fw-bold text-left subsubtitle" style={{ color: '#0d2957' }}>Meet the Team</h3>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to { opacity: 1; transform: none; }
        }
        @keyframes fadeInRight {
          to { opacity: 1; transform: none; }
        }
        .about-image .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .about-image .card:hover img {
          transform: scale(1.05);
        }
        .about-image .card:hover .card-img-overlay {
          opacity: 1;
        }
        .carousel-indicators {
          margin-top: 2rem;
          gap: 1rem;
        }
        .carousel-indicators button {
          width: 40px;
          height: 6px;
          border-radius: 3px;
          background-color: rgb(155, 202, 249);
          border: none;
          transition: all 0.3s ease;
        }
        .carousel-indicators button.active {
          background-color: rgb(52, 143, 254);
          transform: scale(1.1);
        }
        .carousel-indicators button:hover {
          background-color: rgb(52, 143, 254);
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .about-content {
            padding: 0 1rem;
          }
          
          .about-image {
            max-width: 80%;
            margin: 2rem auto;
          }
          
          .about-image img {
            max-height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs; 