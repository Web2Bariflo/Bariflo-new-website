import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
  padding: 20px 40px;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  color: ${({ scrolled }) => (scrolled ? 'black' : 'white')};
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.1; /* tighter vertical spacing */
  display: inline-block;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }

  span {
    color: #00bcd4;
    font-size: 0.65em;
    margin-left: 50px; 
    display: block;
    line-height: 1; 
    font-weight: regular; 
  }
`;


const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-weight: 500;
  color:  ${({ scrolled }) => (scrolled ? 'black' : 'white')};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 16px;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #00bcd4;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in;
  }

  &:hover {
    color: #00bcd4;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 40px;
  gap: 16px;
  list-style: none;
  background: white;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.4s ease-in-out;
  z-index: ${({ isOpen }) => (isOpen ? "999" : "-1")};

  a {
    font-weight: 500;
    color: black;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #00bcd4;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in;
    }

    &:hover {
      color: #00bcd4;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <NavbarContainer>
            <Logo>
              Bariflo <br />
              <span>Cybernetics</span>
            </Logo>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              <MenuRounded />
            </MobileIcon>
    
            <NavItems scrolled={scrolled}>
              <NavLink scrolled={scrolled} href="#About">HOME</NavLink>
              <NavLink  scrolled={scrolled} href="#skills">PRODUCTS</NavLink>
              <NavLink scrolled={scrolled} href="#Experience">NEWS</NavLink>
              <NavLink  scrolled={scrolled} href="#Education">CASE STUDIES</NavLink>
              <NavLink  scrolled={scrolled} href="#Project">CONTACT US</NavLink>
              <MenuRounded />
            </NavItems>
    
            <MobileMenu isOpen={isOpen}>
              <NavLink scrolled={scrolled} href="#About">About</NavLink>
              <NavLink scrolled={scrolled} href="#skills">Skills</NavLink>
              <NavLink scrolled={scrolled} href="#Experience">Experience</NavLink>
              <NavLink scrolled={scrolled} href="#Project">Project</NavLink>
              <NavLink scrolled={scrolled} href="#Education">Education</NavLink>
            </MobileMenu>
          </NavbarContainer>
    </Nav>
  );
}
