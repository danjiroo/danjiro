import styled from "styled-components";

import FBIcon from "../../assets/images/fb.png";
import MSIcon from "../../assets/images/ms.png";
import Banner from "../../assets/images/banner.jpg";
import BannerAfter from "../../assets/images/banner-after.png";
import Home from "../../assets/images/home.png";
import HomeActive from "../../assets/images/home-active.png";
import MainBefore from "../../assets/images/main-before.png";
import Github from "../../assets/images/gh.png";
import Go from "../../assets/images/go.png";
import ZoomInIcon from "../../assets/images/zoom.png";

export const StyledLoader = styled.div`
  max-width: 1920px;
  height: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
`;

export const StyledLoaderSpan = styled.span`
  flex: 1;

  &:nth-child(1) {
    background: #a0c835;
  }

  &:nth-child(2) {
    background: #29b6bf;
  }
  &:nth-child(3) {
    background: #999999;
  }
`;

export const StyledHeader = styled.header`
  background: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 5;

  .loader {
    z-index: -1;
  }
`;

export const StyledHeaderContainer = styled.div`
  height: 88px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1260px) {
    padding: 0 15px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

export const StyledHeaderLogo = styled.div`
  max-width: 147px;
  margin-top: 20px;

  a {
    display: block;
    border-radius: 50%;
    z-index: 1;
    position: relative;
  }

  a img {
    border-radius: 50%;
    background: #fff;
  }

  @media only screen and (max-width: 600px) {
    img {
      max-width: 50px;
    }
  }
`;

export const StyledHeaderRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a,
  mark {
    color: #333;
    font-size: 18px;
  }

  mark {
    display: block;
    text-align: right;
    font-size: 20px;
    padding-top: 5px;
  }

  a:hover {
    color: #29b6bf;
  }

  @media only screen and (max-width: 600px) {
    mark {
      font-size: 16px;
    }

    .social_media {
      margin-left: 40px;
    }

    .social_media a {
      display: block;
      transform: scale(0.8);
      margin: -5px;
    }
  }

  @media only screen and (max-width: 350px) {
    a,
    mark {
      font-size: 15px;
    }
  }
`;

export const StyledHeaderSocialMediaContainer = styled.div`
  margin-left: 50px;

  a {
    position: relative;
    margin-left: 7px;
    display: inline-block;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  a:hover {
    opacity: 0.6;
  }

  a:before {
    position: relative;
    top: 0;
    left: 0;
    width: 40px;
    height: auto;
  }

  a:first-child:before {
    content: url(${FBIcon});
  }

  a:last-child:before {
    content: url(${MSIcon});
    top: 1px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 50px;
    margin: 5px 0;

    a {
      transform: scale(0.9);
    }

    a:first-child::before {
      top: 5px;
    }
  }
`;

export const StyledBanner = styled.div`
  margin: 0 auto;
  height: 780px;
  background: url(${Banner}) no-repeat center center/cover;
  background-attachment: fixed;

  @media only screen and (max-width: 1024px) {
    background-attachment: unset;
    background-position-y: -60px;
  }

  @media only screen and (max-width: 1000px) {
    height: 500px;
  }

  @media only screen and (max-width: 600px) {
    color: #fff;
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
      url(${Banner}) no-repeat center center/cover;
  }
`;

export const StyledBannerContainer = styled.div`
  position: relative;
  height: 780px;

  &::after {
    content: url(${BannerAfter});
    position: absolute;
    z-index: 3;
    top: -100px;
    right: -340px;
    width: 600px;
    overflow-x: hidden;
    border-radius: 0 0 0 76%;
  }

  @media only screen and (max-width: 1260px) {
    padding: 0 15px;

    &::after {
      right: -325px;
    }
  }

  @media only screen and (max-width: 1000px) {
    height: auto;
    &::after {
      overflow: hidden;
      height: 540px;
      border-radius: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    &::after {
      opacity: 0.9;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0px 10px;

    &::after {
      content: none;
    }
  }
`;

export const StyledBannerTitle = styled.div`
  padding-top: 200px;

  h1 {
    font-family: Georgia;
    font-weight: 100;
    font-size: 45px;
    line-height: 50px;
    text-transform: uppercase;
    color: #444;
  }

  h1 span {
    color: #a0c835;
  }

  h4 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    padding-left: 5px;
    padding-top: 10px;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 730px) {
    h1 {
      font-size: 32px;
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-top: 85px;
    text-align: center;

    h1 {
      font-size: 30px;
      line-height: 30px;
      color: #fff;
    }

    h4 {
      font-size: 19px;
    }
  }
`;

