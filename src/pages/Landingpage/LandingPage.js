import React, { useState } from 'react'
import { About } from '../../components/AboutUs/About'
import { Home } from '../../components/Home/Home'
import { Navbar } from '../../components/navbar/Navbar'
import { Services } from '../../components/OurServices/Services'
import Reputation from '../../components/Reputation/Reputation'
import { Sponsors } from '../../components/sponsors/Sponsors'
import "./LandingPage.css"
export const LandingPage = () => {
  
  const [Lang, seTlang] = useState("EN")
  return (
    <>
    <Navbar lang={Lang} Setlanguage={seTlang} />
    <Home lang={Lang} />
    <Reputation lang={Lang} />
    <About lang={Lang} />
    <Sponsors lang={Lang} />
    
    <Services lang={Lang} />
    </>
  )
}
