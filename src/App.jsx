import React, { useCallback } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {GlobalStyle} from './GlobalStyle'
import {ThemeProvider} from 'styled-components'

import GoToTop from "./components/GoToTop";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";





const App = () => {


  const theme = {
    color:{
      heading:"",
      text:"",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:'#8490ff',
      footer_bg:"#0a1435",
      btn:"blue",
      border:"sky",
      hr:"#ffff",
      gradient:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      shadow:"5px 5px 5px rgb(68 68 68 / 0.6)",
      showSupported:"#8490ff"
    },
    media:
    {
      mobile:"768px",
      tab:"998px",
      
    }
  }
  return (
<>
<ThemeProvider theme={theme}>
<GlobalStyle/>
<GoToTop />
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about-us" element={<About/>}></Route>
  <Route path="/contact-us" element={<Contact/>}></Route>
  <Route path="/services" element={<Services/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>

</ThemeProvider>
</>
  )
}

export default App