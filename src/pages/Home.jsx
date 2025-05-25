import React from 'react'
import Hero from '../components/home/Hero'
import GridBox from '../components/home/GridBox'
import OurGoal from '../components/home/OurGoal'
import ImageSlider from '../components/home/ImgSlider'
import Collaborators from '../components/home/Collaborators'
import ParallaxMultiImageBanner from '../components/home/ParallaxMultiImageBanner '
import { ParallaxProvider } from 'react-scroll-parallax';


function Home() {
  return (
    <ParallaxProvider>
        <Hero/>
        <GridBox/>
        <OurGoal/>
        <ParallaxMultiImageBanner/>
        <Collaborators/>
    </ParallaxProvider>
  )
}

export default Home