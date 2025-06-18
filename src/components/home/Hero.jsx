import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

// Styled Components
const HeroWrapper = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;

    h1 {
      font-size: 28px;
    }
  }
`;

const TextLoop = styled.div`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function Hero() {
  return (
    <ParallaxProvider>
      <HeroWrapper>
        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src="/web-vdo3.mp4" type="video/mp4" />
                </video>
              ),
            },
            {
              speed: 0,
              children: (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                  }}
                />
              ),
            },
          ]}
          style={{
            height: "100vh",
            position: "relative",
          }}
        >
          <HeroContent>
            <h1>Industrializing Aqua Culture ...</h1>
            <TextLoop>
              Innovation in{" "}
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "AI-driven aquaculture systems",
                      "Robotics and IoT for smart farming",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </TextLoop>
          </HeroContent>
        </ParallaxBanner>
      </HeroWrapper>
    </ParallaxProvider>
  );
}
