import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect, useRef } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/myPic/profile.jpg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleRef = useRef(null); // Reference to the Navbar.Toggle

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (toggleRef.current) {
      toggleRef.current.click(); // This simulates a click on the Navbar.Toggle to close the menu
    }
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <div>
            <a
              className="d-flex gap-2 align-items-center text-decoration-none text-white nav-title me-4"
              href="."
            >
              <div style={{ width: "50px" }}>
                <img
                  src={logo}
                  alt="logo"
                  className="nav-title-img"
                  style={{ width: "100%" }}
                />
              </div>
              <h1>portfolio</h1>
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" ref={toggleRef}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex gap-4 justify-content-around   toggle-bar m-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </div>

            <div className="navbar-text d-flex justify-content-between align-items-center">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/samsani-sai-babu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon1}
                    alt="navIcon1"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
                <a
                  href="https://github.com/saibabusamsani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon2}
                    alt="navIcon2"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/saibabu_samsani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={navIcon3}
                    alt="navIcon3"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
              </div>
              <HashLink to="#connect" onClick={()=>toggleRef.current.click()}>
                <button className="text-nowrap">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
