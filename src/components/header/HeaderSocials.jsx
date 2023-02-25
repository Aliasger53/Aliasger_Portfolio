import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
