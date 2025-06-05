import React from "react";
import styled from "styled-components";
import ScrollSections from "../components/ScrollSections";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Cards from "../components/Cards";
import UnderMaintenance from "../components/Maintaince";

const sections = [
  {
    id: 1,
    text: "AERATION SYSTEM",
    subText:
      "Our patented sediment aeration device diffuses air at the sediment level where the majority of waste and aquatic species shelter and helps maintaining dissolved oxygen at sediment oxygen boundary layer",
    image:
      "/images/website images and icon-20250524T084126Z-1-001/aeration device.png",
  },
  {
    id: 2,
    text: "AUTOMATED AMPHIBIOUS FEEDER",
    subText:
      "The feed distribution mechanism is the main component in an automatic feeder and distinguishes it from a feed dispenser. The feeders are xed in a rack on the tank or on the cage,but may also be included in a buoy.",
    image:
      "/images/website images and icon-20250524T084126Z-1-001/Automated Feeder isometric view.png",
  },
  {
    id: 3,
    text: "SMART CHECK TRAY AND PORTABLE FEEDER",
    subText:
      "The objective of this device is to monitor the daily, growth & feed conversion ratio. This device also helps in the observation of disease, growth assessment and behavioral observation of the species.",
    image: "/images/website images and icon-20250524T084126Z-1-001/Automated feeder.png",
  },
  {
    id: 4,
    text: "MONITORING AND WATER SAMPLING SYSTEM",
    subText:
      "It's an Ai based system integrated with a Water Sampling Unit and different parameters Sensors such as DO, Ammonia, Nitrate, Nitrite, ORP, pH,temperature at various places at the water body along the sediment and column area interfaces the practical problems. ",
    image: "/images/website images and icon-20250524T084126Z-1-001/Group 37 (1).png",
  },
    {
    id: 5,
    text: "POWER AND ENERGY MONITORING",
    subText:
      "Integrated energy monitoring & aerators dashboard could enhance the management of energy usage speciﬁc to aeration processes, potentially optimizing energy efﬁciency and reducing costs",
    image: "/images/website images and icon-20250524T084126Z-1-001/pm.png",
  },
    {
    id: 6,
    text: "LoRa GATEWAY",
    subText:
      "It’s a WiFi technology combines with low-power, long-range capabilities of WAN with the reliable, high-bandwidth connectivity of WiFi Mesh to provide a scalable IoT solution for applications.",
    image: "/images/website images and icon-20250524T084126Z-1-001/Lora box.jpg.png",
  },
];

const cards = [
  {
    title: "Farm Management",
    image:
      "/images/ramchandi.jpg",
    link: "/farm-management",
  },
  {
    title: "Aeration & Oxygen Control",
    image:
      "/images/1747894727976.jpg",
    link: "/aeration-control",
  },
  {
    title: "Aeration & Oxygen Control",
    image:
      "/images/pond.png",
    link: "/aeration-control",
  },
  {
    title: "Camera System",
    image:
      "/images/20230224_110540.jpg",
    link: "/camera-system",
  },
  // Add more cards as needed
];

const HeadingContainer = styled.div`
  // text-align: center;
  padding: 30px 20px ;
  max-width: 900px;
  margin: 0 auto;

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

const Products = () => {
  return (
    // <>
    //   <Navbar />
    //   <div style={{ height: "80px" }} />
    //   <HeadingContainer>
    //     <Title>Our Products</Title>
    //     <Subtitle>
    //       We offer a fully integrated smart device ecosystem for outdoor
    //       environments.
    //     </Subtitle>
    //   </HeadingContainer>
    //   <ScrollSections sections={sections} />
    //   <Cards cards={cards} />
    //   <ContactSection />
    //   <Footer />
    // </>
    <><UnderMaintenance/></>
  );
};

export default Products;
