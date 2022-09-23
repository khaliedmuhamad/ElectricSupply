import React, { useEffect, useState } from "react";
import { About } from "../../components/AboutUs/About";
import { Footer } from "../../components/Footer/Footer";
import { Home } from "../../components/Home/Home";
import { Join } from "../../components/join/Join";
import { Navbar } from "../../components/navbar/Navbar";
import { Projects } from "../../components/OurProjects/Projects";
import { Services } from "../../components/OurServices/Services";
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
      return "EN";
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
    <div className={`landing ${!dark ? "light" : "dark"}`}>
      <Navbar lang={Lang} Setlanguage={seTlang} dark={dark} setDark={setDark} />
      <Home lang={Lang} />
      <Reputation lang={Lang} />
      <About lang={Lang} />
      <Sponsors lang={Lang} />

      <Services lang={Lang} />
      <Join lang={Lang} />
      <Projects lang={Lang} />
      <Subscribe lang={Lang} />
      <Footer lang={Lang} />
    </div>
  );
};
