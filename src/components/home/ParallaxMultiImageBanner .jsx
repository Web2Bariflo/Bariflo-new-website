import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import ImageSlider from "react-simple-image-slider";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const BannerWrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
  }
`;
const GlobalStyle = createGlobalStyle`
  .react-simple-image-slider__img {
    object-fit: cover !important;
    width: 100% !important;
    height: 100% !important;
    filter: brightness(50%);
    transition: filter 0.5s ease;
  }
`;

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: 100%;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;


const TextOverlay = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  color: white;
  z-index: 10;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 1.0);

  @media (max-width: 768px) {
    top: 6rem;
    left: 2rem;
    right: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    margin-top: 4px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
const StyledImageSliderWrapper = styled.div`
  width: 100%;
  height: 100%;

  .react-simple-image-slider__img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
`;

// Main Component
const ParallaxMultiImageBanner = () => {
  const images = [
    {
      url: "/images/aeration.jpg",
      title: "AERATION DEVICE",
      subtitle: "to purify water quality",
    },
    {
      url: "/images/biofloc1.jpg",
      title: "BIOFLOC SYSTEM",
      subtitle: "maximize yield with minimal waste",
    },
    {
      url: "/images/pond.png",
      title: "SMART POND",
      subtitle: "real-time water monitoring",
    },
    {
      url: "/images/prawn.jpg",
      title: "PRAWN CULTURE TECH",
      subtitle: "powered by AI & IoT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <ParallaxProvider>
      <GlobalStyle />
      <BannerWrapper>
        <StyledParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <SliderWrapper>
                  <StyledImageSliderWrapper>
                    <ImageSlider
                      images={images}
                      autoPlay={true}
                      autoPlayDelay={4}
                      width="100%"
                      height="100%"
                      showBullets={true}
                      showNavs={true}
                      onStartSlide={(index) => setCurrentIndex(index - 1)}
                    />
                  </StyledImageSliderWrapper>

                  {/* <Overlay /> */}
                </SliderWrapper>
              ),
            },
          ]}
        />

        <TextOverlay>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.8 }}
            >
              <h2>{images[currentIndex].title}</h2>
              <p>{images[currentIndex].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </TextOverlay>
      </BannerWrapper>
    </ParallaxProvider>
  );
};

export default ParallaxMultiImageBanner;
