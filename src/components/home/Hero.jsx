import styled from 'styled-components';
import Navbar from '../Navbar';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* dark overlay */
  top: 0;
  left: 0;
  z-index: 1;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 16px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 20px;
    font-weight: 400;
    max-width: 500px;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted>
        <source src="/web-vdo3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <HeroContent>
        <h1>Industrializing Aqua Culture ...</h1>
        <p>Developing sustainable technology for aquaculture farming...</p>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
