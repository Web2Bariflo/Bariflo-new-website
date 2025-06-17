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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

// 🔹 Image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

// 🔹 Main Image
const MainImage = styled.img`
  transition: transform 0.3s ease, opacity 0.3s ease;
  ${(props) =>
    props.popped &&
    `
    transform: scale(0.95);
    opacity: 1.0;
  `}
  width: 100%;
  max-width: 800px;
  height: auto;
`;

// 🔹 Pop-out Container for desktop
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
// 🔹 Pop-out Image
const PoppedImage = styled.img`
  width: 400px;
  border-radius: 10px;
`;

// 🔹 Clickable Hotspot
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
`;

// 🔹 Mobile Drawer
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
    animation: ${popEffect} 0.3s ease-out forwards;
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

const PopImg = () => {
 const [selectedHotspot, setSelectedHotspot] = useState(null);

  const hotspots = [
    {
      id: "aeration device",
      top: "40%",
      left: "50%",
      image: "/images/RENDERED IMAGES OF PRODUCTS/aerator image 1 (2) 1.png",
    },
    {
      id: "feeder",
      top: "50%",
      left: "70%",
      image: "/images/RENDERED IMAGES OF PRODUCTS/auto feeder 1.png",
    },
    {
      id: "Water Sampling",
      top: "65%",
      left: "80%",
      image:
        "/images/RENDERED IMAGES OF PRODUCTS/water sampling & monitoring  image 1 (1) 1.png",
    },
    {
      id: "checktray",
      top: "90%",
      left: "90%",
      image:
        "/images/RENDERED IMAGES OF PRODUCTS/chectray render image 1 1.png",
    },
  ];

  return (
    <>
      <Wrapper>
        <ImageContainer>
          <MainImage
            src="/images/RENDERED IMAGES OF PRODUCTS/website image1 2.png"
            alt="Clickable"
            popped={!!selectedHotspot}
          />

          {/* 🔹 Render hotspots */}
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

          {/* 🔹 Desktop pop-out */}
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
            <PopText>{selectedHotspot.id}</PopText>
          </>
        )}
      </MobileDrawer>
    </>
  );
};


export default PopImg