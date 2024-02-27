/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { multilang } from "../functions/multilingual";
import { FaSolarPanel } from "react-icons/fa";
import { BsLifePreserver } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import trainning from "../../assets/images/services/train.jpg";
import aftersales from "../../assets/images/services/aftersales.jpg";
import connect from "../../assets/images/services/connections.jpg";
import solar from "../../assets/images/services/solar.jpg";
import trainning2 from "../../assets/images/services/train2.jpg";
import aftersales2 from "../../assets/images/services/aftersales2.jpg";
import connect2 from "../../assets/images/services/connections2.jpg";
import solar2 from "../../assets/images/services/solar2.jpg";

import { TbPlugConnected } from "react-icons/tb";
import "./Services.css";
import Slider from "react-slick";
export const Services = (props) => {
  let Language = props.lang;
  const servicesLang = multilang(Language).services;
  const servicesData = multilang(Language).services.servicesData;

  // eslint-disable-next-line react-hooks/exhaustive-deps
   const arrServices =[
    servicesData.toSpliced(7,28),
    servicesData.toSpliced(15,20).toSpliced(0,8),
    servicesData.toSpliced(23,1).toSpliced(0,16),
    servicesData.toSpliced(0,28),
   ]

  const [, setIndex] = useState(0);

  const [bigEl, SetBigEL] = useState({
    head: servicesData[0].head,
    paragraph: servicesData[0].paragraph,
    icon: servicesData[0].icon,
    id: 0,
    imgSrc: servicesData[0].imgSrc,
  });

  const servicesDataLength = servicesData.length - 1;

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerPadding: "20px",
    autoPlay: true,
    slidesToShow:1,
    speed: 500,
    afterChange: (e) => setIndex(e),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const changeContentBigRect = (e) => {
    SetBigEL({
      head: servicesData[e].head,
      paragraph: servicesData[e].paragraph,
      icon: servicesData[e].icon,
      id: e,
      imgSrc: servicesData[e].imgSrc,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const interval = setInterval(() => {
      if (bigEl.id === servicesDataLength) {
        return changeContentBigRect(0);
      } else {
        return changeContentBigRect(bigEl.id + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [bigEl.id, bigEl, servicesDataLength, servicesData]);

  return (
    <section className="services py-2" id="services">
      <div className="container">
        <h2 className="head-section text-center py-5">{servicesLang.header}</h2>
        <div className="d-flex  flex-md-row-reverse  flex-column ">
          <div className="big-rect col-12 col-md-6 p-2 pb-0">
            <div className="card-overlay text-center d-flex flex-column justify-content-center align-items-center">
              <div className="services-icon text-center">
                <img
                  src={bigEl.imgSrc}
                  className="card-img-top mb-1 mt-1"
                  alt="card"
                  width="100%"
                />
              </div>
              <div className="big-info">
                <h3 className="services-head mt-2">{bigEl.head}</h3>
                <p className="services-paragraph">{bigEl.paragraph}</p>
              </div>
            </div>
          </div>

          <div className="small-rects col-md-6 col-12">
            
            <div className="d-flex flex-wrap">
              {!servicesData
                ? ""
                : servicesData.map((el, n) => {
                    return (
                      <div className="service-card p-2 col-6 col-md-6 " key={`${el.head}+${n}`}>
                        <div
                          className={`card-overlay text-center w-100  d-flex flex-column justify-content-center align-items-center ${
                            n === bigEl.id ? "active" : ""
                          }`}
                          onClick={() => {
                            changeContentBigRect(n);
                          }}
                        >
                          <h3 className="services-head  d-block">
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
