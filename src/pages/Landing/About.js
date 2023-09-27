import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import icon from "../../assets/mainIcon.png";


const images = [
  icon,
  'image2.jpg',
  'image3.jpg',
  // 추가 이미지 경로들
];

function App() {
  const [index, setIndex] = useState(0);

  // 다음 이미지로 이동하는 함수
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // 3초마다 다음 슬라이드로 이동
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000);
  
  return () => clearInterval(interval);
}, [nextSlide]);
  return (
    <Carousel activeIndex={index} onSelect={() => {}}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${idx}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default App;
