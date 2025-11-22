import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_PUBLIC_KEY"; // also called PUBLIC_KEY in EmailJS dashboard

    emailjs.send(serviceID, templateID, formData, userID).then(
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
      },
    );
  };

  return (
    <section className="card p-5 md:p-10 flex flex-col md:flex-row gap-12 rounded-lg">
      <div className="md:w-1/2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Connect!
          </h1>
          <p className="text-md md:text-lg text-gray-400">
            Whether you're looking to collaborate on a project, discuss an
            opportunity, or just say hello I'd love to hear from you. Reach out
            anytime and let's build something great together.
          </p>
        </div>
      </div>

      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300  rounded-sm bg-white text-gray-800 focus:outline-none"
          />

          <Input
            type="email"
            name="email"
            placeholder="coder@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-none focus:ring-2"
          />

          <Textarea
            name="message"
            placeholder="Hello..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-sm bg-white  text-gray-800 focus:outline-none focus:ring-2 resize-none"
          />

          <Button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "cursor-not-allowed"
                : "bg-primary  hover:bg-purple-600 cursor-pointer"
            } font-medium py-3 rounded-lg transition-colors`}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {success && (
            <p className="text-green-500 mt-2 font-medium">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
