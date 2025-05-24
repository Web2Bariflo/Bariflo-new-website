import React from 'react';
import styled from 'styled-components';
import { FaMicrochip, FaCogs, FaFileAlt } from 'react-icons/fa';

const Container = styled.div`
  padding: 60px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 250px;
  color: #00b3e6;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
`;

const Grid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  font-size: 14px;
  color: #333;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const HighlightTitle = styled.h4`
  color: #00b3e6;
  font-size: 16px;
  margin-bottom: 10px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  max-width: 900px;
  width: 100%;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

const InfoLabel = styled.h5`
  font-weight: bold;
  margin-bottom: 6px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;
`;

const GridBox = () => {
  return (
    <Container>
      <TopSection>
        <LeftContent>
          Transforming Aquaculture with AI-Driven Automation and Sustainable Intelligence
        </LeftContent>

        <Grid>
          <GridItem>
            <HighlightTitle># END-TO-END FARM AUTOMATION</HighlightTitle>
            Seamlessly manage feeding, aeration, power, and sensor systems all from a unified platform.
          </GridItem>
          <GridItem>
            <HighlightTitle># AI-POWERED DECISION MAKING</HighlightTitle>
            Leverage real-time data analytics to optimize production and reduce risk with precision.
          </GridItem>
          <GridItem>
            <HighlightTitle>#SMART WATER & HEALTH MONITORING</HighlightTitle>
            Instant insights from real-time water sampling and AI-based disease detection keep your farm healthy.
          </GridItem>
          <GridItem>
            <HighlightTitle># SUSTAINABLE & LOW-EMISSION OPERATIONS</HighlightTitle>
            Built to reduce GHG emissions and resource waste—for a cleaner, more profitable future.
          </GridItem>
        </Grid>
      </TopSection>

      <BottomSection>
        <InfoBlock>
          <IconWrapper><FaMicrochip /></IconWrapper>
          <InfoLabel>SEGMENT</InfoLabel>
          <InfoText>CleanTech, AgriTech</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconWrapper><FaCogs /></IconWrapper>
          <InfoLabel>TECHNOLOGY</InfoLabel>
          <InfoText>Software/AI/Blockchain/IoT + Hardware (Robotics, Manufacturing)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconWrapper><FaFileAlt /></IconWrapper>
          <InfoLabel>INTELLECTUAL PROPERTY</InfoLabel>
          <InfoText>42 Patents Filed, 28 Pre-Granted, 9 Published</InfoText>
        </InfoBlock>
      </BottomSection>
    </Container>
  );
};

export default GridBox;
