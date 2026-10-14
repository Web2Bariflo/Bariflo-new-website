//navbar

import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { MenuRounded, Close } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FullNav from "./FullNav";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ menuOpen }) => (menuOpen ? "hidden" : "auto")};
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
  padding: 16px 28px 16px 16px;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  color: ${({ textColor }) => textColor || "black"};
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 16px;
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
  color: ${({ textColor }) => textColor || "black"};
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
  // border-radius: 0 0 20px 20px;
  color: black;

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

const FullScreenMenu = styled.div`
  background: url("/images/77707896-3e5e-422e-bf3b-ed36d4298ea0 7.png") left top
    repeat;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: transform 0.5s ease, opacity 0.5s ease;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export default function Navbar({ textWhite = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentTextColor = scrolled ? "black" : textWhite ? "white" : "black";

  return (
    <>
      <GlobalStyle menuOpen={menuOpen} />
      <Nav scrolled={scrolled} textColor={currentTextColor}>
        <NavbarContainer>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              to="/"
              className="bariflo-back-home-btn"
              title="Back to Home"
              aria-label="Back to Home"
            >
              <FaArrowLeft size={20} />
            </Link>
            <Logo>
              Bariflo <br />
              <span>Cybernetics</span>
            </Logo>
          </div>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <MoreVertIcon />
          </MobileIcon>

          <NavItems scrolled={scrolled}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>HOME</NavLink>
            </Link>

            {/* <Link  style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>PRODUCTS</NavLink>
            </Link> */}

            <Link to="/news" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>NEWS</NavLink>
            </Link>

            <Link to="/case-studies" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>CASE STUDIES</NavLink>
            </Link>

            <Link to="/contactUs" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>CONTACT US</NavLink>
            </Link>

            <div onClick={toggleMenu}>
              {menuOpen ? <Close /> : <MenuRounded />}{" "}
            </div>
          </NavItems>

          <MobileMenu isOpen={isOpen} textColor={currentTextColor}>
            <div onClick={toggleMenu}>
              {menuOpen ? <Close /> : <MenuRounded />}{" "}
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>HOME</NavLink>
            </Link>
{/* 
            <Link to="/prodcts" style={{ textDecoration: "none" }}>
              <NavLink scrolled={scrolled}>PRODUCTS</NavLink>
            </Link> */}

            <Link to="/news" style={{ textDecoration: "none" }}>
              <NavLink scrolled={scrolled}>NEWS</NavLink>
            </Link>

            <Link to="/case-studies" style={{ textDecoration: "none" }}>
              <NavLink scrolled={scrolled}>CASE STUDIES</NavLink>
            </Link>

            <Link to="/contactUs" style={{ textDecoration: "none" }}>
              <NavLink textColor={currentTextColor}>CONTACT US</NavLink>
            </Link>
          </MobileMenu>
        </NavbarContainer>
      </Nav>

      <FullScreenMenu isOpen={menuOpen}>
        <Nav>
          <NavbarContainer>
            <Logo>
              Bariflo <br />
              <span>Cybernetics</span>
            </Logo>

            <NavItems scrolled={scrolled}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLink>HOME</NavLink>
              </Link>

              {/* <Link to="/prodcts" style={{ textDecoration: "none" }}>
                <NavLink>PRODUCTS</NavLink>
              </Link> */}

              <Link to="/news" style={{ textDecoration: "none" }}>
                <NavLink>NEWS</NavLink>
              </Link>

              <Link to="/case-studies" style={{ textDecoration: "none" }}>
                <NavLink>CASE STUDIES</NavLink>
              </Link>

              <Link to="/contactUs" style={{ textDecoration: "none" }}>
                <NavLink href="#Project">CONTACT US</NavLink>
              </Link>

              <div onClick={toggleMenu}>
                {menuOpen ? <Close /> : <MenuRounded />}{" "}
              </div>
            </NavItems>
          </NavbarContainer>
          <MobileMenu isOpen={isOpen} textColor={currentTextColor}>
            <div onClick={toggleMenu}>
              {menuOpen ? <Close /> : <MenuRounded />}{" "}
            </div>
          </MobileMenu>
        </Nav>

        <FullNav />
      </FullScreenMenu>
    </>
  );
}
