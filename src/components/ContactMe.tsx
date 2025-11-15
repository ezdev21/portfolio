import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_PUBLIC_KEY"; // also called PUBLIC_KEY in EmailJS dashboard

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="card max-w-6xl mx-auto px-4 py-10 flex flex-wrap gap-12 rounded-lg">
      <div className="flex-1">
        <div className="px-5">
          <h1 className="text-4xl font-bold mb-4">Let's Connect!</h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Whether you're looking to collaborate on a project, discuss an
            opportunity, or just say hello I'd love to hear from you. Reach
            out anytime and let's build something great together.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 min-w-[300px] flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300  rounded-sm bg-white text-gray-800 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="coder@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-none focus:ring-2"
        />

        <textarea
          name="message"
          placeholder="Hello..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full p-3 border border-gray-300 rounded-sm bg-white  text-gray-800 focus:outline-none focus:ring-2 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "cursor-not-allowed" : "bg-primary  hover:bg-purple-600 cursor-pointer"
          } font-medium py-3 rounded-lg transition-colors`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-500 mt-2 font-medium">{success}</p>
        )}
      </form>
    </section>
  );
};

export default ContactMe;
