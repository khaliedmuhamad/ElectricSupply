import React, { useState } from "react";
import { brandLogo } from "../../assets/images/svgGraphics";
import "./Navbar.css";
import { multilang } from "../functions/multilingual";
import { BsMoonStarsFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import Anochor from "../functions/Anochor";

export const Navbar = (props) => {
  let Lang = props.lang;
  const darkness = props.dark;

  //dark state
  const [dark, setDark] = useState(darkness);

  return (
    <nav className="navbar navbar-expand-md bg-transparent pt-4">
      <div className="container m-auto">
        <Anochor className="navbar-brand" href="/">
          {brandLogo} <span>{multilang(Lang).navbar.brand}</span>
        </Anochor>
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
            <li className="nav-item mx-3">
              <Anochor className="nav-link active" aria-current="page" href="#">
                {multilang(Lang).navbar.links[0]}
              </Anochor>
            </li>
            <li className="nav-item mx-3">
              <Anochor className="nav-link" href="#">
                {multilang(Lang).navbar.links[1]}
              </Anochor>
            </li>
            <li className="nav-item mx-3">
              <Anochor className="nav-link" href="#">
                {multilang(Lang).navbar.links[2]}
              </Anochor>
            </li>

            <li className="nav-item mx-3">
              <Anochor className="nav-link " href="#">
                {multilang(Lang).navbar.links[3]}
              </Anochor>
            </li>
            <li className="nav-item mx-3">
              <Anochor className="nav-link " href="#">
                {multilang(Lang).navbar.connect}
              </Anochor>
            </li>
          </ul>
          <ul className="navbar-nav nav-btn-list  mb-2 mb-lg-0 ms-md-4">
            <li
              className={`nav-button rounded-pill darkOptions shadow ${
                dark ? "dark" : "light"
              } `}
              onClick={() => {
                return props.setDark((prev) => !prev), setDark((p) => !p);
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
                  <Anochor
                    className="dropdown-item"
                    data-Language="EN"
                    onClick={(e) => {
                      props.Setlanguage(e.target.dataset.language);
                    }}
                  >
                    {multilang(Lang).navbar.Language[0].name}
                  </Anochor>
                </li>
                <li>
                  <Anochor
                    className="dropdown-item"
                    data-Language="DE"
                    onClick={(e) => {
                      props.Setlanguage(e.target.dataset.language);
                    }}
                  >
                    {multilang(Lang).navbar.Language[1].name}
                  </Anochor>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
