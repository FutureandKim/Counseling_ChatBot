import React from "react";
import styled from "styled-components";
import Menubar from "../../components/Menubar";
import ChatProfile from "./Chat";

const Background = styled.div`
  height: 100vh;
  background-color: ivory;
`


function Main() {
    return (
      <Background>
        <Menubar />
        <ChatProfile />
      </Background>
    );
  }
  
  export default Main;