import React from "react";
import { Slide } from "react-awesome-reveal";

import Dan from "../../assets/images/dan.png";

import {
  StyledMainContainer,
  StyledMainLeft,
  StyledMainRight,
} from "../sections";

const About: React.FC = () => {
  return (
    <StyledMainContainer id="ab">
      <StyledMainLeft>
        <figure>
          <img src={Dan} alt="dan quesada iii" />
        </figure>
      </StyledMainLeft>
      <StyledMainRight>
        <Slide direction="right" cascade>
          <h2>Hi, I'm Dan!</h2>
          <h4>A Web Developer | Designer | Otaku</h4>
        </Slide>
        <p>
          Living in the programming world for four years now, as a Frontend
          Developer, I was able to create a faster, modern, and responsive web
          experience keeping users in mind. I was able to enhance my thinking
          skills and learn new technologies as a developer.
        </p>
        <p>
          Once a Full Stack Developer, I was. But the force within me collapsed.
          Kidding. Honestly, it was a challenging job for me and I don't hate
          doing both actually. However, I can't really replace my love on
          creating user interfaces and design through code!
        </p>
        <p>
          Aside from coding, in my free time, I used to play online games like
          League of Legends, Mobile Legends, etc. Right now, I only watched
          animes and read manga! I really loved One Piece. I even named my first
          son, Luffy! Because, why not? I also love listening to anime songs and
          songs from Twice!
        </p>
        <p>
          Anyway, I think that's all about me for now. If you have any questions
          or concerns, feel free to contact me.
        </p>
      </StyledMainRight>
    </StyledMainContainer>
  );
};

export default About;
