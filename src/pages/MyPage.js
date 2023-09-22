import React from "react";
import styled from "styled-components";
import Menubar from "../components/Menubar";

const Background = styled.div`
  height: 100vh;
  background-color: ivory;
`


const MyPage =()=> {
    return (
      <Background>
        <Menubar />
        마이페이지
      </Background>
    );
  }
  
  export default MyPage;