import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Container = styled.div`
  font-family: sans-serif;
  padding: 40px 20px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  color: #00bcd4;
  font-size: 2rem;
  padding: 2rem;
`;

const Subtitle = styled.p`
  margin: 10px auto 30px;
  font-size: 16px;
  max-width: 600px;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 280px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  background-color: #e5e5e5;
`;

const Name = styled.h3`
  margin: 10px 0 5px;
  font-size: 18px;
  color: #333;
`;

const Role = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const IconBar = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
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
      name: "Salomi Nautiyal",
      title: "COO",
      role: "COO",
      image: "/images/coo.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <Container>
        <Title>Meet The Team</Title>
        <Subtitle>
          Proven management team in commercializing technology, global
          management, and services.
        </Subtitle>
        <TeamGrid>
          {team.map((member, index) => (
            <Card key={index}>
              <Image src={member.image} alt={member.name} />
              <CardContent>
                <Name>{member.name} ({member.role})</Name>
                <Role>{member.title}</Role>
                <IconBar>
                  <FaLinkedin size={20} />
                  <IoIosArrowDown size={20} />
                </IconBar>
              </CardContent>
            </Card>
          ))}
        </TeamGrid>
      </Container>
      <ContactSection />
      <Footer />
    </>
  );
};

export default ManagementTeam;
