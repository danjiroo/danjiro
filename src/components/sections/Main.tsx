import React from "react";
import { Routes, Route } from "react-router-dom";

import { StyledWrapper } from "../../styles";
import { StyledMain } from "./";

import {
  Home,
  About,
  Portfolio,
  Skills,
  Achievements,
  NoMatch,
} from "../pages";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <StyledWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route element={<NoMatch />} />
        </Routes>
      </StyledWrapper>
    </StyledMain>
  );
};

export default Main;
