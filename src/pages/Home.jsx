import React from 'react'
import Hero from '../components/home/Hero'
import GridBox from '../components/home/GridBox'
import OurGoal from '../components/home/OurGoal'
import ImageSlider from '../components/home/ImgSlider'
import Collaborators from '../components/home/Collaborators'

function Home() {
  return (
    <>
        <Hero/>
        <GridBox/>
        <OurGoal/>
        <ImageSlider/>
        <Collaborators/>
    </>
  )
}

export default Home