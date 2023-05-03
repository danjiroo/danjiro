import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { StyledAppContainer, RootStyles } from "./styles";

import { Header, Banner, Nav, Main, Footer } from "./components/sections/";

const App: React.FC = () => {
  return (
    <>
      <RootStyles />
      <StyledAppContainer>
        <Router>
          <Header />
          <Banner />
          <Nav />
          <Main />
          <Footer />
        </Router>
      </StyledAppContainer>
    </>
  );
};

export default App;
