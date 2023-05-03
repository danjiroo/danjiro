import React from "react";
import { Slide } from "react-awesome-reveal";

import { StyledMainContainer } from "../sections";

const NoMatch: React.FC = () => {
  return (
    <StyledMainContainer className="main_con_full" id="404">
      <div className="main_full">
        <Slide direction="right" cascade>
          <h2>404</h2>
          <h4>Page Not Found</h4>
        </Slide>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          excepturi eum in. Officiis, praesentium. Magnam facilis laboriosam
          voluptas pariatur odit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          excepturi eum in. Officiis, praesentium. Magnam facilis laboriosam
          voluptas pariatur odit.
        </p>
      </div>
    </StyledMainContainer>
  );
};

export default NoMatch;
