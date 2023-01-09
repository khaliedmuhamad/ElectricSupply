import React, { useEffect, useState } from "react";
import { About } from "../../components/AboutUs/About";
import { Footer } from "../../components/Footer/Footer";
import { Home } from "../../components/Home/Home";
import { Join } from "../../components/join/Join";
import { Navbar } from "../../components/navbar/Navbar";
import Opinions from "../../components/Opinions/Opinions";
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
      <div className="wave-top">
        <svg
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1376.47 -0.0723376C1384.3 -0.0723504 1390.76 6.08218 1391.14 13.9115L1399.9 196.297C1402.34 247.151 1380.29 296.099 1340.57 327.956L773.335 782.972C734.658 813.997 683.721 825.203 635.594 813.274L123.134 686.257C52.2008 668.675 2.38608 605.006 2.38594 531.927L2.38501 10.0079C2.385 4.44076 6.89802 -0.0723509 12.4652 -0.0724668L343.426 -0.0723473L1376.47 -0.0723376Z"
            fill="url(#paint0_linear_220_31)"
          />
          <g filter="url(#filter0_f_220_31)">
            <path
              d="M529.86 -370.299C639.686 -349.09 722.059 -257.51 731.555 -146.058L752.801 103.29C761.756 208.385 703.788 307.794 607.913 351.76L363.146 464.004C263.725 509.596 146.209 485.265 73.064 403.944L-86.583 226.452C-159.728 145.132 -171.517 25.7034 -115.684 -68.3495L21.771 -299.899C75.6125 -390.598 180.585 -437.747 284.148 -417.748L529.86 -370.299Z"
              fill="white"
              fillOpacity="0.05"
            />
          </g>
          <g filter="url(#filter1_f_220_31)">
            <path
              d="M1313.3 179.266C1356.37 188.089 1383.61 230.778 1373.47 273.553V273.553C1370.22 287.261 1363.31 299.831 1353.48 309.924L1313 351.5L948 642.5L856.812 721.687L827.417 746.516C803.56 766.668 768.593 766.488 744.945 746.092V746.092C742.626 744.093 740.455 741.928 738.448 739.615L648.121 635.494C607.013 588.108 616.339 515.488 668.087 480.027V480.027L709.62 446.084C732.974 426.997 752.383 403.54 766.759 377.025L792.858 328.889C799.571 316.509 805.142 303.543 809.503 290.153L837.856 203.095C839.527 197.967 840.768 192.708 841.568 187.374V187.374C849.853 132.141 902.773 95.1603 957.487 106.37L1313.3 179.266Z"
              fill="white"
              fillOpacity="0.05"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_220_31"
              x="-154.713"
              y="-426.297"
              width="912.421"
              height="917.066"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_220_31"
              />
            </filter>
            <filter
              id="filter1_f_220_31"
              x="618.42"
              y="100.364"
              width="761.167"
              height="665.146"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_220_31"
              />
            </filter>
            <linearGradient
              id="paint0_linear_220_31"
              x1="137.379"
              y1="564.016"
              x2="1519.38"
              y2="236.016"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.361755" stopColor="#8D71E8" />
              <stop offset="0.981834" stopColor="#617FF5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navbar lang={Lang} Setlanguage={seTlang} dark={dark} setDark={setDark} />
      <Home lang={Lang} />

      <Reputation lang={Lang} />
      <About lang={Lang} />
      <Sponsors lang={Lang} />

      <Services lang={Lang} />

      <Projects lang={Lang} />
      <Subscribe lang={Lang} />
      <Join lang={Lang} />
      <Opinions lang={Lang} />

      <OurTeam lang={Lang} />
      <Footer lang={Lang} />
    </div>
  );
};
