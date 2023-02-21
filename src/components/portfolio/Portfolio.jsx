import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Black Jack Game",
    github: "https://github.com/Aliasger53/Black-Jack-Game",
    demo: "https://aliasger53.github.io/Black-Jack-Game/",
  },
  {
    id: 2,
    image: IMG2,
    title: "To Do List",
    github: "https://github.com/Aliasger53/Todo-List",
    demo: "https://aliasger53.github.io/Todo-List/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Myntra Clone",
    github: "https://github.com/Aliasger53/Black-Jack-Game",
    demo: "https://aliasger53.github.io/Black-Jack-Game/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Image Upload Website",
    github: "https://github.com/Aliasger53/Black-Jack-Game",
    demo: "https://aliasger53.github.io/Black-Jack-Game/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/Aliasger53/Black-Jack-Game",
    demo: "https://aliasger53.github.io/Black-Jack-Game/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates in Figma",
    github: "https://github.com/Aliasger53/Black-Jack-Game",
    demo: "https://aliasger53.github.io/Black-Jack-Game/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={image} alt={title} />
            </div>
            <h3> {title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
