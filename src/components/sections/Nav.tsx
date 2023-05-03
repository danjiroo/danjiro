import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { StyledWrapper } from "../../styles";
import { StyledNav, StyledNavList } from "./";

const Nav: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var navi = document.querySelector("nav");

      if (!navi) return;

      if (width >= 1001 && window.pageYOffset > 808) {
        navi.classList.add("sticky");
      } else if (width < 1001 && window.pageYOffset > 530) {
        navi.classList.add("sticky");
      } else if (width < 601 && window.pageYOffset > 330) {
        navi.classList.add("sticky");
      } else {
        navi.classList.remove("sticky");
      }
    });
  }, []);

  const handleClickScrollTo = () => {
    let mainSec = document.querySelector("main");

    let offsetMain = (mainSec && mainSec.offsetTop - 50) ?? 0;

    if (width >= 1001) {
      window.scrollTo(0, offsetMain);
    } else if (width < 1001) {
      window.scrollTo(0, offsetMain);
    } else if (width < 601) {
      console.log(window.pageYOffset);
      window.scrollTo(0, offsetMain);
    } else {
      alert("nothing");
    }
  };

  return (
    <StyledNav>
      <StyledWrapper className="wrapper flex justify-flex-end align-center">
        <StyledNavList>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={handleClickScrollTo}>
            About Me
          </NavLink>

          <NavLink to="/portfolio" onClick={handleClickScrollTo}>
            Portfolio
          </NavLink>

          <NavLink to="/skills" onClick={handleClickScrollTo}>
            Skills
          </NavLink>

          <NavLink to="/achievements" onClick={handleClickScrollTo}>
            Achievements
          </NavLink>
        </StyledNavList>
      </StyledWrapper>
    </StyledNav>
  );
};

export default Nav;
