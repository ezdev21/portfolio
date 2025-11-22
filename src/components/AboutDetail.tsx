function AboutDetail() {
  return (
    <div>
      <blockquote className="text-md md:text-lg text-left pb-5">
        <p className="pb-4 md:pb-10">
          I am a Software developer based in Addis Ababa, Ethiopia. I hold a Bsc
          in Electrical and Computer Engineering from Addis Ababa University.
          I'm passionate about creating beautiful, functional, and user-friendly
          websites and applications, and I'm constantly pushing myself to learn
          and grow as a developer. Love building full-stack apps and open source
          projects.
        </p>

        <p
          className="text-[#a588c0] text-sm pt-5 md:text-lg italic py-2"
          style={{ fontFamily: "VT323" }}
        >
          "Most good programmers do programming not because they expect to get
          paid or get adulation by the public, but because it is fun to
          program."{" "}
        </p>
        <p className="text-[#a588c0]">- Linus Torvalds</p>
      </blockquote>
    </div>
  );
}

export default AboutDetail;
