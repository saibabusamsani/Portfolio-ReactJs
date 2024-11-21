import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Illustrations/Emma.png";
import projImg2 from "../assets/img/Illustrations/LaLaLand.png";
import projImg3 from "../assets/img/Illustrations/Wanda.png";
import projImg4 from "../assets/img/Illustrations/TBBT.png";
import projImg5 from "../assets/img/Illustrations/Mandala.png";
import projImg6 from "../assets/img/Illustrations/Neko.png";
import cinephile from "../assets/img/Websites/cinephile.png";
import pokedex from "../assets/img/Websites/pokedex.png";
import gallery from "../assets/img/Websites/gallery.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const websites = [
    {
      title: "Cinephile",
      isWebsite: true,
      description:
        "Site that can get detailed information about movies and TV shows.",
      imgUrl: cinephile,
      Url: "https://lazyjinchuriki.github.io/cinephile/",
      githubUrl: "https://github.com/lazyjinchuriki/cinephile/",
    },
    {
      title: "Pokedex",
      isWebsite: true,
      description: "Everything you need to know about any pokemon out there.",
      imgUrl: pokedex,
      Url: "https://lazyjinchuriki.github.io/pokedex/",
      githubUrl: "https://github.com/lazyjinchuriki/pokdex/",
    },
    {
      title: "Gallery",
      isWebsite: true,
      description: "A Gallery to store your images with a login system.",
      imgUrl: gallery,
      Url: "https://lazyjinchuriki.github.io/gallery/",
      githubUrl: "https://github.com/lazyjinchuriki/gallery/",
    },
  ];
  const illustrations = [
    {
      title: "Emma Watson",
      description: "Character Illustration",
      imgUrl: projImg1,
    },
    {
      title: "La La Land",
      description: "Spotify Cover Art",
      imgUrl: projImg2,
    },
    {
      title: "Wanda",
      description: "Character Illustration",
      imgUrl: projImg3,
    },
    {
      title: "The Big Bang Theory",
      description: "Simple Illustrations",
      imgUrl: projImg4,
    },
    {
      title: "Mandala",
      description: "Geometric Design",
      imgUrl: projImg5,
    },
    {
      title: "Neko",
      description: "Animal Art",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    I'm excited to showcase my passion for illustration and
                    design. As a creative artist, I have honed my skills in
                    producing unique and eye-catching illustrations. My goal is
                    to create art that is aesthetically pleasing and mundane in
                    its own way. I believe that a great illustration should
                    capture the essence of its subject and evoke emotions in the
                    viewer. Take a look at my recent projects and get in touch
                    if you'd like to collaborate or commission me for your
                    project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {illustrations.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {websites.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>
                          {"</>"}
                          <br />
                          Work in Progress
                        </h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
