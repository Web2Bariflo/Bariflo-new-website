import styled from "styled-components";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

// Styled Components
const HeroWrapper = styled.section`
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
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





const Banner = ({ image, heading }) => {
return (
  <ParallaxProvider>
    <HeroWrapper>
      <ParallaxBanner
        layers={[
          {
            speed: -20,
            children: (
              <img
                src={image} // ✅ Replace with actual image path
                alt="Hero Background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
                  background: "rgba(0, 0, 0, 0.6)",
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
          <h1>{heading}...</h1>
        </HeroContent>
      </ParallaxBanner>
    </HeroWrapper>
  </ParallaxProvider>
);

}

export default Banner