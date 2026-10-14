
import { useState } from 'react'
import './App.css'

const phone = '7099100158'
const whatsapp = '917099100158'
const email = 'ideyyedi11@gmail.com'

const projects = [
  {
    title: 'The Quiet Residence',
    category: 'Residential · Interior Design',
    image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Warm contemporary living room with natural textures',
  },
  {
    title: 'Earth & Form',
    category: 'Architecture · Residential',
    image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern residential architecture with natural materials',
  },
  {
    title: 'Soft Geometry',
    category: 'Interior Design · Residential',
    image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elegant neutral interior with refined finishes',
  },
  {
    title: 'Still House',
    category: 'Architecture · Interior Design',
    image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Minimal contemporary home with natural light',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const whatsappLink = (message) =>
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`

  const enquiryMessage =
      "Hello ISHAKRTI! I'd like to enquire about an architecture or interior design project. Could we discuss my requirements?"

  return (
      <div className="app">
        <header className="header">
          <div className="container navbar">
            <a className="logo" href="#home" onClick={closeMenu}>
              <span className="logo-name">ISHAKRTI</span>
              <span className="logo-caption">
              Architecture & Interior Design
            </span>
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '×' : '☰'}
            </button>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a
                  className="mobile-contact-link"
                  href={whatsappLink(enquiryMessage)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
              >
                Enquire on WhatsApp ↗
              </a>
            </nav>

            <a
                className="nav-cta"
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noreferrer"
            >
              LET'S TALK ↗
            </a>
          </div>
        </header>

        <main>
          <section className="container hero" id="home">
            <div className="hero-content">
              <span className="section-label">Design with intention</span>
              <h1>
                Spaces that
                <br />
                <em>tell your story.</em>
              </h1>
              <p className="hero-description">
                Thoughtful architecture and soulful interiors, designed
                around the way you live, feel and experience a space.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#portfolio">
                  EXPLORE OUR WORK ↗
                </a>
                <a
                    className="button-secondary"
                    href={whatsappLink(enquiryMessage)}
                    target="_blank"
                    rel="noreferrer"
                >
                  START A PROJECT
                </a>
              </div>
              <p className="hero-note">PERSONAL SPACES. TIMELESS DESIGN.</p>
            </div>

            <div className="hero-image">
              <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
                  alt="Sophisticated contemporary interior in warm natural tones"
                  fetchPriority="high"
              />
              <div className="hero-image-caption">
                Spaces made personal
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="container intro-grid">
              <div>
                <span className="section-label">A thoughtful approach</span>
                <h2 className="section-title">
                  Good design is felt, not just seen.
                </h2>
              </div>
              <div className="intro-content">
                <p>
                  At ISHAKRTI, we believe every space should reflect the
                  people who inhabit it. Our approach brings together
                  considered planning, natural materials, light and
                  meaningful details to create spaces that feel personal
                  and work beautifully for everyday life.
                </p>
                <a className="text-link" href="#services">
                  DISCOVER OUR APPROACH ↗
                </a>
              </div>
            </div>
          </section>

          <section className="section services-section" id="services">
            <div className="container">
              <span className="section-label">What we do</span>
              <h2 className="section-title">Considered from the beginning.</h2>
              <p className="section-description">
                Every detail has a purpose. Every space begins with
                understanding your vision.
              </p>

              <div className="services-grid">
                <article className="service-card">
                  <span className="service-number">01 / ARCHITECTURE</span>
                  <h3>Architecture</h3>
                  <p>
                    Thoughtful spatial planning, purposeful forms and
                    residential design that connects people with place.
                  </p>
                </article>
                <article className="service-card">
                  <span className="service-number">02 / INTERIORS</span>
                  <h3>Interior Design</h3>
                  <p>
                    Carefully composed interiors combining materials,
                    lighting, furniture and textures.
                  </p>
                </article>
                <article className="service-card">
                  <span className="service-number">03 / CONSULTATION</span>
                  <h3>Design Consultation</h3>
                  <p>
                    Personal guidance to help develop your ideas, refine
                    your vision and plan your next steps.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" id="portfolio">
            <div className="container">
              <div className="portfolio-header">
                <div>
                  <span className="section-label">Selected inspiration</span>
                  <h2 className="section-title">A study in living well.</h2>
                </div>
                <a
                    className="text-link"
                    href={whatsappLink(
                        "Hello ISHAKRTI! I'd like to discuss a project similar to the work in your portfolio."
                    )}
                    target="_blank"
                    rel="noreferrer"
                >
                  DISCUSS YOUR PROJECT ↗
                </a>
              </div>

              <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <article className="project-card" key={project.title}>
                      <a
                          className="project-image"
                          href={whatsappLink(
                              `Hello ISHAKRTI! I'd like to enquire about a project inspired by "${project.title}".`
                          )}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Enquire about ${project.title}`}
                      >
                        <img
                            src={project.image}
                            alt={project.alt}
                            loading="lazy"
                        />
                        <span className="project-overlay">
                      ENQUIRE ABOUT A PROJECT ↗
                    </span>
                      </a>
                      <div className="project-meta">
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.category}</p>
                        </div>
                        <span className="project-arrow">
                      {String(index + 1).padStart(2, '0')} ↗
                    </span>
                      </div>
                    </article>
                ))}
              </div>

              <p className="portfolio-disclaimer">
                Portfolio images currently illustrate design inspiration.
                Replace them with Ishita's own work before publishing.
              </p>
            </div>
          </section>

          <section className="philosophy">
            <div className="philosophy-image">
              <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85"
                  alt="Sunlit contemporary interior with warm natural materials"
                  loading="lazy"
              />
            </div>
            <div className="philosophy-content">
              <span className="section-label">The ISHAKRTI approach</span>
              <h2>Less noise. More meaning.</h2>
              <p>
                We believe great design is about finding the right balance
                of light, space, material and purpose. The result should
                feel natural, personal and enduring.
              </p>
              <a
                  className="button-primary"
                  href={whatsappLink(enquiryMessage)}
                  target="_blank"
                  rel="noreferrer"
              >
                LET'S CREATE TOGETHER ↗
              </a>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="container contact-grid">
              <div>
                <span className="section-label">Your next chapter starts here</span>
                <h2 className="section-title">
                  Let's make space for something beautiful.
                </h2>
                <p className="section-description">
                  Have a home, interior or architecture project in mind?
                  Tell us what you're imagining. We'd love to hear from you.
                </p>
                <div className="contact-actions">
                  <a
                      className="button-light"
                      href={whatsappLink(enquiryMessage)}
                      target="_blank"
                      rel="noreferrer"
                  >
                    CHAT ON WHATSAPP ↗
                  </a>
                  <a
                      className="button-outline-light"
                      href={`mailto:${email}?subject=${encodeURIComponent('Project Enquiry | ISHAKRTI')}&body=${encodeURIComponent('Hello Ishita,\n\nI would like to enquire about an architecture or interior design project.\n\nProject type:\nLocation:\nBrief description:\n\nThank you.')}`}
                  >
                    SEND AN EMAIL ↗
                  </a>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <span>Call the studio</span>
                  <a href={`tel:+91${phone}`}>+91 {phone}</a>
                </div>
                <div className="contact-item">
                  <span>Email enquiries</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="contact-item">
                  <span>WhatsApp</span>
                  <a
                      href={whatsappLink('Hello ISHAKRTI! I would like to discuss a project.')}
                      target="_blank"
                      rel="noreferrer"
                  >
                    Message us directly ↗
                  </a>
                </div>
                <div className="contact-item">
                  <span>Project enquiries</span>
                  <p>Architecture · Interiors · Consultation</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <a className="footer-brand" href="#home">ISHAKRTI</a>
            <p>© {new Date().getFullYear()} ISHAKRTI. Design with intention.</p>
            <div className="footer-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram ↗
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                Pinterest ↗
              </a>
              <a href={`mailto:${email}`}>Email ↗</a>
            </div>
          </div>
        </footer>

        <a
            className="whatsapp-float"
            href={whatsappLink('Hello ISHAKRTI! I would like to discuss an architecture or interior design project.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with ISHAKRTI on WhatsApp"
        >
          <span aria-hidden="true">◉</span>
          <span>Let's chat</span>
        </a>
      </div>
  )
}

export default App