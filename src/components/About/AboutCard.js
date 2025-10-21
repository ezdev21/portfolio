import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="mb-0" style={{fontSize: "1.25em",textAlign:'left'}}>
          <p>
              I’m a software engineer by profession, driven by a passion for solving real-world problems and creating meaningful
              solutions. With a strong foundation in both front-end and back-end development, I am adept at designing and
              developing full-stack solutions that meet business requirements and exceed user expectations.
          </p>
          
          <p style={{ color: "rgb(155 126 172)", fontFamily: "Playwrite DE SAS" }}>
            "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
