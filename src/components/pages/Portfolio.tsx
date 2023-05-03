import React from "react";
import { Slide } from "react-awesome-reveal";

import Netlify from "../../assets/images/projects/codeyuri-netlify.jpg";
import Github from "../../assets/images/projects/codeyuri-github.jpg";
import Shopyuri from "../../assets/images/projects/shopyuri.jpg";
import Covid from "../../assets/images/projects/covid.jpg";
import Pos from "../../assets/images/projects/pos.jpg";
import Userlist from "../../assets/images/projects/userlist.jpg";
import Todo from "../../assets/images/projects/todo.jpg";
import Itech from "../../assets/images/projects/itech.jpg";

import { StyledMainContainer, StyledPortfolio } from "../sections";

const projects = [
  {
    id: 1,
    title: "Portfolio 2.0",
    src: Netlify,
    alt: "codeyuri portfolio netlify",
    url: "https://codeyuri.netlify.app",
    desc: "This is my new portfolio launched in Netlify. Created with React + Vite + TS.",
  },
  {
    id: 2,
    title: "Portfolio 1.0",
    src: Github,
    alt: "codeyuri portfolio github",
    url: "https://codeyuri.github.io",
    desc: "My first portfolio created with HTML, CSS and JavaScript (jQuery) for the effects.",
  },
  {
    id: 3,
    title: "Shopyuri App",
    src: Shopyuri,
    alt: "shopyuri app",
    url: "https://shopyuri.herokuapp.com",
    desc: "A simple shopping list app with user authentication. Created with the MERN stack.",
  },
  {
    id: 4,
    title: "Covid Tracker App",
    src: Covid,
    alt: "covid tracker app",
    url: "https://codeyuri.github.io/covid",
    desc: "A Coronavirus tracker with graphs and comparison functionality.",
  },
  {
    id: 5,
    title: "Mini POS System",
    src: Pos,
    alt: "mini pos system app",
    url: "https://codeyuri.github.io/pos",
    desc: "A simple POS static system. And yes, I love teal. Lol",
  },
  {
    id: 6,
    title: "Userlist",
    src: Userlist,
    alt: "userlist app",
    url: "https://codeyuri.github.io/portfolio/userlist",
    desc: "Did the same with my first react app, however I tried it with multiple inputs.",
  },
  {
    id: 7,
    title: "Todo",
    src: Todo,
    alt: "todo app",
    url: "https://codeyuri.github.io/portfolio/todo",
    desc: "My first react app, just a simple todo list.",
  },
  {
    id: 8,
    title: "Itech School System",
    src: Itech,
    alt: "itech school management system",
    url: "http://itech-system.000webhostapp.com/itech",
    desc: "My 2018 school project created with PHP and designed with Bootstrap.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <StyledMainContainer className="main_con_full">
      <div>
        <Slide direction="right" cascade>
          <h2>Portfolio</h2>
          <h4>Outdated projects.</h4>
        </Slide>
        <p>Created with ReactJS, HTML5, CSS3, and JavaScript.</p>
        <StyledPortfolio>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <figure>
                  <img src={project.src} alt={project.alt} />
                </figure>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <span>{project.title}</span>
                <small>{project.desc}</small>
              </li>
            );
          })}
        </StyledPortfolio>
      </div>
    </StyledMainContainer>
  );
};

export default Portfolio;
