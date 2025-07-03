//logos sliding in home page 


import styled, { keyframes } from 'styled-components';

// Animation for infinite scroll
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 5vw; /* Padding for partial visibility */
  
  h1 {
    text-align: center;
    padding: 50px;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
`;

const Slide = styled.div`
  min-width: 180px;
  height: 100px;
  margin: 0 20px; /* Space between logos */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: filter 0.3s ease;

    @media (max-width: 768px) {
      max-height: 80px;
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
  '/images/website images and icon-20250524T084126Z-1-001/Institute_of_Minerals_and_Materials_Technology_Logo.png',
  '/images/website images and icon-20250524T084126Z-1-001/indianoil_logo.jpg',
  '/images/website images and icon-20250524T084126Z-1-001/nasscom.png',
  '/images/website images and icon-20250524T084126Z-1-001/cii-cies.jpg',
  '/images/website images and icon-20250524T084126Z-1-001/pmmsy-logo.png',
  '/images/website images and icon-20250524T084126Z-1-001/Ministry-of-Agriculture-768x364.jpg',
  '/images/website images and icon-20250524T084126Z-1-001/telecom.png',
  '/images/website images and icon-20250524T084126Z-1-001/technology-development-board.png',
  '/images/website images and icon-20250524T084126Z-1-001/magnum_group_of_companies_logo.jpeg',
  '/images/website images and icon-20250524T084126Z-1-001/VENN.jpg',
  '/images/website images and icon-20250524T084126Z-1-001/venturelab.jpg',
  '/images/website images and icon-20250524T084126Z-1-001/opportunity.jpg',
];

const Collaborators = () => {
  return (
    <SliderWrapper>
      <h1>Power Support System</h1>
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
