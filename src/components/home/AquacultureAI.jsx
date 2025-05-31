import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Background images for each category
const images = {
  "Open Aqua culture": "/images/openAquaculture.png",
  "Indoor Aqua Culture": "/images/indoor.png",
  "Land based Aqua culture": "/images/bfc.png",
  "Aqua Culture Intelligence": "/images/aquaai.png",
};

// Text content per category
const contentByCategory = {
  "Open Aqua culture": {
    heading: "Explore Open Aquaculture Solutions",
    button: "Learn More",
    link: "/outdoorAqua",
  },
  "Indoor Aqua Culture": {
    heading: "Revolutionizing Indoor Aquaculture",
    button: "Learn More",
    link: "/indoorAqua",
  },
  "Land based Aqua culture": {
    heading: "Land-Based Sustainable Systems",
    button: "Learn More",
    link: "/landBasedAqua",
  },
  "Aqua Culture Intelligence": {
    heading: "Smarter Aquaculture with AI",
    button: "Discover",
    link: "/aquaIntelligence",
  },
};

const categories = Object.keys(images);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftPane = styled.div`
  flex: 0.9;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: none;
    height: 60vh;
  }
`;

const RightPane = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  z-index: 10;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background-color: ${({ active }) => (active ? "#16b8b8" : "#ffffff")};
  font-weight: bold;
  padding: 15px 0;
  width: 10rem;
  cursor: pointer;
  letter-spacing: 1.5px;
  user-select: none;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 0 5px;

  &:hover {
    background-color: ${({ active }) => (active ? "#139c9c" : "#e0e0e0")};
    color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: rotate(180deg) scale(1.05);
  }

  &:active {
    transform: rotate(180deg) scale(0.98);
  }

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    transform: none !important;
    width: auto;
    padding: 10px 20px;
    margin: 5px;
    text-align: center;

    &:hover,
    &:active {
      transform: none !important;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 80%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #16b8b8;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #139c9c;
  }
`;

export default function AquaCultureSlider() {
  const [selected, setSelected] = useState(categories[0]);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (newTab) => {
    const currentIndex = categories.indexOf(selected);
    const nextIndex = categories.indexOf(newTab);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setSelected(newTab);
  };

  return (
    <ParallaxProvider>
      <Wrapper>
        <LeftPane>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={selected}
              custom={direction}
              initial={{ x: direction * 2000 }}
              animate={{ x: 0 }}
              exit={{ x: direction * -2000 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <ParallaxBanner
                layers={[{ image: images[selected], speed: -20 }]}
                style={{ height: "100%" }}
              />
              <Overlay />
              <Content>
                <Heading>{contentByCategory[selected].heading}</Heading>
                <Button onClick={() => navigate(contentByCategory[selected].link)}>{contentByCategory[selected].button}</Button>
              </Content>
            </motion.div>
          </AnimatePresence>
        </LeftPane>

        <RightPane>
          {categories.map((cat) => (
            <Tab
              key={cat}
              active={selected === cat}
              onClick={() => handleTabClick(cat)}
            >
              {cat}
            </Tab>
          ))}
        </RightPane>
      </Wrapper>
    </ParallaxProvider>
  );
}
