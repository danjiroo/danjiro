import React from "react";

import { StyledWrapper } from "../../styles";
import {
  Loader,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterCopyright,
} from "./";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledFooterContainer>
          <a
            className="ghub"
            href="https://github.com/codeyuri"
            target="_blank"
          ></a>
          <StyledFooterCopyright>
            Copyright<q></q>
            <q className="qnone"> | </q>All Rights Reserved<q></q>
            <q className="qnone"> | </q>2020
          </StyledFooterCopyright>
        </StyledFooterContainer>
      </StyledWrapper>
      <Loader />
    </StyledFooter>
  );
};

export default Footer;
