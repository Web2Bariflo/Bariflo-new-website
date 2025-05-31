import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  background: url("/images/77707896-3e5e-422e-bf3b-ed36d4298ea0 7.png") repeat;
  animation: scrollBackground 60s linear infinite;
  backdrop-filter: blur(10px);
  margin: 50px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: url("/images/77707896-3e5e-422e-bf3b-ed36d4298ea0 7.png") repeat;
    opacity: 0.1;
    animation: scrollBackground 120s linear infinite;
  }

  @keyframes scrollBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 1000px 0;
    }
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
  padding: 25px;
  margin-bottom: 60px;
  border-bottom: 3px solid #4c4c4c;
  border-right: 3px solid #4c4c4c;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 250px;
  color: #00bcd4;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  border-right: 3px solid #4c4c4c;

  @media (max-width: 768px) {
    font-size: 18px;
    border-right: none;
  }
`;

const Grid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack */
  }
`;

const GridItem = styled.div`
  position: relative;
  padding: 20px;
  font-size: 14px;
  color: #333;
  background: #fff;
  border-right: 3px solid #4c4c4c;
  border-bottom: 3px solid #4c4c4c;

  &:nth-child(2),
  &:nth-child(4) {
    border-right: none;
  }

  &:nth-child(3),
  &:nth-child(4) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    border-right: none;
    border-bottom: 2px solid #ccc;

    &:nth-child(n) {
      border-right: none;
      border-bottom: 2px solid #ccc;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const HighlightTitle = styled.h4`
  color: #00bcd4;
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
  width: 60%;
  gap: 10rem;

  @media (max-width: 768px) {
    width: 100%;
    gap: 2rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 6rem;
  height: 2.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 2rem;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;


const InfoLabel = styled.h5`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: #00bcd4;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 13px;
  }
      &:hover {
    color: #00bcd4;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 160px;
  flex: 1;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:hover ${IconWrapper} {
    transform: scale(1.15);
    box-shadow: 0 8px 20px rgba(0, 188, 212, 0.3);
  }

  &:hover ${InfoLabel},
  &:hover ${InfoText} {
    color: #00bcd4;
  }
`;


const GridBox = () => {
  return (
    // <Parallax speed={-5}>
    <Container>
      <TopSection>
        <LeftContent>
          Transforming Aquaculture through Robotics, AI, and IoT-Driven
          Automation for Sustainable Farming
        </LeftContent>

        <Grid>
          <GridItem>
            <Icon>
              <img
                src="/images/website images and icon-20250524T084126Z-1-001/image 61.png"
                alt="Icon"
              />
            </Icon>
            <HighlightTitle>
              # END-TO-END <br /> PROCESSING <br/>AUTOMATION
            </HighlightTitle>
            Hyperspectral imaging–based sorting automation in peeling to
            packaging.
          </GridItem>
          <GridItem>
            <Icon>
              <img
                src="/images/website images and icon-20250524T084126Z-1-001/image 62.png"
                alt="Icon"
              />
            </Icon>
            <HighlightTitle>
              # AI-POWERED <br />
              DECISION MAKING
            </HighlightTitle>
            Leverage real-time data analytics to optimize production and reduce
            risk with precision.
          </GridItem>

          <GridItem>
            <Icon>
              <img
                src="/images/website images and icon-20250524T084126Z-1-001/image 63.png"
                alt="Icon"
              />
            </Icon>
            <HighlightTitle>
              # INTELLIGENCE FROM <br />
              FARM TO PROCESSING
            </HighlightTitle>
            Track vehicles, farm produce logistics, and inventory in real time
            for seamless farm-to-processing operations.
          </GridItem>

          <GridItem>
            <Icon>
              <img
                src="/images/website images and icon-20250524T084126Z-1-001/image 64.png"
                alt="Icon"
              />
            </Icon>
            <HighlightTitle>
              # CARBON & BLUE
              <br />
              CREDIT GENERATION
            </HighlightTitle>
            Enable low-emission operations that contribute to carbon and blue
            credit markets.
          </GridItem>
        </Grid>
      </TopSection>

      <BottomSection>
                <InfoBlock>
          <IconWrapper>
            <img src="/images/website images and icon-20250524T084126Z-1-001/image.png" />
          </IconWrapper>
          <InfoLabel>TECHNOLOGY</InfoLabel>
          <InfoText>
            Software/AI/Blockchain/IoT + Hardware <br />
            (Robotics, Manufacturing)
          </InfoText>
        </InfoBlock>

        <InfoBlock>
          <IconWrapper>
            <img src="/images/website images and icon-20250524T084126Z-1-001/image 65.png" />
          </IconWrapper>
          <InfoLabel>SEGMENT</InfoLabel>
          <InfoText>CleanTech, AgriTech</InfoText>
        </InfoBlock>

        <InfoBlock>
          <IconWrapper>
            <img src="/images/website images and icon-20250524T084126Z-1-001/image 66.png" />
          </IconWrapper>
          <InfoLabel>INTELLECTUAL PROPERTY</InfoLabel>
          <InfoText>42 Patents Filed, 28 Granted,<br/> 14 Published</InfoText>
        </InfoBlock>
      </BottomSection>
    </Container>
    // </Parallax>
  );
};

export default GridBox;
