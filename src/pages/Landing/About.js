import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AboutBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`

const About = () => {
  return (
    <AboutPage>
      <Carousel>
        <AboutBox>
          <img src="" alt="이미지 1" />
        </AboutBox>
        <AboutBox>
          <img src="" alt="이미지 2" />
        </AboutBox>
      </Carousel>
    </AboutPage>
  );
}

export default About;