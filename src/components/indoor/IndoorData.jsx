//data fo indoor not used 

import styled from "styled-components";
import { motion } from "framer-motion";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
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
// Sample image (replace with actual paths)
const data = [
  {
    heading: "Biofloc Technology for Water Efficiency and Healthier Stock",
    text: "At the core of this system is biofloc technology — a process that recycles waste into microbial protein within the tank itself. This not only conserves water but also promotes better feed utilization, enhances crustacean growth rates, and improves immunity. The result is a healthier, more resilient stock with reduced environmental impact and operational costs.",
    image: "/images/biofloc1.jpg",
  },
  {
    heading: "Smart Monitoring for Precision Aquaculture",
    text: "Our system is enhanced with intelligent monitoring tools that give farmers real-time visibility into water quality, biofloc density, and overall tank conditions. These data-driven insights allow for precise control over feeding, aeration, and system performance — optimizing productivity while minimizing resource use. It's aquaculture reimagined for sustainability and profitability.",
    image:
      "/images/IMG_20200730_121627 - 1S4MidoZHXSCQzNGOJpLsEcywcmhqg4PB (1).jpg",
  },
];

const IndoorData = () => {
  return (
    <>

      <Container>
        {data.map((section, index) => (
          <motion.div
            key={index}
            variants={floatUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Section reverse={index % 2 !== 0}>
              <ImageWrapper>
                <img src={section.image} alt={section.heading} />
              </ImageWrapper>
              <TextWrapper>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </TextWrapper>
            </Section>
          </motion.div>
        ))}
      </Container>
    </>
  );
};

export default IndoorData;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 60px 5vw;
  margin-top: 60px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden; /* Ensure the zoomed image doesn’t spill out */
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 400px;
    border-radius: 12px;
    transition: transform 0.4s ease; /* Smooth zoom effect */
  }

  &:hover img {
    transform: scale(1.08); /* Zoom amount */
  }
`;


const TextWrapper = styled.div`
  flex: 1;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
`;
