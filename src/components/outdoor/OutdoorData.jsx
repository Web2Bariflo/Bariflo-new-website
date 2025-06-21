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
    heading: "Sustainable Land-Based Aquaculture Systems",
    description:
      "Land-based aquaculture provides a highly controlled environment for crustaceans, ensuring optimal growth conditions while minimizing environmental impact. At Bariflo Labs, our Integrated Outdoor Crustacean Farming Management System (IOCFMS) leverages modern practices to improve sustainability and resource efficiency in land-based farming setups.",
    points: [
      "Minimizes water usage through advanced recirculation systems.",
      "Reduces dependence on natural water bodies, protecting ecosystems.<",
      "Ensures stable water quality for consistent crustacean growth.",
      "Supports eco-friendly farming techniques that lower carbon footprints.",
    ],
    image:
      "/images/aerial-shot-landscape-surrounded-by-mountains-lakes-with-industrial-disaster.jpg",
  },
  {
    heading: "Enhancing Biodiversity and Habitat Conservation",
    description:
      "At Bariflo Labs, the IOCFMS emphasizes biodiversity conservation by replicating natural conditions in controlled land-based setups. This approach protects native ecosystems while promoting ecological balance, ensuring that farming activities contribute to long-term environmental health.",
    points: [
      "Preserves biodiversity by reducing habitat disruption.",
      "Promotes ecological balance through sustainable practices.",
      "Limits the release of pollutants into natural water systems.",
      "Encourages responsible aquaculture aligned with conservation goals.",
    ],
    image: "/images/ramchandi.jpg",
  },
  {
    heading: "Efficiency Through Technological Integration",
    description:
      "Land-based aquaculture benefits significantly from the integration of advanced technologies. Bariflo Labs' IOCFMS employs automation and real-time monitoring to ensure optimal conditions for crustacean farming, enhancing operational efficiency while reducing costs and resource usage.",
    points: [
      "Uses real-time monitoring to manage temperature, salinity, and water quality.",
      "Automates feeding and aeration for precise resource allocation.",
      "Improves growth rates by maintaining consistent conditions.",
      "Reduces operational costs through energy-efficient systems.",
    ],
    image: "/images/CaptureJJJJ (1) 1.png",
  },
];

const OutdoorData = () => {
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
                <SectionTitle>{section.heading}</SectionTitle>
                <Paragraph>{section.description}</Paragraph>
                <List>
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </List>
              </TextWrapper>
            </Section>
          </motion.div>
        ))}
      </Container>
    </>
  );
};

export default OutdoorData;



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
const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 12px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const List = styled.ul`
  padding-left: 20px;
  list-style-type: disc;

  li {
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;
