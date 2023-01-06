import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import city from "../../assets/images/projects/city.jpg";
import factory from "../../assets/images/projects/factory.jpg";
import hospital from "../../assets/images/projects/hopital.jpg";
import university from "../../assets/images/projects/university.jpg";
import lines from "../../assets/images/projects/lines.webp";
import { multilang } from "../../components/functions/multilingual";
import { AiFillPlaySquare } from "react-icons/ai";
import "./Projects.css";
export const Projects = (props) => {
  let Language = props.lang;
  const projectsLang = multilang(Language).projects;
  const projectsLangHead = multilang(Language).projects.info.head;
  const projectsLangPara = multilang(Language).projects.info.paragraph;
  const [index, setIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    autoPlay: true,
    slidesToShow: 3,
    speed: 500,
    afterChange: (e) => setIndex(e),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

/**
 *   1   "High and long lines",
     2   "hospitals",
     3   "city connections",
     4   "University",
     5   "factory supply",
 */
  const dataProjects = [
    { head: projectsLangHead[0], paragraph: projectsLangPara[0],img:lines },
    { head: projectsLangHead[1], paragraph: projectsLangPara[2],img:hospital },
    { head: projectsLangHead[2], paragraph: projectsLangPara[2],img:city },
    { head: projectsLangHead[3], paragraph: projectsLangPara[0],img:university },
    { head: projectsLangHead[4], paragraph: projectsLangPara[0],img:factory},
  ];

  return (
    <section className="projects  py-5 " id="projects">
      <div className="">
        <h2 className="head-section  text-center py-3 mb-5">
          {projectsLang.header}
        </h2>
        <Slider {...settings}>
          {!dataProjects
            ? " "
            : dataProjects.map((el, n) => {
                return (
                  <div className="p-2" key={n}>
                    <div className="card project-card">
                      <div className="media-overlay">
                        
                          <img src={el.img} alt={el.head} height="100%" width="100%"/>
                        {console.log(el)}
                      </div>

                      <div className="card-body">
                        <h3>{el.head}</h3>
                        <p className="card-text">{el.paragraph}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </Slider>
      </div>
    </section>
  );
};
