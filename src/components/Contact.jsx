// src/pages/Contact.jsx

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setResponseMessage("");

    // Replace with your backend API or email service
    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage(
          "Thank you for reaching out! I will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {responseMessage && (
          <p className="text-center text-lg mt-4 text-green-600">
            {responseMessage}
          </p>
        )}
      </form>

      <div className="mt-10 text-center">
        <p className="text-lg">Or reach me directly:</p>
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="mailto:ankitkumar20224@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ankitkumar07"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ankit-Kumar-71"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
