import { Container, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Col>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/samsani-sai-babu/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={navIcon1}
                alt="Icon"
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
                alt="Icon"
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
                alt="Icon"
                style={{ width: "16px", height: "16px" }}
              />
            </a>
          </div>
          <p>Copyright ©{currentYear}. All Rights Reserved</p>
        </Col>
      </Container>
    </footer>
  );
};
