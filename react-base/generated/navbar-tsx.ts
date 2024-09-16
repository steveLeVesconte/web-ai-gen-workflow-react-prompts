import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav>
      <div className="desktop-nav">
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={toggleMobileMenu}>
          ×
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>About Me</Link></li>
          <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
