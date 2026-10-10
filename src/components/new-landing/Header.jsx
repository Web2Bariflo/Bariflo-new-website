import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="nl-header">
      <div className="nl-logo">
        <img src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png" alt="Bariflo Cybernetics" />
      </div>
      <nav className={`nl-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        {/* <a href="#solutions" className="nl-nav-item">SOLUTIONS <FiChevronDown /></a> */}
        <a href="#industries" className="nl-nav-item" onClick={() => setIsMobileMenuOpen(false)}>INDUSTRIES <FiChevronDown /></a>
        {/* <a href="#platform" className="nl-nav-item">PLATFORM <FiChevronDown /></a> */}
        <a href="#impact" className="nl-nav-item" onClick={() => setIsMobileMenuOpen(false)}>IMPACT <FiChevronDown /></a>
        <a href="#about" className="nl-nav-item" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a>
        
        <button className="nl-btn-schedule mobile-only" onClick={() => setIsMobileMenuOpen(false)}>
          Schedule Strategic Discussion
        </button>
      </nav>
      <div className="nl-header-actions">
        <button className="nl-btn-schedule desktop-only">
          Schedule Strategic Discussion
        </button>
        <button className="nl-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
