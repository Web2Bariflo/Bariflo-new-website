import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Animation for right-side panel card
const popUp = keyframes`
  0% {
    transform: scale(0.97);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftGrid = styled.div`
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background-color: #f5fafa;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    order: 2;
  }
`;

const RightPanel = styled.div`
  width: 70%;
  padding: 25px;
  overflow-y: auto;
  background-color: #ffffff;
  animation: ${popUp} 0.4s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

const Card = styled.div`
  padding: ${(props) => (props.isLeftGrid ? "15px" : "30px")};
  background-color: transparent;
  border-bottom: ${(props) => (props.isLeftGrid ? "1px solid #e0e0e0" : "none")};
  cursor: pointer;
  height: ${(props) => (props.isLeftGrid ? "140px" : "auto")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isLeftGrid ? "center" : "flex-start")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isLeftGrid ? "#eef6f6" : "transparent")};
  }
`;

const CardName = styled.h3`
  margin-bottom: ${(props) => (props.isLeftGrid ? "10px" : "20px")};
  color: #16b8b8;
  font-size: ${(props) => (props.isLeftGrid ? "18px" : "26px")};
`;

const Detail = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1 1 55%;
`;

const PhotosContainer = styled.div`
  flex: 1 1 40%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  position: relative;
`;

const MotionPhoto = styled(motion.img)`
  border-radius: 10px;
  width: 100%;
  max-width: 260px;
  height: 220px;
  object-fit: cover;
  position: relative;

  &:nth-child(2n) {
    top: -10px;
    left: 10px;
    z-index: 2;
  }

  &:nth-child(3n) {
    top: 15px;
    left: -15px;
    z-index: 1;
  }
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SubTitle = styled.h4`
  margin-bottom: 8px;
  color: #16b8b8;
`;

// Animation variant
const photoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function CaseCard({ cs, onClick, expanded, isLeftGrid }) {
  return (
    <Card
      onClick={() => onClick(cs.id)}
      expanded={expanded}
      isLeftGrid={isLeftGrid}
      aria-expanded={expanded}
    >
      <CardName isLeftGrid={isLeftGrid}>{cs.name}</CardName>
      {!isLeftGrid && (
        <DetailContent>
          <TextSection>
            <Detail>
              <strong>Type of Sector:</strong> {cs.sector}
            </Detail>
            <Detail>
              <strong>Duration:</strong> {cs.duration}
            </Detail>
            <Section>
              <SubTitle>Social Impact</SubTitle>
              <ul>
                {cs.socialImpact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
            <Section>
              <SubTitle>Environmental Impact</SubTitle>
              <ul>
                {cs.environmentalImpact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          </TextSection>
          <PhotosContainer>
            {cs.photos.map((url, i) => (
              <MotionPhoto
                key={i}
                src={url}
                alt={`Case Study ${cs.id} photo ${i + 1}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={photoVariants}
              />
            ))}
          </PhotosContainer>
        </DetailContent>
      )}
    </Card>
  );
}

export default function GridCard({ caseStudies }) {
  const [expandedId, setExpandedId] = useState(null);

  const firstCard = caseStudies[0];
  const restCards = caseStudies.slice(1);

  const selectedCard =
    expandedId === null
      ? firstCard
      : caseStudies.find((cs) => cs.id === expandedId);

  const leftCards =
    expandedId === null
      ? restCards
      : caseStudies.filter((cs) => cs.id !== expandedId);

  const handleCardClick = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Page>
      <Container>
        <LeftGrid>
          {leftCards.map((cs) => (
            <CaseCard
              key={cs.id}
              cs={cs}
              onClick={handleCardClick}
              expanded={false}
              isLeftGrid={true}
            />
          ))}
        </LeftGrid>
        <RightPanel>
          <CaseCard
            cs={selectedCard}
            onClick={handleCardClick}
            expanded={true}
            isLeftGrid={false}
          />
        </RightPanel>
      </Container>
    </Page>
  );
}