export const StyledNav = styled.nav`
  background: rgba(41, 182, 191, 0.7);
  margin-top: -60px;
  position: sticky;
  top: 0;
  z-index: 1;

  &.sticky {
    margin-top: 0;
    position: fixed;
    z-index: 5;
    width: 100%;
    background: linear-gradient(to left, rgb(41, 182, 191), #bedd6c);
  }

  @media only screen and (max-width: 1024px) {
    background: linear-gradient(to left, rgb(41, 182, 191), #bedd6c);
  }

  @media only screen and (max-width: 1000px) {
    .wrapper {
      justify-content: center;
    }
  }
`;

export const StyledNavList = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 60px;
  margin-right: 125px;

  & a:first-child {
    content: url(${Home});
    position: relative;
    top: 1px;
    cursor: pointer;
  }

  & a:first-child.active {
    content: url(${HomeActive});
  }

  & a:not(:first-child) {
    margin-left: 30px;
  }

  & a {
    color: #fff;
    font-family: Calibri;
    text-transform: uppercase;
    position: relative;
  }

  & a:not(:first-child)::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 4px;
    height: 15px;
    border-right: 1px solid #fff;
  }

  & a:hover,
  & a.active {
    color: #80ffff;
  }

  @media only screen and (max-width: 1000px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin: 5px;
    gap: 6px;

    a {
      width: 49%;
      margin-left: 0;
      border: 1px solid #ddd;
      padding: 7px;
    }

    & a:not(:first-child) {
      margin-left: 0;
    }

    & a:not(:first-child)::before {
      content: none;
    }

    & a:first-child,
    & a:first-child.active {
      content: "";
    }
  }

  @media only screen and (max-width: 500px) {
    li:not(:first-child) a::before {
      left: -8px;
      top: 5px;
      height: 9px;
    }
  }

  @media only screen and (max-width: 400px) {
    li:first-child a {
      top: 2px;
    }

    li:not(:first-child) a::before {
      left: -5px;
      top: 4px;
      height: 8px;
    }
  }
`;

export const StyledMain = styled.main`
  position: relative;

  h2 {
    font-family: Georgia;
    font-weight: 100;
    font-size: 42px;
    line-height: 50px;
    color: #a0c835;
  }

  h4 {
    font-size: 22px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    margin-bottom: 35px;
  }

  h2 {
    line-height: 50px;
  }

  p {
    line-height: 33px;
    margin-bottom: 15px;
  }

  a,
  a:active {
    color: teal;
  }

  @media only screen and (max-width: 600px) {
    p {
      text-align: justify;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 30px;
    }
    h4 {
      font-size: 20px;
    }
    .copyright q {
      display: block;
    }
  }
