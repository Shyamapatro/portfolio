import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const data={
    name:"Shyama ",
    image:"./images/remote-team.svg"
  }
  return <HeroSection {...data}/>
}

export default Home