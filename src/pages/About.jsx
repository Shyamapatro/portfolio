import React from 'react'
import HeroSection from '../components/HeroSection'
const About = () => {
  const data={
    name:"Shyama Patro",
    image:"./images/messaging.svg"
  }
  return <HeroSection {...data}/>
}

export default About