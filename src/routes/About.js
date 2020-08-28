import React from "react";
import "./About.css";
import hotmail from "../image/hotmail.png";
import name from "../image/name.svg";
import cinema from "../image/cinema.png";

function About(props) {
  console.log(props);
  return (
    <section className="about__container">
      <div className="introduction">
        <h1>MY First Project With React</h1>
        <h3>This is Created for Practice Purposes</h3>
        <img src={name} alt="name" />
        <h4>HAN JIN PARK</h4>
        <img src={hotmail} alt="hotmail" />
        <h4>phj9020@hotmail.com</h4>
        <img src={cinema} alt="cinema" />
        <a href="phj9020.github.io/movie_app">Go to Movie App</a>
      </div>
    </section>
  );
}

export default About;
