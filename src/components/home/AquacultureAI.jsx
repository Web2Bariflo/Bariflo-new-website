import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background-color: white;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1100px;
  width: 100%;
  gap: 20px;
  margin-bottom: 40px;
`;

const LeftText = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #007c9e;
  font-weight: 500;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 5px solid #ccc;
`;

const GridItem = styled.div`
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  font-size: 14px;

  &:nth-child(2),
  &:nth-child(4) {
    border-right: none;
  }

  &:nth-child(3),
  &:nth-child(4) {
    border-bottom: none;
  }

  h3 {
    color: #007c9e;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    color: #333;
    line-height: 1.4;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 5px;
  background-color: #ccc;
  margin: 40px 0;
`;

const FooterRow = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
`;

const FooterItem = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 10px;

  .label {
    font-size: 14px;
    font-weight: 600;
    color: #444;
    margin-bottom: 6px;
  }

  .desc {
    font-size: 13px;
    color: #666;
  }
`;

const AquacultureAI = () => {
  return (
    <Wrapper>
      <ContentRow>
        <LeftText>
          Transforming Aquaculture with AI-Driven Automation and Sustainable Intelligence
        </LeftText>

        <GridWrapper>
          <GridItem>
            <h3># END-TO-END FARM AUTOMATION</h3>
            <p>Seamlessly manage feeding, aeration, power, and sensor systems — all from a unified platform.</p>
          </GridItem>
          <GridItem>
            <h3># AI-POWERED DECISION MAKING</h3>
            <p>Leverage real-time data analytics to optimize production and reduce risk with precision.</p>
          </GridItem>
          <GridItem>
            <h3>#SMART WATER & HEALTH MONITORING</h3>
            <p>Instant insights from real-time water sampling and AI-based disease detection keep your farm healthy.</p>
          </GridItem>
          <GridItem>
            <h3># SUSTAINABLE & LOW-EMISSION OPERATIONS</h3>
            <p>Built to reduce GHG emissions and resource waste — for a cleaner, more profitable future.</p>
          </GridItem>
        </GridWrapper>
      </ContentRow>

      <Divider />

      <FooterRow>
        <FooterItem>
          <div className="label">SEGMENT</div>
          <div className="desc">CleanTech, AgriTech</div>
        </FooterItem>
        <FooterItem>
          <div className="label">TECHNOLOGY</div>
          <div className="desc">Software/AI/Blockchain/IoT + Hardware (Robotics, Manufacturing)</div>
        </FooterItem>
        <FooterItem>
          <div className="label">INTELLECTUAL PROPERTY</div>
          <div className="desc">42 Patents Filed, 28 Are Granted, 9 Published</div>
        </FooterItem>
      </FooterRow>
    </Wrapper>
  );
};

export default AquacultureAI;
