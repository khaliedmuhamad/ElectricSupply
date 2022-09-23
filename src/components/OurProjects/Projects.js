import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import farm from "../../assets/videos/farm.mp4";
import factory from "../../assets/videos/factory.mp4";
import night from "../../assets/videos/night.mp4";
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
  const fireVideo = (e, n, onfun, offun) => {
    if (e === n) {
      return onfun;
    } else {
      return offun;
    }
  };
  useEffect(() => {
    console.log(index);
    fireVideo();
  }, [index]);

  const dataProjects = [
    { video: farm, head: projectsLangHead[0], paragraph: projectsLangPara[0] },
    { video: "", head: projectsLangHead[1], paragraph: projectsLangPara[2] },
    { video: night, head: projectsLangHead[2], paragraph: projectsLangPara[2] },
    { video: "", head: projectsLangHead[3], paragraph: projectsLangPara[0] },
    {
      video: factory,
      head: projectsLangHead[4],
      paragraph: projectsLangPara[0],
    },
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
                        {!el.video ? (
                          <img
                            src="https://via.placeholder.com/150"
                            className="card-img-top"
                            alt=""
                            height={"100%"}
                          />
                        ) : (
                          <div className="video-overlay position-relative h-100 w-100">
                            <span
                              className={
                                "position-absolute  bottom-0 start-20 text-light h1 text-center"
                              }
                            >
                              {<AiFillPlaySquare />}
                            </span>
                            <video
                              type="video/mp4"
                              src={el.video}
                              alt={el.video}
                              autoPlay
                              muted
                              onMouseOver={(e) => {
                                e.target.play();
                              }}
                              loop
                              onMouseOut={(e) => {
                                e.target.pause();
                              }}
                              height={"100%"}
                            />
                          </div>
                        )}
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
