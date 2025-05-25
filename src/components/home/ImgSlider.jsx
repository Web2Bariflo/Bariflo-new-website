import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const ImageWrapper = styled.div`
  img {
    width: 100vw;
    height: 80vh;
    object-fit: cover;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 20px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const PrevArrow = styled(ArrowButton)`
  left: 20px;
`;

const NextArrow = styled(ArrowButton)`
  right: 20px;
`;

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
  "https://images.unsplash.com/photo-1587502537745-84e3a3d93d8e",
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <PrevArrow onClick={onClick}>
      <FaArrowLeft size={20} color="#fff" />
    </PrevArrow>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <NextArrow onClick={onClick}>
      <FaArrowRight size={20} color="#fff" />
    </NextArrow>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((img, index) => (
          <ImageWrapper key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
