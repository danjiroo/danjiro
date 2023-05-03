import React from "react";
import { Slide } from "react-awesome-reveal";

import { StyledGraph, StyledMainContainer } from "../sections";

import Skill from "./split/Skill";

const Skills: React.FC = () => {
  return (
    <StyledMainContainer className="main_con_full">
      <div>
        <Slide direction="right" cascade>
          <h2>Skills</h2>
          <h4>Current skills I have learned</h4>
        </Slide>
        <p>This page is under construction.</p>
        <StyledGraph>
          <Skill skill={"HTML"} skillRate={89} />
          <Skill skill={"CSS"} skillRate={84} />
          <Skill skill={"JavaScript"} skillRate={80} />
          <Skill skill={"TypeScript"} skillRate={75} />
          <Skill skill={"React"} skillRate={85} />
          <Skill skill={"Styled Components"} skillRate={90} />
          <Skill skill={"Redux"} skillRate={70} />
          <Skill skill={"Git"} skillRate={80} />
        </StyledGraph>
      </div>
    </StyledMainContainer>
  );
};

export default Skills;
