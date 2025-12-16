function AboutDetail() {
  return (
    <section className="max-w-2xl mx-auto">
      <blockquote className="text-left pb-6 md:pb-8">
        <p className="text-sm md:text-base text-slate-200 leading-relaxed pb-4 md:pb-6">
          I am a Software developer based in Addis Ababa, Ethiopia. I hold a Bsc
          in Electrical and Computer Engineering from Addis Ababa University.
          I'm passionate about creating beautiful, functional, and user-friendly
          websites and applications, and I'm constantly pushing myself to learn
          and grow as a developer. Love building full-stack apps and open source
          projects.
        </p>

        <p
          className="text-[#a588c0] pt-3 md:pt-4 text-lg"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          "Most good programmers do programming not because they expect to get
          paid or get adulation by the public, but because it is fun to
          program."
        </p>
        <p className="text-secondary mt-1 md:mt-2">- Linus Torvalds</p>
      </blockquote>
    </section>
  );
}

export default AboutDetail;
