import React from "react";
import styled from "styled-components";

const Background = styled.div`
    background-color: #eea849;
    color: ivory;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100px;
    font-size: 20px;
`

const Menu = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 5px;
    @media (max-width: 770px) {
      margin: 0 40px;
    }
    @media (max-width: 670px) {
      margin: 0 30px;
    }
    @media (max-width: 530px) {
      margin: 0 25px;
      font-size: 18px;
    }
    @media (max-width: 470px) {
      margin: 0 20px;
      font-size: 15px;
    }
`


const Menubar =()=> {
    return (
      <Background>
        <Menu>챗봇소개</Menu>
        <Menu>테라모션</Menu>
        <Menu>마이페이지</Menu>
        <Menu>로그아웃</Menu>
      </Background>
    );
  }
  
  export default Menubar;