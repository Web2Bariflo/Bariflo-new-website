import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Container = styled.div`
  font-family: sans-serif;
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  color: #00bcd4;
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto 50px;
  color: #444;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 320px;
  height: 420px;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 188, 212, 0.2);
  }

  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  background-color: #f2f2f2;
`;

const Name = styled.h3`
  margin: 10px 0 5px;
  font-size: 20px;
  color: #00bcd4;
`;

const Role = styled.p`
  font-size: 15px;
  color: #333;
`;

const IconBar = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 16px;

  svg {
    color: #555;
    transition: all 0.3s ease;

    &:hover {
      color: #00bcd4;
      transform: scale(1.2);
    }
  }
`;

const ManagementTeam = () => {
  const team = [
    {
      name: "Mrutyunjaya Sahu",
      title: "President and Chief Executive Officer",
      role: "CEO",
      image: "/images/ceo.png",
    },
    {
      name: "Sheetal Priyadarshini",
      title: "CFO & HR",
      role: "CFO & HR",
      image: "/images/cfo.png",
    },
    {
      name: "Salomi Dabral",
      title: "Chief Operating Officer",
      role: "COO",
      image: "/images/coo.png",
    },
    {
      name: "Michelle Dunlop",
      title: "Chief Operating Officer",
      role: "COO",
      image: "/images/michele.jpg",
    },
    {
      name: "Sunit Rout",
      title: "Chief Administrative Officer",
      role: "CAO",
      image: "/images/sunit.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container>
          <Title>Meet The Team</Title>
          <Subtitle>
            Proven leadership in innovation, strategy, and aquaculture
            technology transformation.
          </Subtitle>
          <GridWrapper>
            <Row>
              {team.slice(0, 3).map((member, index) => (
                <Card key={index}>
                  <Image src={member.image} alt={member.name} />
                  <CardContent>
                    <Name>
                      {member.name} ({member.role})
                    </Name>
                    <Role>{member.title}</Role>
                    <IconBar>
                      <FaLinkedin size={20} />
                      <IoIosArrowDown size={20} />
                    </IconBar>
                  </CardContent>
                </Card>
              ))}
            </Row>
            <Row>
              {team.slice(3).map((member, index) => (
                <Card key={index + 3}>
                  <Image src={member.image} alt={member.name} />
                  <CardContent>
                    <Name>
                      {member.name} ({member.role})
                    </Name>
                    <Role>{member.title}</Role>
                    <IconBar>
                      <FaLinkedin size={20} />
                      <IoIosArrowDown size={20} />
                    </IconBar>
                  </CardContent>
                </Card>
              ))}
            </Row>
          </GridWrapper>
        </Container>
      </motion.div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default ManagementTeam;
