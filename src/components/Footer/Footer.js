import React from "react";
import  footerBrand  from "../../assets/images/logoDark.png";
import { multilang } from "../../components/functions/multilingual";
import { ImFacebook2, ImLinkedin, ImPaypal, ImTwitter } from "react-icons/im";
import Anochor from "../functions/Anochor";
import "./Footer.css";
import { Map } from "../map/Map";
import SendMail from "../functions/SendMail";
export const Footer = (props) => {
  let Language = props.lang;
  let footerLang = multilang(Language).footer;

  const socialData = [
    <ImFacebook2 />,
    <ImTwitter />,
    <ImLinkedin />,
    <ImPaypal />,
  ];
  return (
    <footer className="footer bg-sm-none" id="contact">
      <div className="conatent py-5 w-sm-100">
        <div className="container py-5">
          <div className="d-flex justify-content-start align-items-center flex-column flex-md-row  ">
            <div className="left  col-md-4 col-12">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="brand-footer text-center  w-100 ">
 
                  <img src={footerBrand} width={180} alt="" />
    
                </div>
                <ul className="social-footer d-flex">
                  {!socialData
                    ? ""
                    : socialData.map((el, n) => {
                        return (
                          <li
                            key={`${el}+${n}`}
                            className="col social-footer-items mx-3 list-unstyled text-light"
                          >
                            <Anochor
                              className=""
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {el}
                            </Anochor>
                          </li>
                        );
                      })}
                </ul>
              </div>
            </div>
            <div className="right  col-md-6 col-12">
              <div className="right-overlay  px-md-5 px-0">
                <div className="top">
                  <div className="d-flex">
                    <div className="col-6">
                      <div className="p-2">
                        <h4 className="right-top-head">
                          {footerLang.top.head[0]}
                        </h4>
                        <p className="right-top-paragraph">
                          {footerLang.top.paragraph1[0]}
                        </p>
                        <p className="right-top-paragraph">
                          {footerLang.top.paragraph2[0]}
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2">
                        <h4 className="right-top-head">
                          {footerLang.top.head[1]}
                        </h4>
                        <p className="right-top-paragraph">
                          {footerLang.top.paragraph1[1]}
                        </p>
                        <p className="right-top-paragraph">
                          {footerLang.top.paragraph2[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <SendMail lang={Language} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map d-block d-none d-sm-block">
          <Map />
        </div>
      </div>
    </footer>
  );
};
