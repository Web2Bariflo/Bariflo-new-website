import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { motion } from "framer-motion";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import styled, { keyframes } from "styled-components";

const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

// 🔹 Image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

// 🔹 Main Image
const MainImage = styled.img`
  transition: transform 0.3s ease, opacity 0.3s ease;
  ${(props) =>
    props.popped &&
    `
    transform: scale(0.95);
    opacity: 1.0;
  `}
  width: 100%;
  height: auto;
`;

const IndoorAqua = () => {
  const cards = [
    {
      title: "Open Aqua culture",
      image: "/images/openAquaculture.png",
      link: "/openAquaculture",
    },
    {
      title: "Indoor Aqua Culture",
      image: "/images/indoor.png",
      link: "/indoor",
    },
    {
      title: "Land based Aqua culture",
      image: "/images/bfc.png",
      link: "/Land-based-Aqua",
    },
    {
      title: "Aqua Culture Intelligence",
      image: "/images/aquaai.png",
      link: "aquaai",
    },
  ];
  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <Wrapper>
        <ImageContainer>
          <MainImage
            src="/images/bioflocdesign.png"
            alt="Clickable"
          />
        </ImageContainer>
      </Wrapper>
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
      {/* <UnderMaintenance /> */}
    </>
  );
};

export default IndoorAqua;
