//해야할 것
//로그아웃 로직!

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Background = styled.div`
    background-color: #eea849;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 10vh;
    font-size: 20px;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const Menu = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 5px;
    color: ivory;
    font-decoration: none;
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
        <LinkStyled to="/"><Menu>챗봇소개</Menu></LinkStyled>
        <LinkStyled to="http://www.theramotion.co.kr/" target="_blank"><Menu>테라모션</Menu></LinkStyled>
        <LinkStyled to="/mypage"><Menu>마이페이지</Menu></LinkStyled>
        <Menu>로그아웃</Menu>
      </Background>
    );
  }
  
  export default Menubar;