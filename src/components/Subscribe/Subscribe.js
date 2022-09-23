import React from "react";
import { subscripe } from "../../assets/images/svgGraphics";
import { multilang } from "../functions/multilingual";
import "./Subscribe.css";
export const Subscribe = (props) => {
  let Language = props.lang;
  let subLang = multilang(Language).subscripe;

  return (
    <section className="subscribe "  >
      <div className="container">
        <div className="d-flex align-items-end">
          <div className="right col-4 col-md-6">{subscripe}</div>
          <div className="left col-6 col-md-6 align-self-center">
            <div className="d-flex flex-column">
              <div className="top">
                <h3>{subLang.head}</h3>
                <p>{subLang.paragraph}</p>
              </div>
              <div className="bottom py-5">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={subLang.placeholder}
                    aria-label={subLang.head}
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
