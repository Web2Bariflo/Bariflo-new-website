import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 40px auto;
`;

const ImageWrapper = styled.div`
  padding: 10px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
  "https://images.unsplash.com/photo-1587502537745-84e3a3d93d8e",
];

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
