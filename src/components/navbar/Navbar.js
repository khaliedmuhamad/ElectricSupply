import React from 'react';
import { brandLogo } from '../../assets/images/svgGraphics';
import "./Navbar.css";
import { multilang } from '../functions/multilingual';

export const Navbar = (props) => {
  let Lang = props.lang;


const changeLang = (e) => {
  if(e === "DE") {return props.Setlanguage("DE")
} else {props.Setlanguage("EN")}
  
}
  return (
<nav className="navbar navbar-expand-md bg-transparent pt-4">
  <div className="container m-auto">
    <a className="navbar-brand" href="/">{brandLogo} <span>{multilang(Lang).navbar.brand}</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 rounded-md-pill ps-2 pe-2 listLinks">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="#">{multilang(Lang).navbar.links[0]}</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">{multilang(Lang).navbar.links[1]}</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">{multilang(Lang).navbar.links[2]}</a>
        </li>
        
        <li className="nav-item mx-3">
          <a className="nav-link " href="#">{multilang(Lang).navbar.links[3]}</a>
        </li>
      </ul>
        <ul className='navbar-nav nav-btn-list  mb-2 mb-lg-0 ms-md-4'>
            <li className='nav-button rounded-pill'>
                <button className='btn btn-md text-light'>{multilang(Lang).navbar.connect}</button>
            </li>
            <li className='dropdown nav-button rounded-pill ms-2'>
  <button class="btn text-light dropdown-toggle m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {Lang}
  </button>
  <ul class="dropdown-menu m-0">
    <li ><a class="dropdown-item" data-Language="EN" onClick={(e)=>{changeLang(e.target.dataset.language)}}>{multilang(Lang).navbar.Language[0].name}</a></li>
    <li ><a class="dropdown-item" data-Language="DE" onClick={(e)=>{changeLang(e.target.dataset.language)}} >{multilang(Lang).navbar.Language[1].name}</a></li>
  </ul>

            </li>
        </ul>
    </div>
  </div>
</nav>
  )
}
