import React, { useState, useEffect } from "react";
import { StyledSkillBar } from "../../sections";

interface SkillProps {
  skill: string;
  skillRate: number;
}
const Skill: React.FC<SkillProps> = ({ skill, skillRate }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    if (width <= 600) {
      setResize(true);
    } else {
      setResize(false);
    }
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const progStyleWidth = {
    width: skillRate + "%",
  };

  const progStyleHeight = {
    height: skillRate + "%",
  };

  return (
    <StyledSkillBar>
      <small>{skill}</small>
      <div className="bar">
        <div
          className="progress"
          style={resize ? progStyleWidth : progStyleHeight}
        ></div>
      </div>
    </StyledSkillBar>
  );
};

export default Skill;
