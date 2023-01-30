import React from "react";
import "./Home.css";
import { multilang } from "../functions/multilingual";
import {  homesvgs } from "../../assets/images/svgGraphics";
import electricMan from "../../assets/images/electricMan.png";
import ReactTypingEffect from "react-typing-effect";
import { Wtswidget } from "../wa-widget/Wtswidget";

export const Home = (props) => {
  let Language = props.lang;

  let homeLang = multilang(Language).home;
  return (
    <section className="home" id="home">

      <div className="small-thunders">{homesvgs.smallthunders}</div>
      <div className="container h-100">
        <div className="d-flex flex-column flex-sm-row h-100 justify-content-between align-items-center">
          <div className="col-12 col-sm-6 text-center text-sm-start home-left">
            <h3>{homeLang.headfirst}</h3>
            <h1>
              <span className="d-inline"> {homeLang.headsecond[0]}</span>
              <span className="d-inline"> {homeLang.headsecond[1]}</span>
              <br />
              <span className="d-inline"> {homeLang.headsecond[2]}</span>
            </h1>
            <p>{homeLang.paragraph}</p>
          </div>
          <div className="offset-1 col-7 col-md-5 offset-md-2 home-right">
            <div className="w-md-50 ms-auto position-relative">
              <div className="home-card d-flex flex-column">
                  <Wtswidget /> <span>{multilang(props.lang).navbar.brand}</span>
                <div className="home-card-paragraph">
                  <br />
                  <ReactTypingEffect text={homeLang.card[0]} />
                </div>
              </div>
              <div className="w-100 w-md-75 ">
                <div className="home-img-overlay">
                  <img src={electricMan} width="90%" alt="electrician" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
