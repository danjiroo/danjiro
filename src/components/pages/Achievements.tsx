import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

import Image0 from "../../assets/images/achievements/btm-img0.jpg";
import Image1 from "../../assets/images/achievements/btm-img1.jpg";
import Image2 from "../../assets/images/achievements/btm-img2.jpg";
import Image3 from "../../assets/images/achievements/btm-img3.jpg";

import { StyledMainContainer, StyledPortfolio } from "../sections";

import Modal from "./split/Modal";

interface Projects {
  id: number;
  title: string;
  src: string;
  alt: string;
  desc: string;
  url: string;
}

const projects: Projects[] = [
  {
    id: 1,
    title: "Top 1 RWC Rating",
    src: Image1,
    alt: "certificate for top 1 RWC rating and least QA errors",
    desc: "Proweaver, Inc. - Top 1 Routine Website Check (RWC) rating and least QA errors.",
    url: ":javascript;",
  },
  {
    id: 2,
    title: "Top Performer",
    src: Image2,
    alt: "certificate - top performer for december 2019",
    desc: "Proweaver, Inc. - Top Performer for the month of December, 2019.",
    url: "",
  },
  {
    id: 3,
    title: "Top Performer",
    src: Image3,
    alt: "certificate - top performer for february 2020",
    desc: "Proweaver, Inc. - Top Performer for the month of February, 2020.",
    url: "",
  },
  {
    id: 4,
    title: "Employee of the Month",
    src: Image0,
    alt: "certificate - employee for the month of March 2021",
    desc: "DNA Micro Software, Inc. - Employee for the month of March, 2021.",
    url: "",
  },
  {
    id: 5,
    title: "Employee of the Month",
    src: Image0,
    alt: "certificate - employee for the month of April 2021",
    desc: "DNA Micro Software, Inc. - Employee for the month of April, 2021.",
    url: "",
  },
];

const Achievements: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [desc, setDesc] = useState("");

  const handleClick = (item: Projects) => {
    setIsOpen(true);

    setTitle(item.title);
    setSrc(item.src);
    setAlt(item.alt);
    setDesc(item.desc);
  };

  return (
    <StyledMainContainer className="main_con_full">
      <div>
        <Slide direction="right" cascade>
          <h2>Achievements</h2>
          <h4>It's always seems impossible until it's done</h4>
        </Slide>
        <p>My achievements as a Web Developer.</p>
      </div>
      <StyledPortfolio className="achievements">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <figure>
                <img src={project.src} alt={project.alt} />
              </figure>
              <a onClick={() => handleClick(project)}></a>
              <span>{project.title}</span>
              <small>{project.desc}</small>
            </li>
          );
        })}
      </StyledPortfolio>
      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          src={src}
          alt={alt}
          desc={desc}
          title={title}
          isOpen={isOpen}
        />
      ) : null}
    </StyledMainContainer>
  );
};

export default Achievements;
