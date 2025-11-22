import React, { useState } from 'react';

function Header({ scrollToSection }) {
  const [active, setActive] = useState('hero');

  const handleNavClick = (section) => {
    setActive(section);
    scrollToSection(section);
  };

  return (
    <header
      style={{
        background: '#2196F3', // Blue header background
        boxShadow: '0 2px 10px rgba(33,80,200,0.12)',
        borderRadius: '0 0 18px 18px',
        transition: 'background 0.2s',
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          fontFamily: '"Lato", sans-serif',
          background: 'transparent',
          borderRadius: '0 0 18px 18px'
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold"
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            style={{ fontWeight: 700, color: '#fff' }}
          >
            🐳 KURT JOHN CAGAYAN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCentered"
            aria-controls="navbarCentered"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "1.5px solid #fff" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarCentered">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { label: "Home", section: "hero" },
                { label: "About", section: "about" },
                { label: "Skills", section: "skills" },
                { label: "My Projects", section: "projects" }
              ].map(({ label, section }) => (
                <li className="nav-item px-3" key={section}>
                  <a
                    href={`#${section}`}
                    className="nav-link"
                    onClick={e => { e.preventDefault(); handleNavClick(section); }}
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      position: "relative",
                      paddingBottom: "8px",
                      borderRadius: "8px",
                      transition: "box-shadow 0.18s, color 0.18s",
                      boxShadow: (active === section)
                        ? "0 4px 0 0 #1565c0, 0 2.5px 0 0 #fff"
                        : "none",
                      borderBottom: (active === section)
                        ? "4px solid #fff"
                        : "4px solid transparent",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
