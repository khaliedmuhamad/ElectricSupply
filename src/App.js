import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { LandingPage } from "./pages/Landingpage/LandingPage";
import React from "react";
import { DetailProject } from "./components/DetailProject/DetailProject";
import { useState } from "react";

function App() {



  const data = {
    date:"10 February 2022 at 00:00:00 UTC+2",
description:
"Quis enim lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a. Sed adipiscing diam donec adipiscing tristique risus.Quis enim lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a. Sed adipiscing diam donec adipiscing tristique risus."
,head:
"factory supply",
images:[
"gs://electricproj-5f210.appspot.com/factory.jpg"
,
"gs://electricproj-5f210.appspot.com/fact1.jpg"
,
"gs://electricproj-5f210.appspot.com/fact2.jpg"
,
"gs://electricproj-5f210.appspot.com/fact3.jpg"
,
"gs://electricproj-5f210.appspot.com/fact4.jpg"
],
location:
"Berlin",
id:"modalss",
paragraph:
"Quis enim lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a. Sed adipiscing diam donec adipiscing tristique risus."
  }


  return (
    <div className="App ">
            <LandingPage />
    </div>
  );
}

export default App;
