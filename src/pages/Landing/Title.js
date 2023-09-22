import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import icon from "../../assets/mainIcon.png";

const TitlePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ivory;
`

const OrangeBox = styled.div`
  background-color: #eea849;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  float: left;
  @media (max-width: 550px) {
    width: 30%;
  }
  @media (max-width: 400px) {
    width: 40%;
  }
`

const Icon = styled.img`
  margin-top: 100px;
  width: 60%;
`

const Des = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #343a40;
  @media (max-width: 550px) {
    font-size: 30px;
  }
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

const AboutContainer = styled.div`
  overflow-y: auto; 
  flex: 1; 
`

const Title =()=> {
    return (
      <TitlePage>
        <OrangeBox>
          <Icon src={icon}></Icon>
        </OrangeBox>
        <Des>
          당신의 마음건강을 위한<br/> AI 심리상담 챗봇
        </Des>
          <Link to="/Login">
            <Btn>챗봇 사용 ➜</Btn>
          </Link>
      </TitlePage>
    );
  }
  
  export default Title;