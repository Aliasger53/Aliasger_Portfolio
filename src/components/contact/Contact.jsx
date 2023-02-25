import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:aliasgerburhanpurwala857@gmail.com" target="_blank">
              <h5>aliasgerburhanpur wala857@gmail.com</h5>
            </a>
          </article>
          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Contact No</h4>
            <a href="tel:+91 8793987499">
              <h5>+91 87939 87499</h5>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+918793987499" target="_blank">
              <h5>+91 87939 87499</h5>
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
