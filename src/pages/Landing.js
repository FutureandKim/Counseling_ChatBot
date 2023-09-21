import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import icon from "../assets/mainIcon.png";
import About from "./About";
import Title from "./Title";

const LandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TitleWrapper = styled.div`
  flex-grow: 1;
`

function Landing() {
  return (
    <LandingPage>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
        <About />
    </LandingPage>
  );
}
  
  export default Landing;