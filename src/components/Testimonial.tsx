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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    image: Avatar,
    name: "John Smith",
    role: "CEO, Company",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    image: Avatar,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 rounded-lg card">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-10 px-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl p-4 flex flex-col items-center text-center bg-secondary"
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
