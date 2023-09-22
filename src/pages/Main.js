import React from "react";
import styled from "styled-components";
import Menubar from "../components/Menubar";

const Background = styled.div`
  height: 100vh;
  background-color: ivory;
`


function Main() {
    return (
      <Background>
        <Menubar />
        메인페이지
      </Background>
    );
  }
  
  export default Main;