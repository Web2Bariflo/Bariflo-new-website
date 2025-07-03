//outdoor page

import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { motion } from "framer-motion";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import PopImg from "../../components/outdoor/PopImg";
import Banner from "../../components/Banner";

const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OutdoorAqua = () => {
  const cards = [
    {
      title: "Indoor Aqua Culture",
      image: "/images/indoor.png",
      link: "/indoorAqua",
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
        image="/images/walpaper.png"
        heading="Integrated Landbased Aqua Farming Management System"
      />
      <PopImg />
      {/* <OutdoorParallex/>
      <OutdoorData /> */}
      {/* <ProductDetails /> */}

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

export default OutdoorAqua;
