import React from "react";
import Avatar from "@assets/avatar.svg"

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: Avatar,
    name: "Jane Doe",
    role: "Project Manager",
    text: "Working with you was amazing! Your coding skills and professionalism are top-notch.",
  },
  {
    image: Avatar,
    name: "John Smith",
    role: "CEO, TechCorp",
    text: "A highly talented developer! Delivered the project on time and exceeded expectations.",
  },
  {
    image: Avatar,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    text: "Your attention to detail and creativity brought our ideas to life beautifully.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#2C1F3A] rounded-xl shadow-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-300 mb-4 text-sm">{testimonial.text}</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
