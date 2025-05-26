import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  background: url("/images/water.png") center/cover no-repeat;
  color: white;
  padding: 100px 20px;
  min-height: 600px;
  text-align: left;
  overflow: hidden;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 100px 16px;
    min-height: 400px;
  }
`;

const Wave = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    display: block;
    width: 100%;
    height: 200px;

    @media (max-width: 768px) {
      height: 100px;
    }
  }

  path {
    fill: white;
  }
`;

const Content = styled.div`
  max-width: 800px;
  padding: 80px;
  z-index: 1;
  position: relative;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 60px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 24px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: white;
    text-decoration: none;
    font-size: 32px;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;

    &:after {
      content: "→";
      margin-left: 8px;
      font-size: 2em;
      position: relative;
      top: -8px;
      transition: margin 0.2s, top 0.2s;
    }

    &:hover:after {
      margin-left: 20px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      width: 100%;
    }
  }
`;


const ContactSection = () => {
  return (
    <Section>
      <Wave>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C150.00,150.00 349.95,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </Wave>

      <Content>
        <h2>READY TO LEARN MORE ?</h2>
        <p>
          Contact Us Today To Find Out How Our Aquaculture And Prawn Tracking
          Experts Can Help With Your Next Project
        </p>
        <a href="#contact">CONTACT US</a>
      </Content>
    </Section>
  );
};

export default ContactSection;
