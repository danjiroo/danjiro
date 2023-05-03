import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { StyledWrapper } from "../../styles";
import {
  Loader,
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderRightContainer,
  StyledHeaderSocialMediaContainer,
} from "./";

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <StyledWrapper>
          <StyledHeaderContainer>
            <StyledHeaderLogo>
              <NavLink to="/">
                <img src={Logo} alt="dan quesada logo" />
              </NavLink>
            </StyledHeaderLogo>
            <StyledHeaderRightContainer>
              <div className="head_info">
                <a
                  href="mailto:danquesadaiii@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  danquesadaiii@gmail.com
                </a>
                <mark>0905-813-2586</mark>
              </div>
              <StyledHeaderSocialMediaContainer>
                <a
                  href="https://www.facebook.com/mulespro"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <a
                  href="https://m.me/mulespro"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </StyledHeaderSocialMediaContainer>
            </StyledHeaderRightContainer>
          </StyledHeaderContainer>
        </StyledWrapper>
        <Loader direction={"right"} />
      </StyledHeader>
    </>
  );
};

export default Header;
