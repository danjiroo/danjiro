import React from "react";
import { Slide, SlideProps } from "react-awesome-reveal";

import { StyledLoader, StyledLoaderSpan } from "./";

const Loader: React.FC<SlideProps> = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <StyledLoader className="loader">
        <StyledLoaderSpan />
        <StyledLoaderSpan />
        <StyledLoaderSpan />
      </StyledLoader>
    </Slide>
  );
};

export default Loader;
