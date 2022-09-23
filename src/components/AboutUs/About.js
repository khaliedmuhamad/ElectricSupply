import React from "react";
import { Svgabout } from "../../assets/images/svgabout";
import { multilang } from "../functions/multilingual";
import "./About.css";

export const About = (props) => {
  let Language = props.lang;
  const aboutLang = multilang(Language).about;
  const aboutLangbottomHead = multilang(Language).about.bottom.head;
  const aboutLangbottomParagraph = multilang(Language).about.bottom.paragraph;

  const aboutData = [
    { haed: aboutLangbottomHead[0], paragraph: aboutLangbottomParagraph[0] },
    { haed: aboutLangbottomHead[1], paragraph: aboutLangbottomParagraph[1] },
    { haed: aboutLangbottomHead[2], paragraph: aboutLangbottomParagraph[2] },
    { haed: aboutLangbottomHead[3], paragraph: aboutLangbottomParagraph[3] },
  ];

  return (
    <section className="about py-5 mt-3">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-md-row">
          <div className="about-left col-10 col-md-5 align-self-center mx-md-0 mx-auto align-self-lg-end ">
            <div className="about-svg">{<Svgabout />}</div>
          </div>
          <div className="about-right col-12 col-md-7 ">
            <div className=" d-flex flex-column h-100">
              <div className="about-top ps-2">
                <h3 className="head-section ">{aboutLang.top.head}</h3>
                <p className="paragraph-top-about mt-5">
                  {aboutLang.top.paragraph}
                </p>
              </div>
              <div className="about-bottom   d-flex flex-column   ">
                <div className="about-stengths d-flex flex-wrap">
                  {!aboutData
                    ? ""
                    : aboutData.map((el, n) => {
                        return (
                          <div className="col-12 col-sm-6 p-2" key={n}>
                            <div className="my-5 ">
                              <h2 className="about-strength-head">{el.haed}</h2>
                              <p className="about-strength-paragraph">
                                {el.paragraph}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
