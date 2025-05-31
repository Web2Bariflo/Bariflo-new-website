import styled from "styled-components";
import ScrollSections from "../components/ScrollSections";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Cards from "../components/Cards";

const sections = [
  {
    id: 1,
    text: "Crush your marketing goals.",
    image:
      "https://cdn.pixabay.com/photo/2024/06/02/05/53/architecture-8803583_1280.jpg",
  },
  {
    id: 2,
    text: "Build beautiful landing pages fast.",
    image:
      "https://cdn.pixabay.com/photo/2024/02/23/19/37/tufted-duck-8592681_1280.jpg",
  },
  {
    id: 3,
    text: "Optimize your funnel.",
    image:
      "https://cdn.pixabay.com/photo/2023/03/19/19/38/mountain-7863224_1280.jpg",
  },
    {
    id: 4,
    text: "Optimize your funnel.",
    image:
      "https://cdn.pixabay.com/photo/2023/03/19/19/38/mountain-7863224_1280.jpg",
  },  
  {
    id: 5,
    text: "Optimize your funnel.",
    image:
      "https://cdn.pixabay.com/photo/2023/03/19/19/38/mountain-7863224_1280.jpg",
  },
];

const cards = [
  {
    title: "Farm Management",
    image:
      "https://cdn.pixabay.com/photo/2022/01/01/16/29/antelope-6908215_960_720.jpg",
    link: "/farm-management",
  },
  {
    title: "Aeration & Oxygen Control",
    image:
      "https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg",
    link: "/aeration-control",
  },
  {
    title: "Aeration & Oxygen Control",
    image:
      "https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg",
    link: "/aeration-control",
  },
  {
    title: "Camera System",
    image:
      "https://cdn.pixabay.com/photo/2021/10/14/12/32/autumn-6708984_960_720.jpg",
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
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <HeadingContainer>
        <Title>CaseStudies</Title>
        <Subtitle>
          This case study demonstrates the power of sustainable tech solutions
          in transforming traditional industries like aquaculture. With
          measurable reductions in emissions and energy use — and a boost in
          biological growth — Bariflo's approach delivers both environmental and
          economic value.
        </Subtitle>
      </HeadingContainer>
      <ScrollSections sections={sections} />
      <Cards cards={cards} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default CaseStudies;
