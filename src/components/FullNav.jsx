import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CenterMenu = styled.div`
  background: url("/images/77707896-3e5e-422e-bf3b-ed36d4298ea0 7.png") left top
    repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 90vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;
`;

const Section = styled.div`
  text-align: center;
`;

const SectionHeading = styled.a`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #00bcd4;
  }

  &::after {
    content: "▼";
    font-size: 12px;
    margin-left: 8px;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
  padding-left: 10px;
`;

const SubLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FullNav = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <CenterMenu>
      <Section>
        <SectionHeading
          onClick={(e) => {
            e.preventDefault();
            navigate("/outdoorAqua");
          }}
          open={openSection === "open"}
        >
          Land Based Aqua Culture
        </SectionHeading>
        {/* {openSection === "open" && (
          <SubLinks>
            <SubLink href="#open-1">Feeding Systems</SubLink>
            <SubLink href="#open-2">Case Studies</SubLink>
          </SubLinks>
        )} */}
      </Section>

      <Section>
        <SectionHeading
          onClick={(e) => {
            e.preventDefault();
            navigate("/indoorAqua");
          }}
          open={openSection === "indoor"}
        >
          Indoor Aquaculture
        </SectionHeading>
        {/* {openSection === "indoor" && (
          <SubLinks>
            <SubLink href="#indoor-1">Biofloc Design</SubLink>
            <SubLink href="#indoor-2">Equipment Supply</SubLink>
            <SubLink href="#indoor-3">Case Studies</SubLink>
          </SubLinks>
        )} */}
      </Section>

      <Section>
        <SectionHeading
          // href="#land"
          // onClick={(e) => {
          //   e.preventDefault();
          //   toggleSection("land");
          // }}
          // open={openSection === "land"}
          as="span"
          style={{ opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" }}
        >
          Open Aqua Culture
        </SectionHeading>
        {/* {openSection === "land" && (
          <SubLinks>
            <SubLink href="#land-1">RAS Design</SubLink>
            <SubLink href="#land-2">RAS Equipment Supply</SubLink>
            <SubLink href="#land-3">RAS Monitoring and Control</SubLink>
            <SubLink href="#land-4">Case Studies</SubLink>
          </SubLinks>
        )} */}
      </Section>

      <Section>
        <SectionHeading
          // href="#intelligence"
          // onClick={(e) => {
          //   e.preventDefault();
          //   toggleSection("intelligence");
          // }}
          // open={openSection === "intelligence"}
          as="span"
          style={{ opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" }}
        >
          Aqua Culture Intelligence
        </SectionHeading>
        {/* {openSection === "intelligence" && (
          <SubLinks>
            <SubLink href="#intelligence-2">Farm Management Software</SubLink>
            <SubLink href="#intelligence-4">Aeration & Oxygen Control</SubLink>
            <SubLink href="#intelligence-6">Camera Systems</SubLink>
            <SubLink href="#intelligence-7">Feed Optimization</SubLink>
          </SubLinks>
        )} */}
      </Section>
    </CenterMenu>
  );
};

export default FullNav;
