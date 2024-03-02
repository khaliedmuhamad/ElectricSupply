import React from "react";
import "./Home.css";
import { multilang } from "../functions/multilingual";
import electricMan from "../../assets/images/electricMan.png";


export const Home = (props) => {
  let Language = props.lang;
  let homeLang = multilang(Language).home;
  return (
    <section className="home" id="home">
      <div className="container h-100">
        <div className="d-flex flex-column flex-sm-row h-100 md-justify-content-between  justify-content-center align-items-center">
          <div className="col-12 col-sm-6 text-center text-sm-start home-left">
            <h3>{homeLang.headfirst}</h3>
            <h1>
              <span className="d-inline"> {homeLang.headsecond[0]}</span>
              <span className="d-inline"> {homeLang.headsecond[1]}</span>
              <span className="d-inline"> {homeLang.headsecond[2]}</span>
            </h1>
            <p>{homeLang.paragraph}</p>
          </div>
          <div className="col-8 col-md-6 home-right">
              <div className="w-100 w-md-75 ">
                <div className="home-img-overlay w-100">
                  <img src={electricMan} width="100%" alt="electrician" className="object-fit-cover" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
