import React from "react";
import PrimaryInfo from "../atoms/PrimaryInfo";
import ContactForm from "../molecules/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="py-14 bg-[#fefae0]">
      <div className="max-w-sm sm:max-w-md md:max-w-screen-xl mx-auto">
        <PrimaryInfo
          heading={"Connect with me"}
          subHeading={"Get in touch"}
          para={
            "I'd lover to hear from you. if you have any quetions, comments or feedback, please use the form below."
          }
        />

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
