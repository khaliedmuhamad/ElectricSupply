import React, { useState } from 'react'
import { About } from '../../components/AboutUs/About'
import { Home } from '../../components/Home/Home'
import { Join } from '../../components/join/Join'
import { Navbar } from '../../components/navbar/Navbar'
import { Projects } from '../../components/OurProjects/Projects'
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
    <Join lang={Lang} />
    <Projects  lang={Lang} />
    </>
  )
}
