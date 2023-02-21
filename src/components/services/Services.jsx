import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> User Stories</p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> User Testing </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Content Strategy </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Customer Experience Consulting </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Brand & Design System Development </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Design & Build a Custom Website </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Support & Maintenance</p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Web Hosting Service</p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Web Programming </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Web Optimization </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Search Engine Optimization </p>
            </li>
          </ul>
        </article>
        {/* End of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Blogging & Articles </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Visual Content </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Website Content </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Product Descriptions </p>
            </li>
            <li>
              <div>
                <BiCheck className="service__list-icon" />
              </div>
              <p> Mailers & Newsletters </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
