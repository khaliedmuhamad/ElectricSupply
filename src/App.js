import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { LandingPage } from "./pages/Landingpage/LandingPage";
import React, { useEffect } from "react";
import { DetailProject } from "./components/DetailProject/DetailProject";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

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
    <BrowserRouter className="App ">
      <Navbar lang={Lang} className='bg-transparent' Setlanguage={seTlang} dark={dark} setDark={setDark} />
      <Routes>
      <Route element={<LandingPage lang={Lang} dark={dark} />} path="/" />
      <Route element={<Login />} path="/Login" />
      <Route element={<Dashboard />} path="/Dashboard" />
      </Routes>
      <Footer lang={Lang} />
    </BrowserRouter>
  );
}

export default App;
