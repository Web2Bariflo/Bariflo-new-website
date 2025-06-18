import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
//   background-color: #e0f7fa;
  padding: 60px 20px;
  text-align: center;
  margin: 20px 0;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #F9F6EE;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 280px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.div`
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
`;


// const cards = [
//   {
//     title: 'Farm Management',
//     image: 'https://cdn.pixabay.com/photo/2022/01/01/16/29/antelope-6908215_960_720.jpg',
//     link: '/farm-management',
//   },
//   {
//     title: 'Aeration & Oxygen Control',
//     image: 'https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg',
//     link: '/aeration-control',
//   },
//      {
//     title: 'Aeration & Oxygen Control',
//     image: 'https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg',
//     link: '/aeration-control',
//   },
//   {
//     title: 'Camera System',
//     image: 'https://cdn.pixabay.com/photo/2021/10/14/12/32/autumn-6708984_960_720.jpg',
//     link: '/camera-system',
//   },
//   // Add more cards as needed
// ];


const Cards = ({cards}) => {
   const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Explore More</Title>
      <Grid>
        {cards.map((card, idx) => (
          <Card key={idx} onClick={() => navigate(card.link)}>
            <CardImage src={card.image} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Cards