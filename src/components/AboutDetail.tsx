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
      </blockquote>
    </section>
  );
}

export default AboutDetail;
