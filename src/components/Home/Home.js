import React from "react";
import "./Home.css";
import { multilang } from "../functions/multilingual";
import { homesvgs } from "../../assets/images/svgGraphics";

export const Home = (props) => {
  let Language = props.lang;

  let homeLang = multilang(Language).home;
  return (
    <section className="home">
      <div className="small-thunders">{homesvgs.smallthunders}</div>
      <div className="container h-100">
        <div className="d-flex flex-column flex-sm-row h-100 justify-content-between align-items-center">
          <div className="col-12 col-sm-6 text-center text-sm-start home-left">
            <h3>{homeLang.headfirst}</h3>
            <h1>
              <span className="d-inline"> {homeLang.headsecond[0]}</span>
              <span className="d-inline"> {homeLang.headsecond[1]}</span>
              <span className="d-inline"> {homeLang.headsecond[2]}</span>
            </h1>
            <p>{homeLang.paragraph}</p>
          </div>
          <div className="offset-2 col-5 home-right">
            <div className="w-md-50 ms-auto position-relative">
              <div className="home-card d-flex flex-column">
                <div className="home-card-icon">{homesvgs.electricTower}</div>
                <div className="home-card-paragraph">{homeLang.card[0]}</div>
                <hr />
                <button className="btn btn-transparent text-danger  btn-md home-card-button">
                  {homeLang.card[1]}
                </button>
              </div>
              <div className="w-100 w-md-50 big-thunder">
                {homesvgs.bigThunder}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
