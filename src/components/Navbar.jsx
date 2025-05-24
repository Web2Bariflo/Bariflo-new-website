import { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isScrolled",
})`
  background-color: white;
  transition: background-color 0.3s ease;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none"};
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
  color: black;
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

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavbarContainer>
        <Logo>
          Bariflo <br />
          <span>Cybernetics</span>
        </Logo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">HOME</NavLink>
          <NavLink href="#skills">PRODUCTS</NavLink>
          <NavLink href="#Experience">NEWS</NavLink>
          <NavLink href="#Education">CASE STUDIES</NavLink>
          <NavLink href="#Project">CONTACT US</NavLink>
          <MenuRounded />
        </NavItems>

        <MobileMenu isOpen={isOpen}>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Project">Project</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
