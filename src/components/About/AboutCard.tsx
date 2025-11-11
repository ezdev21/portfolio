
function AboutCard() {
  return (
    <div className="bg-transparent text-white border-none">
      <div>
        <blockquote className="text-sm md:text-xl text-left leading-5 md:leading-8 pb-5 max-md:font-light">
          <p>
              I am a Full-Stack developer based in Addis Ababa, Ethiopia. I graduated in Computer Engineering from Addis Ababa University. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.
          </p>
          
          <p className="text-primary text-sm pt-5 md:text-lg italic py-2" style={{fontFamily: 'VT323'}}>
            "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."{" "}
          </p>
          <p className="text-purple-300">Linus Torvalds</p>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
