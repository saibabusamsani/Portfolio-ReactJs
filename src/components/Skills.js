import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/Skills/html.svg";
import java from "../assets/img/Skills/java.svg";
import css from "../assets/img/Skills/css.svg";
import js from "../assets/img/Skills/js.svg";

import react from "../assets/img/Skills/react.svg";

import mysql from "../assets/img/Skills/mysql.svg";


import colorSharp from "../assets/img/color-sharp.png";
import { useState } from "react";

import LazyLoad from 'react-lazy-load';

export const Skills = () => {
  const [hovored, setHovored] = useState(false);

  const handleHover = (hovored) => {
    setHovored(hovored);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "HTML5", img: html, shadowClass: "shadow-color-html" },
    { name: "CSS3", img: css, shadowClass: "shadow-color-css" },
    { name: "JavaScript", img: js, shadowClass: "shadow-color-js" },
    { name: "React JS", img: react, shadowClass: "shadow-color-reactjs" },
    { name: "My SQL", img: mysql, shadowClass: "shadow-color-mysql" },
    { name: "Java", img: java, shadowClass: "shadow-color-mysql" },
    
    
    
  ];

  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a web developer, I have experience in HTML, CSS, JavaScript,
                and various web development frameworks such as React and
                Node.js. I am also proficient in designing and building
                responsive web interfaces that are optimized for different
                devices and screen sizes.<br></br> As an illustrator, I have a
                keen eye for detail and a deep understanding of color theory and
                composition. I am proficient in using Adobe Illustrator and
                Photoshop to create visually appealing graphics and
                illustrations for a wide range of digital media.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                pauseOnHover={true}
                mouseTracking={true}
                className="owl-carousel owl-theme skill-slider"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                {skills.map((skill, index) => {
                  const skillImageClass = skill.shadowClass;
                  return (
                    <div className="item" key={index}>
                      <LazyLoad width={150} height={150}>
                        <img src={skill.img} alt="skills" className={skillImageClass} style={{ width: "150px", height: "150px" ,transform:"translateX(96px)"}} />
                      </LazyLoad>
                      <h5 style={{marginTop:"25px"}}>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
