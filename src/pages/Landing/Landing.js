import React from "react";
import styled from "styled-components";
import About from "./About";
import Title from "./Title";
import {Link} from "react-router-dom";

const LandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  height: 100vh;
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const Btn = styled.button`
  position: absolute; 
  right: 80px; 
  bottom: 80px;
  width: 150px;
  height: 60px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.2);
  transition-duration: 0.2s;
  &:active {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  }
`
function Landing() {
  return (
    <LandingPage>
      <ContentWrapper>
        <Title />
      </ContentWrapper>
      <Link to="/Login"><Btn>챗봇 사용 ➜</Btn></Link>
    </LandingPage>
  );
}
  
  export default Landing;