import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser"; // <-- added
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #00bcd4;
  padding: 2rem;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #444;
  line-height: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #f9f9f9;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  > * {
    flex: 1;
    min-width: 48%;
  }
`;

const Input = styled.input`
  padding: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.2s ease;

  &:hover,
  &:focus {
    border-color: #00bcd4;
    outline: none;
  }
`;
const Select = styled.select`
  padding: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  transition: border 0.2s ease;

  &:hover,
  &:focus {
    border-color: #00bcd4;
    outline: none;
  }
`;


const TextArea = styled.textarea`
  padding: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 140px;
  transition: border 0.2s ease;

  &:hover,
  &:focus {
    border-color: #00bcd4;
    outline: none;
  }
`;



const Button = styled.button`
  margin-top: 16px;
  padding: 14px;
  background-color: #f7931e;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 120px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e67e00;
    transform: translateY(-2px);
  }
`;
const InfoSection = styled.div`
  margin-top: 80px;
  background: #fff;
  padding: 40px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;

const MapContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const MapFrame = styled.iframe`
  border: none;
  width: 100%;
  max-width: 500px;
  height: 320px;
  border-radius: 8px;
`;

const ContactBox = styled.div`
  max-width: 320px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
`;

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    region: "",
    message: "",
    news: false,
  });

  const [status, setStatus] = useState(""); // <-- added

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const serviceId = "service_0kam8of";
    const templateId = "template_viarjag";
    const publicKey = "ikEUPRWNbLT4V_Mel";

    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      company: form.company,
      phone: form.phone,
      interest: form.interest,
      region: form.region,
      message: form.message,
      news: form.news ? "Yes" : "No",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            interest: "",
            region: "",
            message: "",
            news: false,
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />
      <Container>
        <Title>Contact Us</Title>
        <Subtitle>
          Contact Us Today To See How We Can
          Help With Your Aquaculture Project.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
            />
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              required
            />
          </Row>
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            required
          />
          <Row>
            <Input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company*"
              required
            />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
            />
          </Row>
          <Select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
          >
            <option value="">Interested IN*</option>
            <option value="Aquaculture">Aquaculture</option>
            <option value="Fish Tracking">Fish Tracking</option>
          </Select>
          <Select
            name="region"
            value={form.region}
            onChange={handleChange}
            required
          >
            <option value="">Region*</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </Select>
          <TextArea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Messages*"
            required
          />
          
          <Button type="submit">Submit</Button>
          {status && <p>{status}</p>}
        </Form>

        {/* Info section remains the same */}
        <InfoSection>
          <Title>Give Us A Ring</Title>
          <MapContactWrapper>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.4008230507656!2d85.81638946950348!3d20.352373998973717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091e5c729e6b%3A0xe37c1e8a8c0e7f!2sBariflo%20Cybernetics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1689335403612!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></MapFrame>
            <ContactBox>
              <h4>
                <strong>Bariflo Cybernetics - HQ</strong>
              </h4>
              <p>
                207 Second Floor Kiit TBI
                <br />
                Campus 11,
                <br />
                Patia, Bhubaneswar,
                <br />
                Odisha
              </p>
              <h4>
                <strong>Odisha - HQ</strong>
              </h4>
              <p>
                207, TBI2, KIIT TBI,
                <br />
                Campus 11,
                <br />
                Patia Estate,
                <br />
                Bhubaneswar, Odisha - 751024
              </p>
              <p>
                <strong>Get In Touch</strong>
              </p>
              <p>Mobile: +91 9777171033</p>
              <p>Email: Care@Bariflolabs.Com</p>
            </ContactBox>
          </MapContactWrapper>
        </InfoSection>
      </Container>
      <Footer />
    </>
  );
}
