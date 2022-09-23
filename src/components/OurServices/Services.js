import React, { useEffect, useState } from "react";
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
      imgSrc: "https://via.placeholder.com/750",
    },
    {
      head: servicesLangHead[1],
      paragraph: servicesLangPara,
      icon: <FaSolarPanel />,
      imgSrc: "https://via.placeholder.com/750",

    },
    {
      head: servicesLangHead[2],
      paragraph: servicesLangPara,
      icon: <VscBook />,
      imgSrc: "https://via.placeholder.com/750",

    },
    {
      head: servicesLangHead[3],
      paragraph: servicesLangPara,
      icon: <BsLifePreserver />,
      imgSrc: "https://via.placeholder.com/750",

    },
    {
      head: servicesLangHead[0],
      paragraph: servicesLangPara,
      icon: <TbPlugConnected />,
      imgSrc: "https://via.placeholder.com/650",

    },
    {
      head: servicesLangHead[1],
      paragraph: servicesLangPara,
      icon: <FaSolarPanel />,
      imgSrc: "https://via.placeholder.com/550",

    },
    {
      head: servicesLangHead[2],
      paragraph: servicesLangPara,
      icon: <VscBook />,
      imgSrc: "https://via.placeholder.com/1080",

    },
    {
      head: servicesLangHead[3],
      paragraph: servicesLangPara,
      icon: <BsLifePreserver />,
      imgSrc: "https://via.placeholder.com/950",

    },
  ];
  const [bigEl, SetBigEL] = useState({
    head: servicesData[0].head,
    paragraph: servicesData[0].paragraph[0],
    icon: servicesData[0].icon,
    index: 0,
    imgSrc:servicesData[0].imgSrc
  });
  const changeContentBigRect = (e) => {
    SetBigEL({
      head: servicesData[e].head,
      paragraph: servicesData[e].paragraph[e],
      icon: servicesData[e].icon,
      index: e,
      imgSrc:servicesData[e].imgSrc
    });
  };
  const servicesDataLength = servicesData.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (bigEl.index === servicesDataLength) {
        return changeContentBigRect(0);
      } else {
        return changeContentBigRect(bigEl.index + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [bigEl.index,bigEl,servicesDataLength]);

  return (
    <section className="services py-5" id="services">
      <div className="container">
        <h2 className="head-section text-center py-5">{servicesLang.header}</h2>
        <div className="d-flex  flex-md-row-reverse  flex-column ">
          <div className="big-rect col-12 col-md-6 p-2">
            <div className="card-overlay text-center d-flex flex-column justify-content-center align-items-center">
              <div className="services-icon text-center w-50">
              <img
                            src={bigEl.imgSrc}
                            className="card-img-top mb-5 mt-5"
                            alt="card"
                            width={"100%"}

                          />
              </div>
              <h3 className="services-head mt-5">{bigEl.head}</h3>
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
    </section>
  );
};
