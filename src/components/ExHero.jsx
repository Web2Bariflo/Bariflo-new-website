   import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/web-vdo3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <HeroContent>
        <h1>Next-Gen Ocean Robotics</h1>
        <p>Welcome to the future of underwater innovation</p>
      </HeroContent>
    </HeroContainer>
  );
}
