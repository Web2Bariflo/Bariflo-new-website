// ScrollSections.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #e0fafa; /* Light cyan background */
`;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBox = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 50%;
  background-color: #fff; /* Matching light cyan e0f7fa*/
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 20px;
  }
`;

const RightContent = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 100px 60px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }

  h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 1.2;
    color: #0a0a0a;
    margin-bottom: 20px;
  }
    h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Section = styled.div`
  min-height: 100vh;
  padding: 60px 0;
  border-bottom: 1px solid #eee;
`;
const MobileSection = styled.div`
  padding: 40px 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

const MobileImage = styled.img`
  max-width: 90%;
  margin: 0 auto 20px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
`;

const MobileText = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #0a0a0a;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

const ScrollSections = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMobile();

  console.log(sections);
  return (
    <Wrapper>
      {isMobile ? (
        sections.map((section, index) => (
          <MobileSection key={section.id}>
            <MobileImage src={section.image} alt={`Image ${index}`} />
            <MobileText>
              <h2>{section.text}</h2>
              <h5>{section.subText}</h5>
              <p>Section #{section.id}</p>
            </MobileText>
          </MobileSection>
        ))
      ) : (
        <Container>
          <LeftBox>
            <Image src={sections[activeIndex].image} alt="Visual" />
          </LeftBox>
          <RightContent>
            {sections.map((section, index) => {
              const [ref, inView] = useInView({ threshold: 0.5 });
              useEffect(() => {
                if (inView) setActiveIndex(index);
              }, [inView, index]);

              return (
                <Section ref={ref} key={section.id}>
                  <h2>{section.text}</h2>
                  <h5>{section.subText}</h5>
                  <p>Section #{section.id}</p>
                </Section>
              );
            })}
          </RightContent>
        </Container>
      )}
    </Wrapper>
  );
};

export default ScrollSections;
