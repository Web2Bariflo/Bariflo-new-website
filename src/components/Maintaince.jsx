import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f7f7;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #16b8b8;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Wrench = styled.div`
  font-size: 4rem;
  color: #16b8b8;
  margin-bottom: 1rem;
`;

export default function UnderMaintenance() {
  return (
    <Container>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 20 }}
        transition={{ yoyo: Infinity, duration: 0.5 }}
      >
        <Wrench>🔧</Wrench>
      </motion.div>
      <Heading>Page Under Maintenance</Heading>
      <SubText>We're working hard to bring this page back online. Please check back later.</SubText>
    </Container>
  );
}
