import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Aliasger
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Footer socials */}

      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/aliasger-burhanpurwala-432783b4"
          target="_black"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Aliasger53" target="_black">
          <BsGithub />
        </a>
        <a href="https://facebook.com/aliasger.burhanpurwala.9" target="_black">
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/aliasgerburhanpurwala/"
          target="_black"
        >
          <BsInstagram />
        </a>
        <a href="mailto:aliasgerburhanpurwala857@gmail.com">
          <MdOutlineEmail />
        </a>
        <a href="tel:+91 8793987499">
          <FiPhoneCall />
        </a>
        <a href="https://wa.me/+918793987499" target="_black">
          <BsWhatsapp />
        </a>
      </div>

      {/* Footer copyrights */}

      <div className="footer__copyright">
        <small>
          &copy; Aliasger Burhanpurwala <br /> All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
