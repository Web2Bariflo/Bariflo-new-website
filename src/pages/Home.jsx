import React from 'react'
import Hero from '../components/home/Hero'
import GridBox from '../components/home/GridBox'
import OurGoal from '../components/home/OurGoal'
import ImageSlider from '../components/home/TeamSection'
import Collaborators from '../components/home/Collaborators'
import ParallaxMultiImageBanner from '../components/home/ParallaxMultiImageBanner '
import { ParallaxProvider } from 'react-scroll-parallax';
import TeamSection from '../components/home/TeamSection'
import AquacultureAI from '../components/home/AquacultureAI'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <ParallaxProvider>
        <Navbar/>
        <Hero/>
        <GridBox/>
        <OurGoal/>
        <ParallaxMultiImageBanner/>
        <TeamSection/>
        <Collaborators/>
    </ParallaxProvider>
  )
}

export default Home