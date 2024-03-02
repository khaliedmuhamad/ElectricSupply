import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { LandingPage } from "./pages/Landingpage/LandingPage";
import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Imprint } from "./pages/Imprint/Imprint";
import { DataProtection } from "./pages/Imprint/DataProtection";

function App() {
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
    <BrowserRouter className={`App ${dark ?  'dark' : ""}`}>
      <Navbar lang={Lang} Setlanguage={seTlang} dark={dark} setDark={setDark} />
      <Routes>
      <Route element={<LandingPage lang={Lang} dark={dark} />} path="/" />
      <Route element={<Imprint lang={Lang} dark={dark} />} path="/imprint" />
      <Route element={<DataProtection lang={Lang} dark={dark} />} path="/dataProtection" />
      </Routes>
      <Footer lang={Lang} />
    </BrowserRouter>
  );
}

export default App;
