import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/images/personal.png";
import { useState, useEffect } from "react";
import './Banner.css';
import 'animate.css';
import TrackVisibility from "react-on-screen";


const Banner = () => {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDetla] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDetla((preDelta) => preDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDetla(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDetla(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
                <span className="tagline"> THIS IS THAI'S PORTFOLIO</span>
                <h1>
                  {`Hi! I'm a `}
                  <span className="wrap">{text}</span>
                </h1>
                <p>
                  As a Web Developer, I always want to create a website as creative as what i can do. Moreover, Aiming to an energetic and professional enviroment is always in my first line. Hope all you guys reach what you search for in this portfolio.
                </p>
                <a href="#connect" style={{textDecoration:"none"}}>
                  <button>
                  {" "}
                  
                  Let's Connect <ArrowRightCircle />
                </button>
                </a>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
