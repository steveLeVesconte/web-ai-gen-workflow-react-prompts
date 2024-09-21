import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="desktop-nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>×</button>
        <ul>
          <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}>About Me</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
