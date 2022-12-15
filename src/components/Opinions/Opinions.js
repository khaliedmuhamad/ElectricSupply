import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Opinions.css"
import { multilang } from "../../components/functions/multilingual";
import { BsFillStarFill } from "react-icons/bs";
import { FaQuoteLeft , FaQuoteRight} from "react-icons/fa";
const Opinions = (props) => {
  let Language = props.lang;
  const sayLang = multilang(Language).say;
  let peopleLang1 = multilang(Language).ourteam.people[0];
  let peopleLang2 = multilang(Language).ourteam.people[1];
  let peopleLang3 = multilang(Language).ourteam.people[2];
  let peopleLang4 = multilang(Language).ourteam.people[3];
  const [index, setIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    customPaging: function(i) {
      return (
        <li className="dotsItem">
          <img src={dataclients[i].image}  alt="ddd" width={100} height="100" />
        </li>
      );
    },
    dots:true,
    dotsClass: "slick-dots slick-thumb w-100 h-100 ",
    infinite: true,
    centerPadding: "20px",
    autoPlay: 1,
    slidesToShow: 1,
    speed: 700,
    draggable:true,
    slickPlay:true,
    arrows:true,
    afterChange: (e) => setIndex(e),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  const dataclients = [

    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:peopleLang1.name,
      role:peopleLang1.title ,
      rate:3,
      feedback:peopleLang1.quote
    },
    {
      image: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:peopleLang2.name,
      role:peopleLang2.title ,
      rate:4,
      feedback:peopleLang2.quote
    },
    {
      image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:peopleLang3.name,
      role:peopleLang3.title ,
      rate:1,
      feedback:peopleLang3.quote
    },
    {
      image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:peopleLang4.name,
      role:peopleLang4.title ,
      rate:3,
      feedback:peopleLang4.quote
    },
  ];
  return (
    <section className="opinios py-5 ">
      <div className="container">
        <h3 className="text-center head ">{sayLang.head}</h3>
        <p className="text-center mb-5 parag">
                    {sayLang.parag}
        </p>

        <div>
 
        <Slider {...settings}>
          {dataclients? dataclients.map((el,n) =>{ return <div className="py-2" key={n}>
                    <div className="card  bg-transparent border-0">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="image-overlay rounded-circle">
                              <img src={el.image} width="100%" height="100%"  alt="magew"/>
                            </div>
                            <div className="text-center m-0 client-info" >
                              <h3 className="text-capitalize h5 mt-3">{el.name}</h3>
                              <p className="text-capitalize text-4 my-1">{el.role}</p>
                            </div>
                            <div className="rating mt-1">
                              {Array(!el.rate ? 0 : el.rate  ).fill(<BsFillStarFill className="mx-1 text-warning"/>) }{Array(!el.rate ? 0 : 5 - el.rate ).fill(<BsFillStarFill className="mx-1 text-secondary"/>)}
                            </div>
                            <div className="feedback text-center  w-50 ">
                              <span className="quot"><FaQuoteLeft /></span>
                              <p>{el.feedback}</p>
                            <span className="quot"> <FaQuoteRight /></span>
                            </div>
                        </div>

                    </div>
                  </div> 

          }):"Looding 🚀"}




        </Slider>

        </div>
      </div>
    </section>
  );
};

export default Opinions;
