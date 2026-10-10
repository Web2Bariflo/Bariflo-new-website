import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="nl-header">
      <div className="nl-logo">
        <img src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png" alt="Bariflo Cybernetics" />
      </div>
      <nav className="nl-nav">
        {/* <a href="#solutions" className="nl-nav-item">SOLUTIONS <FiChevronDown /></a> */}
        <a href="#industries" className="nl-nav-item">INDUSTRIES <FiChevronDown /></a>
        {/* <a href="#platform" className="nl-nav-item">PLATFORM <FiChevronDown /></a> */}
        <a href="#impact" className="nl-nav-item">IMPACT <FiChevronDown /></a>
        <a href="#about" className="nl-nav-item">ABOUT US</a>
      </nav>
      <div className="nl-header-actions">
        <button className="nl-btn-schedule">
          Schedule Strategic Discussion
        </button>
        <button className="nl-hamburger">
          <HiOutlineMenu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
