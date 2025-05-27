import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

const images = {
  "Open Aqua culture":
    "https://cdn.pixabay.com/photo/2020/03/29/06/34/clouds-4979558_960_720.jpg",
  "Indoor Aqua Culture":
    "https://cdn.pixabay.com/photo/2015/01/06/08/02/sky-589982_960_720.jpg",
  "Land based Aqua culture":
    "https://cdn.pixabay.com/photo/2016/09/11/10/44/sunset-1661088_960_720.jpg",
  "Aqua Culture Intelligence":
    "https://cdn.pixabay.com/photo/2023/09/29/10/20/sunset-8283538_1280.jpg",
};

const categories = Object.keys(images);

// Styled components for layout
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  overflow: hidden;
`;

const LeftPane = styled.div`
  flex: 0.9;
  height: 100%;
`;

const RightPane = styled.div`
  flex: 0.1;
  // background: rgba(22, 184, 184, 0.85);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  z-index: 10;
`;

const Tab = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  color: black;
  border-bottom: 2px solid black;
  user-select: none;
  white-space: nowrap;

  transform: rotate(-90deg);
  transform-origin: center;
`;

export default function AquaCultureSlider() {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <ParallaxProvider>
      <Wrapper>
        <LeftPane>
          <ParallaxBanner
            layers={[
              {
                image: images[selected],
                speed: -20,
              },
            ]}
            style={{ height: "100%" }}
          />
        </LeftPane>

        <RightPane>
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              <Tab
                key={category}
                active={selected === category}
                onClick={() => setSelected(category)}
                initial={{ opacity: 0.6, rotate: -90 }}
                animate={{
                  opacity: selected === category ? 1 : 0.6,
                  rotate: -90,
                }}
                exit={{ opacity: 0.6, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </Tab>
            ))}
          </AnimatePresence>
        </RightPane>
      </Wrapper>
    </ParallaxProvider>
  );
}
