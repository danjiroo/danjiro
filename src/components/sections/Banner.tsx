import React from "react";
import { Fade } from "react-awesome-reveal";

import { StyledWrapper } from "../../styles";
import { StyledBanner, StyledBannerContainer, StyledBannerTitle } from "./";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <StyledWrapper>
        <StyledBannerContainer>
          <StyledBannerTitle>
            <Fade direction="left" cascade>
              <h1>
                <span>Dan</span> Quesada
              </h1>
              <h4>Frontend Developer</h4>
            </Fade>
          </StyledBannerTitle>
        </StyledBannerContainer>
      </StyledWrapper>
    </StyledBanner>
  );
};

export default Banner;
