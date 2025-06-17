import React from "react";
import styled from "styled-components";

// 🔹 Styled Components
const Container = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 6px;
  margin-top: 80px;
  //   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #D6F4F8;
`;

const HeaderText = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #003366;
`;

const HeaderSubText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-top: 10px;
`;

const Section = styled.div`
  margin-top: 60px;
  /* padding: 20px; */
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  /* margin-right: 20px; */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  color: #555;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
`;

const ImageBlock = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  height: 300px;
`;

// 🔹 Main Component
const ProductDetails = () => {
  return (
    <>
      <Container>
        {/* Header */}
        <Header>
          <HeaderText>PRECISION FARMING FOR SHRIMP AND CRAB</HeaderText>
          <HeaderSubText>
            At Bariflo Labs, we're redefining aquaculture to enable sustainable practices for crustaceans. Our advanced systems optimize production, ensure water quality, and promote efficiency to meet today's seafood demands while protecting tomorrow's resources.
          </HeaderSubText>
        </Header>

        {/* Precision Aquaculture Section */}
        <Section>
          <Row>
            <TextBlock>
              <SectionTitle>Sustainable Land-Based Aquaculture Systems</SectionTitle>
              <Paragraph>
                Land-based aquaculture provides a highly controlled environment for crustaceans, ensuring optimal growth conditions while minimizing environmental impact. At Bariflo Labs, our Integrated Outdoor Crustacean Farming Management System (IOCFMS) leverages modern practices to improve sustainability and resource efficiency in land-based farming setups.
              </Paragraph>
              <List>
                <li>Minimizes water usage through advanced recirculation systems.</li>
                <li>Reduces dependence on natural water bodies, protecting ecosystems.</li>
                <li>Ensures stable water quality for consistent crustacean growth.</li>
                <li>Supports eco-friendly farming techniques that lower carbon footprints.</li>

              </List>
            </TextBlock>
            <ImageBlock>
              <Image
                src="\images\1747894727976.jpg"
                alt="Precision Aquaculture"
              />
            </ImageBlock>
          </Row>
        </Section>

        {/* Real-World Experience Section */}
        <Section>
          <Row>
            <ImageBlock>
              <Image
                src="\dist\images\web images fro designe\1747895006421.jpg"
                alt="Real-World Experience"
              />
            </ImageBlock>
            <TextBlock>
              <SectionTitle>Enhancing Biodiversity and Habitat Conservation</SectionTitle>
              <Paragraph>
                At Bariflo Labs, the IOCFMS emphasizes biodiversity conservation by replicating natural conditions in controlled land-based setups. This approach protects native ecosystems while promoting ecological balance, ensuring that farming activities contribute to long-term environmental health.
              </Paragraph>
              <List>
                <li>Preserves biodiversity by reducing habitat disruption.</li>
                <li>Promotes ecological balance through sustainable practices.</li>
                <li>Limits the release of pollutants into natural water systems.</li>
                <li>Encourages responsible aquaculture aligned with conservation goals.</li>
              </List>
            </TextBlock>
          </Row>
        </Section>

        {/* LandBased Section */}
        <Section>
          <Row>
            <TextBlock>
              <SectionTitle>Efficiency Through Technological Integration</SectionTitle>
              <Paragraph>
                Land-based aquaculture benefits significantly from the integration of advanced technologies. Bariflo Labs' IOCFMS employs automation and real-time monitoring to ensure optimal conditions for crustacean farming, enhancing operational efficiency while reducing costs and resource usage.
              </Paragraph>
              <List>
                <li>Uses real-time monitoring to manage temperature, salinity, and water quality.</li>
                <li>Automates feeding and aeration for precise resource allocation.</li>
                <li>Improves growth rates by maintaining consistent conditions.</li>
                <li>Reduces operational costs through energy-efficient systems.</li>
              </List>
            </TextBlock>
            <ImageBlock>
              <Image
                src="\dist\images\web images fro designe\Remote sensing 1.png"
                alt="Precision Aquaculture"
              />
            </ImageBlock>
          </Row>
        </Section>


      </Container>
    </>
  );
};

export default ProductDetails;
