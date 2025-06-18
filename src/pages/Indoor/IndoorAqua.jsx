import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { motion } from "framer-motion";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import styled, { keyframes } from "styled-components";
import Banner from "../../components/Banner";
import PopImgIndoor from "../../components/indoor/PopImgIndoor";
import IndoorData from "../../components/indoor/IndoorData";

const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IndoorAqua = () => {
  const cards = [
    {
      title: "Land based Aqua culture",
      image: "/images/openAquaculture.png",
      link: "/outdoorAqua",
    },
    {
      title: "Open Aqua culture",
      image: "/images/bfc.png",
      link: "",
    },
    {
      title: "Aqua Culture Intelligence",
      image: "/images/aquaai.png",
      link: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <Banner
        image="/images/biofloc2.png"
        heading="Integrated Indoor crustacean Farming Management System"
      />
      <PopImgIndoor />
      <IndoorData/>
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
    </>
  );
};

export default IndoorAqua;
