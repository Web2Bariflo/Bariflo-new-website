//team button component 

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tilt } from "react-tilt";

const TeamSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Description>
          Bariflo Cybernetics, an Industry 4.0 startup, specializes in water
          body management using fluid dynamics.
          <br />
          We provide smart aquaculture equipment, robotics, and IoT-based farm
          automation for efficient, climate-resilient shrimp farming.
        </Description>
      </TextContainer>
      <ButtonGroup>
        <h2>Get to know us</h2>
        <Tilt>
          <StyledButton>
            <Link
              to="/teamMember"
              style={{ textDecoration: "none", color: "white" }}
            >
              Meet our management Team
            </Link>
          </StyledButton>
        </Tilt>
      </ButtonGroup>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 200px;
  background-color: #f9f9f9;
  flex-wrap: wrap;
  // box-shadow: inset 0 -10px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;
  min-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin: 50px 0;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 20px 0;
    line-height: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  flex: 1;
  max-width: 50%;
  padding-left: 200px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    margin-top: 30px;
  }
`;

const StyledButton = styled.button`
  background-color: #00bcd4;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #009ec9;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export default TeamSection;
