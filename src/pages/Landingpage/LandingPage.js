import React, { useEffect, useState } from "react";
import { About } from "../../components/AboutUs/About";
import { Footer } from "../../components/Footer/Footer";
import { Home } from "../../components/Home/Home";
import { Join } from "../../components/join/Join";
import { Navbar } from "../../components/navbar/Navbar";
import { Projects } from "../../components/OurProjects/Projects";
import { Services } from "../../components/OurServices/Services";
import OurTeam from "../../components/OurTeam/OurTeam";
import Reputation from "../../components/Reputation/Reputation";
import { Sponsors } from "../../components/sponsors/Sponsors";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import "./LandingPage.css";
export const LandingPage = () => {
  const preferDarkMode = () => {
    if (!window.matchMedia("(prefers-color-scheme: dark)")) {
      return;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };

  //intial get from saved LoaclStorage
  const savedLocalStorage = () => {
    const isExistInStorage = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPreferDark = preferDarkMode();
    if (isExistInStorage) {
      return savedMode;
    } else if (userPreferDark) {
      return true;
    } else {
      return false;
    }
  };
  //intial get from saved LoaclStorage
  const savedLocalStorageLanguage = () => {
    const isExistInStorage = "language" in localStorage;
    const savedLanguage = JSON.parse(localStorage.getItem("language"));
    if (isExistInStorage) {
      return savedLanguage;
    } else {
      return "DE";
    }
  };

  //dark state
  const [dark, setDark] = useState(savedLocalStorage());
  //language
  const [Lang, seTlang] = useState(savedLocalStorageLanguage());

  // Set LocalStorage darkness ✔
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(Lang));
  }, [Lang]);

  return (
    <div className={`landing ${!dark ? "light" : "dark"} page`}>
<div class="custom-shape-divider-top-1664327992">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

      <Navbar lang={Lang} Setlanguage={seTlang} dark={dark} setDark={setDark} />
      <Home lang={Lang} />

      <Reputation lang={Lang} />
      <About lang={Lang} />
      <Sponsors lang={Lang} />
      <OurTeam lang={Lang} />
      <Services lang={Lang} />
      <Join lang={Lang} />
      <Projects lang={Lang} />
      <Subscribe lang={Lang} />


      <Footer lang={Lang} />
    </div>
  );
};
