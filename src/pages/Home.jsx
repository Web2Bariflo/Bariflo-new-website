// landing home page 


import Hero from "../components/home/Hero";
import GridBox from "../components/home/GridBox";
import OurGoal from "../components/home/OurGoal";
import Collaborators from "../components/home/Collaborators";
import ParallaxMultiImageBanner from "../components/home/ParallaxMultiImageBanner ";
import { ParallaxProvider } from "react-scroll-parallax";
import TeamSection from "../components/home/TeamSection";
import AquacultureAI from "../components/home/AquacultureAI";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <ParallaxProvider>
      <Navbar  textWhite/>
      <Hero />
      <GridBox />
      <AquacultureAI/>
      <OurGoal/>
      <ParallaxMultiImageBanner />
      <TeamSection/>
      <Collaborators />
      <ContactSection />
      <Footer/>
    </ParallaxProvider>
  );
}

export default Home;
