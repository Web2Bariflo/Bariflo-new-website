import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin: 100px;
  @media (max-width: 768px) {
    height: 50vh;
    margin: 0px;
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
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

const PopOut = styled.div`
  position: absolute;
  top: 0;
  left: 90%;
  margin-left: 20px;
  z-index: 10;
  animation: ${popEffect} 0.3s ease-out forwards;

  @media (max-width: 768px) {
    display: none;
  }
`;
const PopText = styled.span`
  color: #333;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  margin-left: 11rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const PoppedImage = styled.img`
  width: 400px;
  border-radius: 10px;
`;

const Hotspot = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgba(22, 184, 184, 0.7);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
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

const PopImgIndoor = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const hotspots = [
    {
      id: "Biofloc Mixing System",
      top: "50%",
      left: "28%",
      image: "/images/RENDERED IMAGES OF PRODUCTS/aerator image 1 (2) 1.png",
    },
    {
      id: "feeder",
      top: "72%",
      left: "64%",
      image: "/images/RENDERED IMAGES OF PRODUCTS/auto feeder 1.png",
    },
    {
      id: "Water Sampling",
      top: "38%",
      left: "66%",
      image:
        "/images/RENDERED IMAGES OF PRODUCTS/water sampling & monitoring  image 1 (1) 1.png",
    },

  ];

  return (
    <>
      <Wrapper>
        <ImageContainer>
          <MainImage
            src="/images/bioflocdesign.png"
            alt="Clickable"
            popped={!!selectedHotspot}
          />

          {hotspots.map((spot) => (
            <Hotspot
              key={spot.id}
              style={{ top: spot.top, left: spot.left }}
              onClick={() =>
                setSelectedHotspot(
                  selectedHotspot?.id === spot.id ? null : spot
                )
              }
            />
          ))}

          {selectedHotspot && (
            <PopOut>
              <PoppedImage
                src={selectedHotspot.image}
                alt={selectedHotspot.id}
              />
              <PopText>{selectedHotspot.id}</PopText>
            </PopOut>
          )}
        </ImageContainer>
      </Wrapper>

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
            <PopText>{selectedHotspot.id}</PopText>
          </>
        )}
      </MobileDrawer>
    </>
  );
};

export default PopImgIndoor;
