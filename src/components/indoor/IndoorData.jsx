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
    <ParallaxProvider>
      <div>
        <OverlayContainer>
          <div>
            <h1>Integrated Systems for Modern Crustacean Farming</h1>
            <p>
              The Integrated Indoor Crustacean Farming Management System brings
              together advanced aquaculture engineering with biofloc technology
              to create a closed-loop, sustainable farming environment. This
              system addresses key industry challenges like water scarcity, land
              limitations, and disease outbreaks by maintaining controlled
              indoor conditions, reducing dependency on external factors.
            </p>
          </div>
        </OverlayContainer>
      </div>

      <motion.div
        variants={floatUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container>
          {data.map((section, index) => (
            <Section key={index} reverse={index % 2 !== 0}>
              <ImageWrapper>
                <img src={section.image} alt={section.heading} />
              </ImageWrapper>
              <TextWrapper>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </TextWrapper>
            </Section>
          ))}
        </Container>
      </motion.div>
    </ParallaxProvider>
  );
};

export default IndoorData;


const OverlayContainer = styled.div`
  position: relative;
  background-image: url("/images/IMG-20220122-WA0004 1.png");
  background-size: cover;
  background-position: center;
  color: white;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  text-align: center;
  overflow: hidden;

  // The blurred overlay effect
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(22, 184, 184, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1;
  }

  // The content (text) goes above the overlay
  > div {
    position: relative;
    z-index: 2;
    max-width: 800px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 16px;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #f0f0f0;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 1024px) {
    height: 60vh;

    > div h1 {
      font-size: 2rem;
    }

    > div p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 20px;

    > div h1 {
      font-size: 1.7rem;
    }

    > div p {
      font-size: 1rem;
    }

    &::before {
      backdrop-filter: none;
      background: rgba(22, 184, 184, 0.3); // Slightly stronger for small screens
    }
  }

  @media (max-width: 480px) {
    padding: 20px 15px;

    > div h1 {
      font-size: 1.4rem;
    }

    > div p {
      font-size: 0.95rem;
    }
  }
`;

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
  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    max-height: 400px;
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
