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
  padding: 50px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
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
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;

  img {
    width: 70px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 40px;
    }
  }
`;

const InfoLabel = styled.h5`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const GridBox = () => {
  return (
    // <Parallax speed={-5}>
      <Container>
        <TopSection>
          <LeftContent>
            Transforming Aquaculture with AI-Driven Automation and Sustainable
            Intelligence
          </LeftContent>

          <Grid>
            <GridItem>
              <Icon>
                <img
                  src="/images/website images and icon-20250524T084126Z-1-001/image 61.png"
                  alt="Icon"
                />
              </Icon>
              <HighlightTitle># END-TO-END FARM AUTOMATION</HighlightTitle>
              Seamlessly manage feeding, aeration, power, and sensor systems all
              from a unified platform.
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
              Leverage real-time data analytics to optimize production and
              reduce risk with precision.
            </GridItem>

            <GridItem>
              <Icon>
                <img
                  src="/images/website images and icon-20250524T084126Z-1-001/image 63.png"
                  alt="Icon"
                />
              </Icon>
              <HighlightTitle>
                # SMART WATER & <br />
                HEALTH MONITORING
              </HighlightTitle>
              Instant insights from real-time water sampling and AI-based
              disease detection keep your farm healthy.
            </GridItem>

            <GridItem>
              <Icon>
                <img
                  src="/images/website images and icon-20250524T084126Z-1-001/image 64.png"
                  alt="Icon"
                />
              </Icon>
              <HighlightTitle>
                # SUSTAINABLE & <br />
                LOW-EMISSION <br />
                OPERATIONS
              </HighlightTitle>
              Built to reduce GHG emissions and resource waste—for a cleaner,
              more profitable future.
            </GridItem>
          </Grid>
        </TopSection>

        <BottomSection>
          <InfoBlock>
            <IconWrapper>
              <img src="/images/website images and icon-20250524T084126Z-1-001/image 65.png" />
            </IconWrapper>
            <InfoLabel>SEGMENT</InfoLabel>
            <InfoText>CleanTech, AgriTech</InfoText>
          </InfoBlock>
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
              <img src="/images/website images and icon-20250524T084126Z-1-001/image 66.png" />
            </IconWrapper>
            <InfoLabel>INTELLECTUAL PROPERTY</InfoLabel>
            <InfoText>42 Patents Filed, 28 Pre-Granted, 9 Published</InfoText>
          </InfoBlock>
        </BottomSection>
      </Container>
    // </Parallax>
  );
};

export default GridBox;
