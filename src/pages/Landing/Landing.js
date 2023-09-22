import React from "react";
import styled from "styled-components";
import About from "./About";
import Title from "./Title";

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
function Landing() {
  return (
    <LandingPage>
      <ContentWrapper>
        <Title />
      </ContentWrapper>
      <ContentWrapper>
        <About />
      </ContentWrapper>
    </LandingPage>
  );
}
  
  export default Landing;