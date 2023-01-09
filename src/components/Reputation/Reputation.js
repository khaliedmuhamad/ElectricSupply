import React from "react";
import "./Reputation.css";
import { multilang } from "../functions/multilingual";
import { reputationsvg } from "../../assets/images/svgGraphics";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
const Reputation = (props) => {
  let Language = props.lang;
  const ReputationLang = multilang(Language).reputation;
  const projectLang = multilang(Language).projects.info.paragraph[1];
  const reputationData = [
    {
      icon: reputationsvg.eng,
      head: ReputationLang.head[0],
      paragraph: ReputationLang.paragraph[0],
    },
    {
      icon: <RiCustomerServiceFill />,
      head: ReputationLang.head[1],
      paragraph: ReputationLang.paragraph[1],
    },
    {
      icon: <MdSecurity />,
      head: ReputationLang.head[2],
      paragraph: ReputationLang.paragraph[2],
    },
    {
      icon: reputationsvg.eng,
      head: ReputationLang.head[0],
      paragraph: ReputationLang.paragraph[0],
    },
  ];
  return (
    <section className="reputation py-5 " id="reputation">
      <div className="bentagon-svg">
        <svg
          width="720"
          height="816"
          viewBox="0 0 720 816"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M337 6.27905C351.232 -1.93806 368.768 -1.93805 383 6.27906L696.401 187.221C710.633 195.438 719.401 210.624 719.401 227.058V588.942C719.401 605.376 710.633 620.562 696.401 628.779L383 809.721C368.768 817.938 351.232 817.938 337 809.721L23.5994 628.779C9.367 620.562 0.599457 605.376 0.599457 588.942V227.058C0.599457 210.624 9.36701 195.438 23.5995 187.221L337 6.27905Z"
            fill="url(#paint0_linear_221_35)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_221_35"
              x1="360"
              y1="-7"
              x2="360"
              y2="823"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.349028" stopColor="#8D71E8" />
              <stop offset="0.817786" stopColor="#6B82DF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="d-flex flex-sm-row-reverse flex-column">
          <div className="right-info col-sm-6 col-12">
            <div className="p-4">
              <h2 className="head-section text-center h2">
                {ReputationLang.headfirst}
              </h2>
              <p className="mt-5 text-lg text-bold">{projectLang}</p>
              <p className="mt-5 text-lg text-bold">{projectLang}</p>
              <p className="mt-5 text-lg text-bold">{projectLang}</p>
            </div>
          </div>
          <div className="left-cards col-sm-6 col-12">
            <div className="d-flex flex-wrap justify-content-start align-items-center mt-3  ">
              {!reputationData
                ? ""
                : reputationData.map((el, n) => {
                    return (
                      <div
                        className="col-12 col-lg-6 p-sm-1 p-2 text-center"
                        key={n}
                      >
                        <div className="reputation-card px-1 py-1 py-md-3 d-flex flex-md-column flex-row align-items-center justify-content-center ">
                          <div className="reputation-card-icon col-md-12 col-4 text-sm-sm">
                            {el.icon}
                          </div>
                          <div className="reputation-card-head mx-md-0 mx-2 col-md-12 col-4 ">
                            {el.head}
                          </div>
                          <div className="reputation-card-paragraph col-md-12 col-4 d-none d-md-block ">
                            {el.paragraph}
                          </div>
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
export default Reputation;
