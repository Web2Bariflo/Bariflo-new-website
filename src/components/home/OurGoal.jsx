import React from "react";
import ReactPlayer from "react-player";
import { FaYoutube } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 200px;
  background-color: #f9f9f9;
  flex-wrap: wrap;
  box-shadow: inset 0 -10px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
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

const Title = styled.h1`
  font-size: 40px;
  color: #00bcd4;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin: 50px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 30px 0;
  }
`;

const Link = styled.a`
  font-size: 24px;
  margin-bottom: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  max-width: 600px; /* Decreased width for card-like appearance */
  height: 300px;     /* Increased height */
  position: relative;
  cursor: pointer;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    margin-top: 40px;
  }
`;

const YoutubeIcon = styled(FaYoutube)`
  color: red;
  font-weight: bold;
`;

const OurGoal = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Our Goal</Title>
        <Description>
          To Drive The Shift From Traditional To Tech-Enabled Aquaculture With
          Scalable, Smart, And Sustainable Solutions.
        </Description>
        <Link>
          WATCH OUR STORY ON <YoutubeIcon />
        </Link>
      </TextContainer>
      <VideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=cL_214QnjZI"
          controls
          width="100%"
          height="100%"
        />
      </VideoContainer>
    </Container>
  );
};

export default OurGoal;
