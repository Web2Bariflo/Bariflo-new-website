//footer component

import React from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background: url("/images/77707896-3e5e-422e-bf3b-ed36d4298ea0 7.png") left top
    repeat;
  background-color: #f7f7f7;
  padding: 100px 40px 60px;
  color: #333;
  font-size: 14px;
  margin-left: 20px;
  height: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 60px 20px 40px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  border-bottom: 1px solid #ddd;
  padding: 60px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

const Column = styled.div`
  flex: 1 1 200px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin-bottom: 30px;
  }

  p {
    line-height: 2;
    font-size: 16px;
  }

  ul {
    list-style: none;
    margin-left: 100px;
    font-size: 16px;

    @media (max-width: 768px) {
      margin-left: 0;
      padding: 0;
    }

    li {
      margin-bottom: 8px;
    }

    a {
      color: #333;
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease-in;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
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
  }
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  span {
    color: #00bcd4;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;

  a {
    color: #333;
    font-size: 20px;

    &:hover {
      color: #00bcd4;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: #888;

  a {
    margin: 0 10px;
    color: #888;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 0 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo>
            Bariflo <span>Cybernetics</span>
          </Logo>
          <p>Follow Us On:</p>
          <SocialIcons>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </SocialIcons>
        </Column>

        <Column>
          <p>
            Bariflo provides full-stack IoT solutions for aqua farming and
            aquatic species research including robotics and AI driven data
            quality equipment, expert consulting services, and innovative
            platforms that deliver unmatched data, information, and insights.
          </p>
        </Column>

        <Column>
          <ul>
            <li>
              <a href="#">Open Aqua Culture</a>
            </li>
            <li>
              <a href="#">Indoor Culture</a>
            </li>
            <li>
              <a href="#">Land Based Aqua Culture</a>
            </li>
            <li>
              <a href="#">Aqua Culture Intelligence</a>
            </li>
          </ul>
        </Column>

        <Column>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <Link to="/contactUs" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </Column>
      </FooterContent>

      <BottomBar>
        Copyright © 2025 Bariflo Cybernetics. All Rights Reserved. |
        <a href="#">Privacy Policy</a> |<a href="#">Sitemap</a>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
