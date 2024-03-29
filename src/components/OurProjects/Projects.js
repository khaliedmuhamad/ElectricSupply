import React, {  useState } from "react";
import Slider from "react-slick";
import { multilang } from "../../components/functions/multilingual";
import "./Projects.css";

import { DetailProject } from "../DetailProject/DetailProject";
import { FaInfoCircle } from "react-icons/fa";

export const Projects = (props) => {
  let Language = props.lang;
  const projectsLang = multilang(Language).projects;
  const [dataProjects,setData] = useState([{images:[]}])
  const [dataProjectsWithurl,setDataurl] = useState([{images:[]}])

  const [, setIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    autoPlay: true,
    slidesToShow:2,
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
const [pass, setPass] = useState()
const [show, setShow] = useState(false)
const [addShow, setAddSow] = useState(false)



     const fireFunction = (e) =>{
      setShow(true)
      setPass(e)
     }
  return (
    <section className="projects  py-5 " id="projects">
     
      
      <div className="">

        <h2 className="head-section  text-center py-3 mb-5">
          {projectsLang.header}
        </h2>
        <Slider {...settings}>
          {dataProjects?
             dataProjects.map((el, n) => {
                return (
                  <div className="p-2" key={n}>
                    <div className="card project-card">
                    <button type="button" onClick={()=>{(fireFunction(el))}} className="btn btn-primary" data-bs-toggle={`#${el.id}`} data-bs-target="#staticBackdrop">
<FaInfoCircle /> mehr
</button>
                      <div className="media-overlay">
                      {el.images[0]?
                      <img
                          src={el.images[0]}
                          alt={el.head}
                          height="100%"
                          width="100%"
                        />
                        :""
                       }
                      </div>
                      <div className="card-body">
                        <h3>{el.head}</h3>
                        <p className="card-text">{el.paragraph}</p>
                      </div>
                    </div>


                  </div>
                );
              }):"...Loading"}

        </Slider>

      </div>
  

{show?<DetailProject data={pass} setModal={setShow} />:""}
    </section>
  );
};

      