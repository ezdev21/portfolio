import { about } from "../data/about";

function AboutDetail() {
  return (
    <section className="max-w-2xl mx-auto">
      <blockquote className="text-left pb-6 md:pb-8">
        <div className="text-sm md:text-base text-slate-200 leading-relaxed pb-4 md:pb-6">
          {about.map((paragraph, index) => (
            <p key={index} className="py-3 md:py-4">
              {paragraph}
            </p>
          ))}
        </div>

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
