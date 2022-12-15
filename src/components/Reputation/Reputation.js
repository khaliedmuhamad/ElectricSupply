import React from "react";
import "./Reputation.css";
import { multilang } from "../functions/multilingual";
import { reputationsvg } from "../../assets/images/svgGraphics";

const Reputation = (props) => {
  let Language = props.lang;
  const ReputationLang =  multilang(Language).reputation;
  const reputationData = [
    {
      icon: reputationsvg.eng,
      head: ReputationLang.head[0],
      paragraph: ReputationLang.paragraph[0],
    },
    {
      icon: reputationsvg.call,
      head: ReputationLang.head[1],
      paragraph: ReputationLang.paragraph[1],
    },
    {
      icon: reputationsvg.secure,
      head: ReputationLang.head[2],
      paragraph: ReputationLang.paragraph[2],
    },
  ];
  return (
    <section className="reputation py-5 " id="reputation" >
      <div className="container">
        <h2 className="head-section text-center">{ReputationLang.headfirst}</h2>
        <div className="d-flex mt-3 flex-md-row flex-column">
          {!reputationData
            ? ""
            : reputationData.map((el, n) => {
                return (
                  <div className="col-md-4 col-12 p-2 text-center" key={n}>
                    <div className="reputation-card px-2 py-2 py-md-5 d-flex flex-md-column flex-row align-items-center justify-content-center ">
                      <div className="reputation-card-icon col-md-12 col-4">
                        {el.icon}
                      </div>
                      <div className="reputation-card-head mx-md-0 mx-3 col-md-12 col-4">
                        {el.head}
                      </div>
                      <div className="reputation-card-paragraph col-md-12 col-4">
                        {el.paragraph}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};
export default Reputation;
