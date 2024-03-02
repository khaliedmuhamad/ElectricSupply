import React, { useEffect, useState } from "react";
import { About } from "../../components/AboutUs/About";
import { Footer } from "../../components/Footer/Footer";
import { Getdata } from "../../components/functions/Getdata";
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
import { Wtswidget } from "../../components/wa-widget/Wtswidget";
import { multilang } from "../../components/functions/multilingual";
export const LandingPage = (props) => {
  let Lang = props.lang;
  let dark = props.dark;

  return (
    <div className={`landing ${!dark ? "light" : "dark"} page`}>
      <div className="wave-top">

      <svg width="882" height="961" viewBox="0 0 882 961" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M387.607 53.8719C420.38 34.8968 460.787 34.8475 493.607 53.7425L768.963 212.271C801.782 231.166 822.028 266.135 822.075 304.005L822.463 621.735C822.509 659.605 802.348 694.623 769.575 713.598L494.607 872.799C461.833 891.774 421.426 891.823 388.607 872.928L113.251 714.399C80.4315 695.504 60.1853 660.536 60.1391 622.665L59.7512 304.936C59.705 267.066 79.8657 232.048 112.639 213.073L387.607 53.8719Z" fill="url(#paint0_linear_225_29)"/>
<g filter="url(#filter0_f_225_29)">
<path d="M537.442 157.511C573.172 182.655 583.258 231.211 560.5 268.505L494.542 376.591C439.021 467.573 325.873 505.097 226.989 465.321L164.113 440.029C124.856 424.238 95.6301 390.475 85.627 349.361C73.0978 297.863 92.797 243.886 135.552 212.564L161.408 193.622L263.183 138.632C335.942 99.3207 423.433 98.5341 496.887 136.531L537.442 157.511Z" fill="white" fillOpacity="0.05"/>
</g>
<g filter="url(#filter1_f_225_29)">
<path d="M793.834 522.569C809.385 559.056 811.598 599.993 800.17 637.974C789.718 672.711 768.403 703.339 739.41 725.139L735.833 727.828C728.02 733.703 719.751 738.946 711.104 743.506L608.17 797.796L533.194 839.689C491.327 863.081 442.411 870.536 395.477 860.677L379.276 857.274C370.837 855.502 362.707 852.49 355.15 848.336C300.287 818.184 293.992 741.818 343.177 703.09L486.225 590.454L627.831 484.128C683.1 442.628 762.432 461 793.834 522.569Z" fill="white" fillOpacity="0.05"/>
</g>
<defs>
<filter id="filter0_f_225_29" x="77.9036" y="104.581" width="498.741" height="380.523" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_225_29"/>
</filter>
<filter id="filter1_f_225_29" x="305.846" y="457.804" width="505.527" height="411.116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_225_29"/>
</filter>
<linearGradient id="paint0_linear_225_29" x1="61" y1="632" x2="828" y2="529" gradientUnits="userSpaceOnUse">
<stop offset="0.429659" stopColor="#8D71E8"/>
<stop offset="0.878584" stopColor="#6B82DF"/>
</linearGradient>
</defs>
</svg>



      </div>
      <div className="wa">
                <Wtswidget /> 
      </div>
      <div className="zzzz">


      <Home lang={Lang} />
      <Reputation lang={Lang} />
      <div id='about'>
      <About lang={Lang} />
      </div>

      <Sponsors lang={Lang} />
      <Services lang={Lang} />
      <Subscribe lang={Lang} />
      <Opinions lang={Lang} />
      <Join lang={Lang} />
    </div>
    </div>
  );
};
