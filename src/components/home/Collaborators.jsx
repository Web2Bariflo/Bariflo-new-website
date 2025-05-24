import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for infinite scroll
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  h1{
  text-align: center;
  padding: 50px;
     @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(200px * 20 * 2); /* 20 logos repeated twice */
  animation: ${scroll} 40s linear infinite;
`;

const Slide = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  img {
    max-width: 100%;
    max-height: 80px;
    object-fit: contain;
    transition: filter 0.3s ease;

    @media (max-width: 768px) {
      max-height: 60px;
    }
  }
`;

const logos = [
  '/images/website images and icon-20250524T084126Z-1-001/image 6.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 16.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 18.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 19.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 20.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 22.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 28.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 29.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 30.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 31.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 32.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 33.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 35.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 36.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 37.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 38.png',
  '/images/website images and icon-20250524T084126Z-1-001/image 39.png',
];

const Collaborators = () => {
  return (
    <SliderWrapper>
      <h1>COLLABORATIONS</h1>
      <SlideTrack>
        {[...logos, ...logos].map((logo, index) => (
          <Slide key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </Slide>
        ))}
      </SlideTrack>
    </SliderWrapper>
  );
};

export default Collaborators;
