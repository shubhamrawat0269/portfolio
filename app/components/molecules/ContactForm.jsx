"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/assets/assets";

const ContactForm = () => {
  const [label, setLabel] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setLabel("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "b339b866-9fa3-4bdc-bf2b-8c2ee8475968");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setLabel("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setLabel(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setTimeout(() => {
        setLabel("");
      }, 1600);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form className="max-w-xl mx-auto space-y-4" onSubmit={onSubmit}>
        {/* Name and Email */}
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border-2 border-[#e6c74a] focus:ring-0 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border-2 border-[#e6c74a] focus:ring-0 rounded"
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <textarea
            placeholder="Your Message"
            name="message"
            rows={6}
            className="w-full p-2 border-2 border-[#e6c74a] focus:ring-0 rounded"
            required
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <button
            type="submit"
            className="bg-[#bc6c25] order-2 md:order-1 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-[#611a00] transition"
          >
            Submit
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Submission Label */}
        {label.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="bg-stone-300 text-center inline p-1 px-4 rounded-md">
              {label}
            </p>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
