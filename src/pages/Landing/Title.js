import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../../assets/mainIcon.png";

const TitlePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ivory;
  overflow-x: hidden;
`;

const OrangeBox = styled.div`
  background-color: #eea849;
  width: 20%;
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
`;

const Icon = styled.img`
  margin-top: 100px;
  width: 60%;
`;

const Des = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #343a40;
  white-space: nowrap; /* 줄 바꿈 방지 */
  overflow: hidden; /* 오버플로우 숨김 */
  transform: translateX(${(props) => (props.slideIn ? "0" : "100%")}); /* 슬라이드 효과 적용 */
  transition: transform 1s ease; /* 트랜지션 설정 */

  @media (max-width: 550px) {
    font-size: 30px;
  }
`;

const aboutTexts = [
  {
    text:  (
      <>
        당신의 마음건강을 위한<br />AI 심리상담 챗봇
      </>
    ),
    image: icon, // 이미지 추가
  },
  {
    text: "다른 내용 1",
    image: icon,
  },
  {
    text: "다른 내용 2",
    image: icon,
  },
];

const Title = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIn(false); // 슬라이드 아웃
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutTexts.length);
        setSlideIn(true); // 슬라이드 인
      }, 500); // 슬라이드 아웃 후 0.5초 뒤에 슬라이드 인
    }, 3000);

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, []);

  return (
    <TitlePage>
      <OrangeBox>
        <Icon src={icon}></Icon>
      </OrangeBox>
      <Des slideIn={slideIn}>{aboutTexts[currentIndex].text}</Des>
    </TitlePage>
  );
};

export default Title;
