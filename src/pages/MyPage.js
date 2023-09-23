import React from "react";
import styled from "styled-components";
import Menubar from "../components/Menubar";

const Background = styled.div`
  height: 100vh;
  background-color: ivory;
`

const TitleBox = styled.div`
  width: 70%;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  color:  #949494;
  margin: auto;
  margin-top: 30px;
  border-top: 2.5px solid #949494;
  border-bottom: 2.5px solid #949494;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 300px) {
    font-size: 10px;
    padding: 15px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    padding: 25px;
  }
`
const Bold = styled.span`
  font-size: 30px;
  color: #808080;
  font-family:"Suite_Heavy";
  @media (max-width: 300px) {
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    font-size: 35px;
  }
`

const MyPage =()=> {
    return (
      <Background>
        <Menubar />
        <TitleBox>
          <Bold>BrainStorming</Bold>
          감정과 상태를 스스로 기록하고 관리해보세요.
        </TitleBox>

      </Background>
    );
  }
  
  export default MyPage;