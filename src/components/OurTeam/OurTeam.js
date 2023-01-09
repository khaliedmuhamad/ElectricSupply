import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import { multilang } from "../functions/multilingual";
import p1 from "../../assets/images/people/Person1.jpeg";
import p2 from "../../assets/images/people/Person2.png";
import p3 from "../../assets/images/people/Person3.jpg";
import p4 from "../../assets/images/people/Person4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const OurTeam = (props) => {
  const [index, setIndex] = useState(0);
  let Language = props.lang;
  let peopleLang1 = multilang(Language).ourteam.people[0];
  let peopleLang2 = multilang(Language).ourteam.people[1];
  let peopleLang3 = multilang(Language).ourteam.people[2];
  let peopleLang4 = multilang(Language).ourteam.people[3];

  const people = [
    {
      id: 1,
      image: p1,
      name: peopleLang1.name,
      title: peopleLang1.title,
      quote: peopleLang1.quote,
    },
    {
      id: 2,
      image: p2,
      name: peopleLang2.name,
      title: peopleLang2.title,
      quote: peopleLang2.quote,
    },
    {
      id: 3,
      image: p3,
      name: peopleLang3.name,
      title: peopleLang3.title,
      quote: peopleLang3.quote,
    },
    {
      id: 4,
      image: p4,
      name: peopleLang4.name,
      title: peopleLang4.title,
      quote: peopleLang4.quote,
    },
  ];

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people.length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section my-5">
      <div className="title">
        <h2>our Teams </h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineArrowLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
