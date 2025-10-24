import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="mb-0" style={{fontSize: "1.25em",textAlign:'left'}}>
          <p>
              I am a Full-Stack developer based in Addis Ababa, Ethiopia. I graduated in Electrical and Computer Engineering from Addis Ababa University, and my journey in web development began during my first internship. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.
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
