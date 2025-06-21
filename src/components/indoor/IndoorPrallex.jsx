import styled from "styled-components";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";

// ✅ Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// ✅ Image and text
const image = "/images/IMG-20220122-WA0004 1.png";
const heading = "Integrated Systems for Modern Crustacean Farming";
const para1 =
  "The Integrated Indoor Crustacean Farming Management System brings together advanced aquaculture engineering with biofloc technology to create a closed-loop, sustainable farming environment.";
const para2 =
  "This system addresses key industry challenges like water scarcity, land limitations, and disease outbreaks by maintaining controlled indoor conditions, reducing dependency on external factors.";

const IndoorParallax = () => {
  return (
    <ParallaxProvider>
      <HeroWrapper>
        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: <BackgroundImage src={image} alt="Hero Background" />,
            },
            {
              speed: 0,
              children: <BlurOverlay />,
            },
          ]}
          style={{ height: "70vh", position: "relative" }}
        >
          <HeroContent>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              custom={1}
            >
              {heading}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              custom={2}
            >
              {para1}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              custom={3}
            >
              {para2}
            </motion.p>
          </HeroContent>
        </ParallaxBanner>
      </HeroWrapper>
    </ParallaxProvider>
  );
};

export default IndoorParallax;



const HeroWrapper = styled.section`
  height: 50vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlurOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(22, 184, 184, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;

  @media (max-width: 768px) {
    backdrop-filter: none;
    background: rgba(22, 184, 184, 0.3);
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
  width: 100%;

  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin-bottom: 16px;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.2rem);
    line-height: 1.6;
    color: #f0f0f0;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    margin-top: 16px;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    top: 15%;
    padding: 0 15px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    top: 10%;
    padding: 0 10px;

    p {
      font-size: 0.95rem;
    }
  }
`;
