"use client";
import { Github, Linkedin, Mail, Map, Twitter, YoutubeIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a78bfa] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#cfccd7] max-w-2xl mx-auto">
            Have a project in mind? Let's work together and create something
            amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#a78bfa] mb-4">
                Let's Connect
              </h3>
              <p className="text-[#cfccd7] mb-6">
                I'm always excited to hear about new opportunities,
                collaborations, or just to chat about FullStack development and
                design.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail color={"#cfccd7"} />
                <a
                  href="mailto:rawatshubam269@gmail.com"
                  className="text-[#cfccd7] transition-colors"
                >
                  rawatshubam269@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Map color={"#cfccd7"} />
                <span className="text-[#cfccd7]">India · IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Find me on
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shubhamrawat0269"
                  target="_blank"
                  className="text-[#cfccd7] hover:text-gray-900 transition-colors"
                >
                  <Github color={"#cfccd7"} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shubhamr1207/"
                  className="text-[#cfccd7] transition-colors"
                >
                  <Linkedin color={"#cfccd7"} />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/ShubhamRaw48174"
                  className="text-[#cfccd7] transition-colors"
                >
                  <Twitter color={"#cfccd7"} />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@webdevunravel-y1998"
                  className="text-[#cfccd7] transition-colors"
                >
                  <YoutubeIcon color={"#cfccd7"} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#cfccd7] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border text-[#cfccd7] border-gray-300 rounded-lg transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#cfccd7] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border text-[#cfccd7] border-gray-300 rounded-lg transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#cfccd7] mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 text-[#cfccd7] rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#a78bfa] text-white rounded-lg font-medium hover:bg-[#7255ca] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
