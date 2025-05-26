import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import ImageSlider from "react-simple-image-slider";

const ParallaxMultiImageBanner = () => {
  const images = [
    {
      url: "/images/Pond.jpg",
    },
    {
      url: "/images/360_F_876823145.jpg",
    },
    {
      url: "/images/1747891941978 1.png",
    },
    {
      url: "/images/link-Larval-Room_EOF_4-500x373-1 1.jpg",
    },
  ];

  return (
    <ParallaxProvider>
      <div style={{ width: "100%", height: "700px" }}>
        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <div style={{ width: "100%", height: "100%" }}>
                  <ImageSlider
                    images={images}
                    autoPlay={true}
                    autoPlayDelay={4} // seconds
                    width="100%"
                    height="100%"
                    showBullets={true}
                    showNavs={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ),
            },
          ]}
          style={{ height: "100%" }}
        />
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxMultiImageBanner;
