import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import Typed from "typed.js"; // Import Typed.js library
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

export const Banner = () => {
  // Create a ref for the text element that you want to animate
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js once the component is mounted
    const toRotate = ["Web Developer", "Backend Developer",""];
    const options = {
      strings: toRotate,
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before typing starts in milliseconds
      backDelay: 1000, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation indefinitely
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy(); // destroy Typed.js instance when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{"Samsani Saibabu"}</h1>
              <span className="wrap">
                {"{ "}
                <span ref={textRef}></span> {/* Use the textRef for Typed.js */}
                {"}"}
              </span>
              <p>
              Results-driven Java Full Stack Developer with six months of hands-on experience in frontend development 
              through an internship at Appit Software Solutions. Specializing in React.js and modern web technologies, I am skilled in creating user-friendly, high-performance applications with seamless backend integration. Proficient in Java, Spring frameworks, and frontend tools, I aim to leverage my skills in both frontend and backend development to contribute to innovative projects and deliver exceptional user experiences. Seeking a challenging role that values technical proficiency and a passion for impactful solutions.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <Box component="img"
              src={headerImg} alt="Header" sx={{ width:{ xm:"200px",sm:"682px"}, height: {xs:"350px",sm:"614px"} }}
            />
            
              
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
