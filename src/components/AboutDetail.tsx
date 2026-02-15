import { about, quote } from "../data/about";

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
          "{quote.text}"
        </p>
        <p className="text-secondary mt-1 md:mt-2">- {quote.author}</p>
      </blockquote>
    </section>
  );
}

export default AboutDetail;
