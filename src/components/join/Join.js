import React from "react";
import { multilang } from "../functions/multilingual";
import "./Join.css";
export const Join = (props) => {
  let Language = props.lang;
  const joinLang = multilang(Language).join;

  return (
    <section className="join">
      <div className="bg-overlay">
        <div className="container h-100">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center h-100">
            <div className="col-md-8 col-12   ">
              <h3 className="join-head text-center text-md-start">
                {joinLang.head}
              </h3>
              <p className="join-paragraph text-center text-md-start">
                {joinLang.paragraph}
              </p>
            </div>
            <div className="col-md-4 col-12 text-center">
              <button className="btn btn-outline-light  btn-md text-secondary ">
                {joinLang.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
