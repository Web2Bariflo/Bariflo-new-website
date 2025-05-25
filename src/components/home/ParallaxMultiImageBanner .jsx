import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const ParallaxMultiImageBanner = () => {
  const slidingAnimation = (direction = 'left', duration = 30) => ({
    animation: 'slide-' + direction + ' ' + duration + 's linear infinite',
  });

  // Public images from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <>
      <style>
        {`
          @keyframes slide-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes slide-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(50%);
            }
          }
          .slider-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .slider-track {
            display: flex;
            width: 200%;
            height: 100%;
          }
          .slider-image {
            width: 25vw;
            min-width: 250px;
            user-select: none;
            pointer-events: none;
            object-fit: cover;
            height: 100%;
          }
        `}
      </style>

      <ParallaxProvider>
        <div style={{ width: '100%', height: '500px' }}>
          <ParallaxBanner
            layers={[
              {
                speed: -20,
                children: (
                  <div className="slider-container">
                    <div
                      className="slider-track"
                      style={slidingAnimation('left', 30)}
                      aria-hidden="true"
                    >
                      {images.concat(images).map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={'Banner ' + (i + 1)}
                          className="slider-image"
                          draggable={false}
                        />
                      ))}
                    </div>
                  </div>
                ),
              },
            ]}
            style={{ height: '100%' }}
          />
        </div>
      </ParallaxProvider>
    </>
  );
};

export default ParallaxMultiImageBanner;

