import styled from "styled-components";
import ScrollSections from "../components/ScrollSections";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Cards from "../components/Cards";
import GridCard from "../components/GridCard";
import UnderMaintenance from "../components/Maintaince";

const caseStudies = [
  {
    id: 1,
    name: "Bhubaneswar",
    sector: "Shrimp Farming",
    duration: "Jan 2022 - Mar 2022 (3 Months)",
    socialImpact: ["Growth of carps by 10%", "Increase reduction by 50%"],
    environmentalImpact: [
      "Reduction of carbon by 50%",
      "Energy reduction by 50%",
    ],
    photos: [
      "https://placeimg.com/200/150/nature",
      "https://placeimg.com/200/150/animals",
    ],
  },
  {
    id: 2,
    name: "Barbil, Odisha",
    sector: "Livelihood",
    duration: "Oct 2022 - Oct 2024 (24 Months)",
    socialImpact: ["Growth of carps by 20%", "Increase in income by 25%"],
    environmentalImpact: [
      "Reduction of carbon by 50%",
      "Energy reduction by 50%",
      "Maintains DO of constant 3.5 to 4.5 ppm",
    ],
    photos: [
      "https://placeimg.com/200/150/people",
      "https://placeimg.com/200/150/tech",
    ],
  },
  {
    id: 3,
    name: "Bhimavaram, Andhra Pradesh",
    sector: "Shrimp Farming",
    duration: "Dec 2021 - Mar 2022 (4 Months)",
    socialImpact: ["Growth of carps by 10%", "Increase in income by 25%"],
    environmentalImpact: [
      "Reduction of carbon by 50%",
      "Energy reduction by 50%",
      "Maintains DO of constant 3.5 to 4.5 ppm",
    ],
    photos: [
      "https://placeimg.com/200/150/arch",
      "https://placeimg.com/200/150/animals",
    ],
  },
  {
    id: 4,
    name: "Ramchandi, Andhra Pradesh",
    sector: "Shrimp Farming",
    duration: "Dec 2021 - Mar 2022 (4 Months)",
    socialImpact: ["Growth of carps by 20%", "Increase in income by 25%"],
    environmentalImpact: [
      "Reduction of carbon by 50%",
      "Energy reduction by 50%",
      "Maintains DO of constant 3.5 to 4.5 ppm",
    ],
    photos: [
      "/images/ramchandi.jpg",
      "/images/ramchandi1.jpg",
      "/images/ramchandi2.jpg"
    ],
  },
  {
    id: 5,
    name: "Chennai",
    sector: "Shrimp Farming",
    duration: "Oct 2019 - Mar 2020 (6 Months)",
    socialImpact: ["Growth of carps by 10%", "Increase in income by 25%"],
    environmentalImpact: [
      "Reduction of carbon by 50%",
      "Energy reduction by 50%",
    ],
    photos: [
      "https://placeimg.com/200/150/tech",
      "https://placeimg.com/200/150/arch",
      "https://placeimg.com/200/150/arch",
      "https://placeimg.com/200/150/arch",
    ],
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
  text-align: center;
  padding: 50px 20px 20px;
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

const CaseStudies = () => {
  return (
    // <>
    //   <Navbar />
    //   <div style={{ height: "80px" }} />
    //   <HeadingContainer>
    //     <Title>CaseStudies</Title>
    //     <Subtitle>
    //       This case study demonstrates the power of sustainable tech solutions
    //       in transforming traditional industries like aquaculture. With
    //       measurable reductions in emissions and energy use — and a boost in
    //       biological growth — Bariflo's approach delivers both environmental and
    //       economic value.
    //     </Subtitle>
    //   </HeadingContainer>
    //   <GridCard caseStudies={caseStudies} />
    //   <Cards cards={cards} />
    //   <ContactSection />
    //   <Footer />
    // </>
    <><UnderMaintenance/></>
  );
};

export default CaseStudies;
