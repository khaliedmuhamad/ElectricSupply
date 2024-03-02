import React, {useState } from "react";
import Slider from "react-slick";
import "./Opinions.css";
import { multilang } from "../../components/functions/multilingual";
import { BsFillStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { BiMessageSquareAdd } from "react-icons/bi";
import { AddComment } from "../functions/AddComment";
const Opinions = (props) => {
  let Language = props.lang;
  const sayLang = multilang(Language).say;
  const data = multilang(Language).say.data;

  const [, setIndex] = useState(0);
  const [addShow, setAddSow] = useState(false)
  const settings = {
    className: "center",
    centerMode: true,
    customPaging: function (i) {
      return (
        <li className="dotsItem">
          <img src={data[i].img} alt="ddd" width={100} height="100" />
        </li>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb w-100 h-100 ",
    infinite: true,
    centerPadding: "20px",
    autoPlay: 1,
    slidesToShow: 1,
    speed: 700,
    draggable: true,
    slickPlay: true,
    arrows: true,
    afterChange: (e) => setIndex(e),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  


  return (
    <section className="opinios py-5 ">
            {addShow?<AddComment setAddSow={setAddSow}/>:""}
      <div className="container">
        <h3 className="text-center head ">{sayLang.head}
        </h3>
        <p className="text-center mb-5 parag">{sayLang.parag}</p>

        <div>
          <Slider {...settings}>
            {data
              ? data.map((el, n) => {
                  return (
                    <div className="py-2" key={n}>
                      <div className="card  bg-transparent border-0">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div className="image-overlay rounded-circle">
                            <img
                              src={el.img}
                              width="100%"
                              height="100%"
                              alt="magew"
                            />
                          </div>
                          <div className="text-center m-0 client-info">
                            <h3 className="text-capitalize h5 mt-3">
                              {el.name}
                            </h3>
                            <p className="text-capitalize text-4 my-1">
                              {el.jop}
                            </p>
                          </div>
                          <div className="rating mt-1">
                            {Array(!el.rate ? 0 : el.rate).fill(
                              <BsFillStarFill  className="mx-1 text-warning" />
                            )}
                            {Array(!el.rate ? 0 : 5 - el.rate).fill(
                              <BsFillStarFill  className="mx-1 text-secondary" />
                            )}
                          </div>
                          <div className="feedback text-center  w-50 ">
                            <span className="quot">
                              <FaQuoteLeft />
                            </span>
                            <p>{el.idea}</p>
                            <span className="quot">
                              {" "}
                              <FaQuoteRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "Looding 🚀"}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
