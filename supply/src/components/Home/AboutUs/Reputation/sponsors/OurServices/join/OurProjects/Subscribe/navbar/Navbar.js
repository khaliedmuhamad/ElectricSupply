import React,{ useState } from 'react';
import { brandLogo } from '../../../../../../../../../../assets/images/svgGraphics';
import { navbaren } from '../../../../../../../../../../data/English';
import { navbarde } from '../../../../../../../../../../data/Deutsch';
import "./Navbar.css";

export const Navbar = () => {

const [Lang, seTlang] = useState("EN")
const multilang = () =>{ 
  if(Lang == "EN"){return navbaren} else if (Lang == "DE" ){return navbarde}
}

  return (
<nav className="navbar navbar-expand-md bg-transparent">
  <div className="container m-auto">
    <a className="navbar-brand" href="/">{brandLogo} <span>{multilang().brand}</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 rounded-pill ps-2 pe-2 listLinks">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="#">{multilang().links[0]}</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">{multilang().links[1]}</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">{multilang().links[2]}</a>
        </li>
        
        <li className="nav-item mx-3">
          <a className="nav-link " href="#">{multilang().links[3]}</a>
        </li>
      </ul>
        <ul className='navbar-nav  mb-2 mb-lg-0'>
            <li className='nav-button rounded-pill'>
                <button className='btn btn-md text-light'>{multilang().connect}</button>
            </li>
            <li className='nav-button ms-5 rounded-pill'>

            <div class="dropdown ">
  <button class="btn text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {Lang}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >{multilang().Language[0].name}</a></li>
    <li><a class="dropdown-item" href="#">{multilang().Language[1].name}</a></li>
  </ul>
</div>
            </li>
        </ul>
    </div>
  </div>
</nav>
  )
}
