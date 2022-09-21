import React, { useState } from 'react'
import { Home } from '../../components/Home/Home'
import { Navbar } from '../../components/navbar/Navbar'
import Reputation from '../../components/Reputation/Reputation'
import "./LandingPage.css"
export const LandingPage = () => {
  
  const [Lang, seTlang] = useState("EN")
  return (
    <>
    <Navbar lang={Lang} Setlanguage={seTlang} />
    <Home lang={Lang} />
    <Reputation lang={Lang} />

    </>
  )
}
