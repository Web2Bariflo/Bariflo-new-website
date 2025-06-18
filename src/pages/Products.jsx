import React from "react";
import styled from "styled-components";
import ScrollSections from "../components/ScrollSections";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Cards from "../components/Cards";
import { motion } from "framer-motion";
import ProductData from "../components/product/ProductData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==== Dummy Cards Data ====
const cards = [
  {
    title: "Land based Aqua culture",
    image: "/images/openAquaculture.png",
    link: "/outdoorAqua",
  },
  {
    title: "Indoor Aqua Culture",
    image: "/images/indoor.png",
    link: "/indoorAqua",
  },
  {
    title: "Open Aqua culture ",
    image: "/images/bfc.png",
    link: "",
  },
  {
    title: "Aqua Culture Intelligence",
    image: "/images/aquaai.png",
    link: "",
  },
];

// ==== Styled Components ====

const PageWrapper = styled.div``;

const HeadingContainer = styled.div`
  text-align: center;
  padding: 30px 20px;
  max-width: 900px;
  margin: 100px auto;

  @media (max-width: 768px) {
    padding: 30px 15px 10px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0a0a0a;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const SubText = styled.p`
  text-align: center;
  color: #00bcd4;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin: 60px auto 40px;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  color: #0a0a0a;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Divider = styled.div`
  width: 80%;
  height: 0.2px;
  background-color: #d3d3d3;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  display: inline-block;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PreviewImage = styled.img`
  width: 95vw;
  height: 100vh;
  object-fit: contain;
  border-radius: 0.75rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  display: block;
  user-select: none;

  ${ImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

// ==== Main Component ====

const Products = () => {
  const imageSrc = "/productss_page-0001 (3).jpg";

  return (
    <PageWrapper>
      <Navbar />
      <div style={{ height: "80px" }} />

      {/* === Heading Section === */}

      <HeadingContainer>
        <Title>Our Products</Title>

        <Subtitle>
          Unlock the future of sustainable aquaculture with our fully
          integrated, AI-IoT powered ecosystem—from sediment-level aeration to
          automated feeding and intelligent water monitoring. Boost efficiency,
          cut energy and operational costs, and gain total control of your farm
          through one smart, connected platform.
        </Subtitle>

        <motion.div variants={childVariant}>
          <SubText>Better Yield | Lower Cost | Smarter Control</SubText>
        </motion.div>
      </HeadingContainer>

      <ImageWrapper>
        <ImageContainer>
          <PreviewImage
            src={imageSrc}
            alt="Annotated Product Overview"
            draggable="false"
          />
        </ImageContainer>
      </ImageWrapper>

      {/* === Section Header with Divider === */}
      <motion.div
        variants={floatUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader>
          <SectionTitle>Dive Into the Details</SectionTitle>
          <Divider />
        </SectionHeader>
      </motion.div>
      <ProductData />
      <Divider />

      {/* === Cards Section === */}
      <motion.div
        variants={floatUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Cards cards={cards} />
      </motion.div>

      <ContactSection />
      <Footer />
    </PageWrapper>
  );
};

export default Products;
