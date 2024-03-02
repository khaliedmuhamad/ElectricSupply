import React, { useState } from "react";
import  brandLogo  from "../../assets/images/logoLight.png";
import "./Navbar.css";
import { multilang } from "../functions/multilingual";
import { BsMoonStarsFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import { Link } from "react-router-dom";


export const Navbar = (props) => {
  let Lang = props.lang;
  const darkness = props.dark;

  //dark state
  const [dark, setDark] = useState(darkness);

  return (
    <nav className="navbar navbar-expand-md pt-4" >
      <div className="container m-auto">
        <Link className="navbar-brand" to="/">
          <img src={brandLogo} width={150} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 rounded-md-pill ps-2 pe-2 listLinks">
            <li className="nav-item mx-1">
              <Link
                className="nav-link active"
                aria-current="page"
                href="#home"
                to={'/#home'}
              >
                {multilang(Lang).navbar.links[0]}
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/#about">
                {multilang(Lang).navbar.links[1]}
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link " to="/#services">
                {multilang(Lang).navbar.links[3]}
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link " to="/#contact">
                {multilang(Lang).navbar.connect}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav nav-btn-list  mb-2 mb-lg-0 ms-md-4">
            <li
              className={`nav-button rounded-pill darkOptions shadow ${
                dark ? "dark" : "light"
              } `}
              onClick={() => {
                props.setDark((prev) => !prev);
                 setDark((prev) => !prev) 
                   }}
              style={dark ? { background: "#ff9900" } : { background: "" }}
            >
              <button className="btn btn-md text-light">
                {dark ? (
                  <span className={` `}>
                    <CgSun />
                  </span>
                ) : (
                  <span className={``}>
                    <BsMoonStarsFill />
                  </span>
                )}
              </button>
            </li>
            <li className="dropdown nav-button rounded-pill ms-2">
              <button
                className="btn text-light dropdown-toggle m-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {Lang}
              </button>
              <ul className="dropdown-menu m-0">
                <li>
                  <Link
                    className="dropdown-item"
                    data-language="EN"
                    onClick={(e) => {
                      props.Setlanguage(e.target.dataset.language);
                    }}
                  >
                    {multilang(Lang).navbar.Language[0].name}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    data-language="DE"
                    onClick={(e) => {
                      props.Setlanguage(e.target.dataset.language);
                    }}
                  >
                    {multilang(Lang).navbar.Language[1].name}
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