`;

export const StyledMainContainer = styled.main`
  padding: 110px 0;
  min-height: 500px;

  &::before {
    content: "";
    background: url(${MainBefore}) no-repeat center center/cover;
    position: absolute;
    width: 818px;
    height: 626px;
    left: -340px;
    top: 0;
    z-index: -1;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  &.main_con_full::before {
    opacity: 0.3;
  }

  &.home_con {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.home_con.main_left {
    float: none;
    margin: 0;
  }

  &.home_con.main_right {
    width: 50%;
    padding-top: 0;
  }

  @media only screen and (max-width: 1260px) {
    padding: 110px 15px;

    &::before {
      left: -350px;
    }
  }

  @media only screen and (max-width: 1000px) {
    &::before {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 60px 25px;
    flex-direction: column;
  }
`;

export const StyledMainLeft = styled.div`
  float: left;
  margin: 0 160px 70px 0;

  img {
    border-radius: 50%;
    background: #a0c835;
    padding: 10px;
  }

  @media only screen and (max-width: 1600px) {
    margin: 70px 150px 70px 50px;
  }

  @media only screen and (max-width: 1260px) {
    margin: 70px 70px 70px 30px;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 40%;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    width: 250px;
    float: none;
    margin: 0 auto;
  }
`;

export const StyledMainRight = styled.div`
  @media only screen and (max-width: 1000px) {
    padding-top: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-top: 20px;
    text-align: center;

    &.home {
      width: 100%;
      padding-top: 20px;
    }
  }
`;

export const StyledFooter = styled.footer`
  background: #2d2d2d;
  color: #fff;

  .loader {
    top: -20px;
    position: relative;
  }
`;

export const StyledFooterContainer = styled.div`
  padding: 50px 10px;
  text-align: center;

  a.ghub {
    position: relative;
    width: 35px;
    height: 35px;
    display: block;
    margin: 0 auto 15px;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  a.ghub::before {
    content: "";
    background: url(${Github}) no-repeat center center/cover;
    width: 35px;
    height: 35px;
    display: block;
  }

  a.ghub:hover {
    opacity: 0.6;
  }
`;

export const StyledFooterCopyright = styled.div`
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 20px;

  @media only screen and (max-width: 400px) {
    q.qnone {
      display: none;
    }
  }
`;

export const StyledPortfolio = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

  li {
    position: relative;
    width: 19%;
    margin: 4px;
    box-shadow: 0 2px 5px rgba(41, 161, 191, 0.5);
  }

  li a {
    display: none;
    position: absolute;
    bottom: 45px;
    right: 5px;
    width: 35px;
    height: 35px;
    background: url(${Go}) no-repeat center center/cover;
    z-index: 1;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  li figure {
    overflow: hidden;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  li img {
    display: block;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  li span {
    display: block;
    background: #777;
    color: #fff;
    font-size: 15px;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    z-index: 1;
  }

  li small {
    display: none;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 34px;
    right: 0;
    text-align: center;
    font-size: 13px;
    color: #fff;
    background: linear-gradient(
      to top,
      rgb(30, 143, 151),
      rgba(152, 211, 129, 0.85)
    );
    padding: 0 15px;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  &:hover li figure {
    opacity: 0.8;
  }

  li:hover figure {
    opacity: 1;
  }

  li:hover a {
    display: block;
  }

  li:hover span {
    letter-spacing: 1px;
    background: rgb(30, 143, 151);
  }

  li:hover img {
    transform: scale(1.1);
  }

  li:hover small {
    display: flex;
  }

  a:hover {
    filter: hue-rotate(90deg);
  }

  &.achievements a {
    background: url(${ZoomInIcon}) no-repeat center center/cover !important;
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    li {
      width: 23.5%;
    }
  }

  @media only screen and (max-width: 800px) {
    li {
      width: 31.5%;
    }
    li span {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 600px) {
    li {
      width: 47%;
    }
  }

  @media only screen and (max-width: 500px) {
    li span {
      font-size: 13px;
    }
    li a {
      width: 30px;
      height: 30px;
    }
  }

  @media only screen and (max-width: 400px) {
    li {
      width: 100%;
    }

    &:hover li figure {
      opacity: 1;
    }
  }
`;

export const StyledGraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 35px auto;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const StyledSkillBar = styled.div`
  width: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .bar {
    width: 20px;
    height: 150px;
    background: #888;
    position: relative;
    box-shadow: 0 1px 1px rgba(41, 182, 191, 0.7);
  }

  .progress {
    height: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #11aabb;
    animation: 3s beforeLoad forwards;
  }

  small {
    position: absolute;
    bottom: -30px;
    font-size: 14px;
  }

  @keyframes beforeLoad {
    from {
      height: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;

    .bar {
      justify-content: space-between;
      flex-direction: row;
      height: 20px;
      width: calc(100% - 85px);
    }

    .progress {
      transform: none;
      top: 0;
      height: auto !important;
    }

    small {
      position: static;
      margin-top: 0;
      width: 75px;
    }

    @keyframes beforeLoad {
      from {
        width: 0;
      }
    }
  }
`;

export const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  overflow: hidden;
`;

export const StyledModalContainer = styled.div`
  width: 500px;
  height: auto;
  padding-bottom: 40px;
  max-width: 95%;
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 15px;

  @media screen and (max-height: 650px) {
    top: 7vh;
  }
`;

export const StyledModalClose = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 0 15px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  padding: 00;
  background: linear-gradient(to right, #11aabb, teal);
  color: #fff;
  font-size: 20px;

  &:hover {
    background: linear-gradient(to right, #11bb74, teal);
  }

  p {
    line-height: 27px;
    text-align: center !important;
  }
`;

export const StyledModalBody = styled.div`
  img {
    width: 100%;
    height: auto;
    border: 0;
    border-radius: 0 15px 0 0;
    position: relative;
    z-index: -1;
    background: #fff;
    -webkit-box-shadow: 2px 4px 18px rgba(157, 179, 179, 0.5);
    box-shadow: 2px 4px 18px rgba(157, 179, 179, 0.5);
  }
`;

export const StyledModalContent = styled.div`
  color: #333;
  padding: 20px 15px;
  text-align: center;
  font-family: Calibri;
  background: #fff;
  margin-top: -4px;
  border-radius: 0 0 0 15px;

  h3 {
    color: #0a98a1;
    margin-bottom: 10px;
  }

  p {
    text-align: center !important;
    margin-bottom: 0 !important;
    line-height: 22px !important;
  }
`;
