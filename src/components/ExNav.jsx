import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  color: black;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

export default function ExNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo>Nauticus Clone</Logo>
    </Nav>
  );
}
