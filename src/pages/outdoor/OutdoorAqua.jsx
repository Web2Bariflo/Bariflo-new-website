import UnderMaintenance from "../../components/Maintaince";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { motion } from "framer-motion";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import PopImg from "../../components/outdoor/PopImg";
import ProductDetails from "../../components/outdoor/ProductDetails";

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
      <PopImg />

      <ProductDetails />

      
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
