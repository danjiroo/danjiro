import React from "react";
import { NavLink } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

import Dan from "../../assets/images/dan-about.png";

import {
  StyledMainContainer,
  StyledMainLeft,
  StyledMainRight,
} from "../sections";

const Home: React.FC = () => {
  return (
    <StyledMainContainer className="home_con">
      <StyledMainLeft>
        <figure>
          <img src={Dan} alt="dan quesada iii" />
        </figure>
      </StyledMainLeft>
      <StyledMainRight className="home">
        <Slide direction="right" cascade>
          <h2>codeyuri</h2>
          <h4>Welcome to my site!</h4>
        </Slide>
        <p>
          This site contains my current and previous projects created with
          HTML5, CSS3, JavaScript, TypeScript &amp; and React.
        </p>
        <p>
          Also, if you would like to know me more, click{" "}
          <NavLink to="/about">here!</NavLink>
        </p>
        <p>Happy viewing!</p>
      </StyledMainRight>
    </StyledMainContainer>
  );
};

export default Home;
