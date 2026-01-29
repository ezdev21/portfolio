import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSuccess("Message sent successfully ✅");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      window.location.reload();
      // eslint-disable-next-line no-unused-vars
    } catch (error: unknown) {
      setSuccess("Something went wrong. Please try again ❌");
    } finally {
      setLoading(false);
    }
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
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
            />
            <Input
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
            />
          </div>

          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
            className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
          />

          <Textarea
            name="message"
            placeholder="Hello..."
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-sm bg-white text-gray-800 outline-1 outline-primary focus:outline-2 focus:outline-primary resize-none"
          />

          <Button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "cursor-not-allowed"
                : "bg-secondary  hover:bg-purple-600 cursor-pointer"
            } font-medium py-3 rounded-lg transition-colors`}
          >
            {loading ? "Please Wait..." : "Send Message"}
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
