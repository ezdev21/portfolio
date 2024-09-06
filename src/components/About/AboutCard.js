import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="mb-0" style={{fontSize: "1.25em",textAlign:'left'}}>
          <p>
              I am a versatile software developer with a passion for building innovative web and mobile applications. With a strong
              background in full-stack development and mobile app development, I have successfully led the development of
              complex web applications, optimized user interfaces for performance and responsiveness, and implemented
              scalable architectures using cutting-edge frameworks.
              I am always excited to explore new technologies, contribute to impactful projects, and work with dynamic teams that
              push the boundaries of innovation.
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
