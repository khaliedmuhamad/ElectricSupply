import React, { useEffect, useState } from "react";
import { services } from "../../assets/images/svgGraphics";
import { multilang } from "../functions/multilingual";
import { FaSolarPanel } from "react-icons/fa";
import { BsLifePreserver } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { TbPlugConnected } from "react-icons/tb";
import "./Services.css";
export const Services = (props) => {
  let Language = props.lang;
  const servicesLang = multilang(Language).services;
  const servicesLangHead = multilang(Language).services.info.head;
  const servicesLangPara = multilang(Language).services.info.paragraph;
  const servicesData = [
    {
      head: servicesLangHead[0],
      paragraph: servicesLangPara,
      icon: <TbPlugConnected />,
    },
    {
      head: servicesLangHead[1],
      paragraph: servicesLangPara,
      icon: <FaSolarPanel />,
    },
    {
      head: servicesLangHead[2],
      paragraph: servicesLangPara,
      icon: <VscBook />,
    },
    {
      head: servicesLangHead[3],
      paragraph: servicesLangPara,
      icon: <BsLifePreserver />,
    },
    {
      head: servicesLangHead[0],
      paragraph: servicesLangPara,
      icon: <TbPlugConnected />,
    },
    {
      head: servicesLangHead[1],
      paragraph: servicesLangPara,
      icon: <FaSolarPanel />,
    },
    {
      head: servicesLangHead[2],
      paragraph: servicesLangPara,
      icon: <VscBook />,
    },
    {
      head: servicesLangHead[3],
      paragraph: servicesLangPara,
      icon: <BsLifePreserver />,
    },
  ];
  const [bigEl, SetBigEL] = useState({
    head: servicesData[0].head,
    paragraph: servicesData[0].paragraph[0],
    icon: servicesData[0].icon,
    index: 0,
  });
  const changeContentBigRect = (e) => {
    SetBigEL({
      head: servicesData[e].head,
      paragraph: servicesData[e].paragraph[e],
      icon: servicesData[e].icon,
      index: e,
    });
  };

  useEffect(() => {
    const servicesDataLength = servicesData.length - 1;
    const interval = setInterval(() => {
      if (bigEl.index === servicesDataLength) {
        return changeContentBigRect(0);
      } else {
        return changeContentBigRect(bigEl.index + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [bigEl.index]);

  return (
    <div className="services py-5">
      <div className="container">
        <h2 className="head-section text-center py-5">{servicesLang.header}</h2>
        <div className="d-flex  flex-md-row-reverse  flex-column ">
          <div className="big-rect  col-12   col-md-6 p-2">
            <div className="card-overlay text-center d-flex flex-column justify-content-center align-items-center">
              <div className="services-icon text-center">{bigEl.icon}</div>
              <h3 className="services-head">{bigEl.head}</h3>
              <p className="services-paragraph">{bigEl.paragraph}</p>
            </div>
          </div>
          <div className="small-rects col-md-6 col-12">
            <div className="d-flex flex-wrap">
              {!servicesData
                ? ""
                : servicesData.map((el, n) => {
                    return (
                      <div className="service-card p-2 col-3 col-md-6 " key={n}>
                        <div
                          className={`card-overlay text-center w-100  d-flex flex-column justify-content-center align-items-center ${
                            n === bigEl.index ? "active" : ""
                          }`}
                          onClick={() => {
                            changeContentBigRect(n);
                          }}
                        >
                          <div className="services-icon text-center  ">
                            {el.icon}
                          </div>
                          <h3 className="services-head d-none d-sm-block">
                            {el.head}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
