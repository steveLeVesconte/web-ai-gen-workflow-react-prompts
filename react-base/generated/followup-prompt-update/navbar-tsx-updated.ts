import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const navItems = [
    { path: "/", label: "About Me" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <div className="desktop-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
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
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
