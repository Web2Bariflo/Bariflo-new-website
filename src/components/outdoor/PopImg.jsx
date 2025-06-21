import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import { hotspots } from "../../data/ProducData";

const popEffect = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;
const floatInRight = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  50% {
    transform: translateX(-10px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  margin-top: 80px;
  margin-bottom: 10rem;
  margin-left: 12rem;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 4rem;
    padding: 0 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const MainImage = styled.img`
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${(props) =>
    props.popped &&
    `
    transform: scale(0.95);
    opacity: 1.0;
  `}

  // &:hover {
  //   transform: scale(1.05); /* Zoom effect on hover */
  // }side image and make all responsive for mobile sc

  width: 100%;
  max-width: 800px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

const PopOut = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 20px;
  z-index: 10;
  animation: ${popEffect} 0.3s ease-out forwards;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PopText = styled.div`
  color: #333;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 11rem;
  max-width: 400px;
    h2 {
    color: #00bcd4;
    padding: 1rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
      padding: 0.5rem;
    }
  }

  ul {
    padding-left: 1.2rem;
    margin: 0.5rem 0;
  }

  li {
    font-weight: normal;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    opacity: 0;
    animation: ${floatInRight} 0.6s ease-out forwards;
    animation-delay: calc(0.3s * var(--i));
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const PoppedImage = styled.img`
  width: 600px;
  border-radius: 10px;
`;

const Hotspot = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #e02d2d;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(224, 45, 45, 0.5);
  transition: transform 0.2s;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: white;

  &:hover {
    transform: scale(1.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(224, 45, 45, 0.6);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 1.8s infinite ease-out;
    z-index: -1;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.8;
    }
    70% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 10px;

    &::after {
      width: 100%;
      height: 100%;
    }
  }
`;

const MobileDrawer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ visible }) => (visible ? "flex" : "none")};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: white;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    z-index: 999;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    animation: ${slideUp} 0.3s ease-out forwards;
  }
`;

const DrawerImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const DrawerClose = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
  margin-bottom: 10px;
`;

const SideImageContainer = styled.div`
  margin-right: 100px;
  margin-top: 30rem;

  img {
    width: 300px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none; // Hide on mobile if needed
  }
`;

const PopImg = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  return (
    <>
      <Wrapper>
        <SideImageContainer>
          <img src="/images/Group 50.png" alt="Side View" />
        </SideImageContainer>

        <ImageContainer>
          <MainImage
            src="/images/RENDERED IMAGES OF PRODUCTS/website image1 2.png"
            alt="Clickable"
            popped={!!selectedHotspot}
          />

          {/* 🔹 Render hotspots */}
          {hotspots.map((spot, index) => (
            <Hotspot
              key={spot.id}
              style={{ top: spot.top, left: spot.left }}
              onClick={() =>
                setSelectedHotspot(
                  selectedHotspot?.id === spot.id ? null : spot
                )
              }
            >
              {spot.number || index + 1}
            </Hotspot>
          ))}

          {/* 🔹 Desktop pop-out */}
          {selectedHotspot && (
            <PopOut>
              <PoppedImage
                src={selectedHotspot.image}
                alt={selectedHotspot.id}
              />
              <PopText>
                <h2>{selectedHotspot.id}</h2>
                <ul>
                  {selectedHotspot.description?.map((item, idx) => (
                    <li key={idx} style={{ "--i": idx }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </PopText>
            </PopOut>
          )}
        </ImageContainer>
      </Wrapper>

      {/* 🔹 Mobile Drawer */}
      <MobileDrawer visible={!!selectedHotspot}>
        <DrawerClose onClick={() => setSelectedHotspot(null)}>
          &times;
        </DrawerClose>
        {selectedHotspot && (
          <>
            {" "}
            <DrawerImage
              src={selectedHotspot.image}
              alt={selectedHotspot.id}
            />{" "}
            <PopText>
              <h2>{selectedHotspot.id}</h2>
              <ul>
                {selectedHotspot.description?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </PopText>
          </>
        )}
      </MobileDrawer>
    </>
  );
};

export default PopImg;
