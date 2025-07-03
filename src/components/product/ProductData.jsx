//product data showing component  not used 

import styled from 'styled-components';
import products from '../../data/products.json';
import { motion } from 'framer-motion';

// === Animation Variant ===
const floatUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// === Styled Components ===
const Wrapper = styled.div`
  padding: 60px 5vw;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: ${({ isEven }) => (isEven ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 55%;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProductContent = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: #0a0a0a;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 17px;
    margin-bottom: 16px;
    color: #555;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  ul {
    padding-left: 20px;
    color: #333;
    font-size: 15px;

    li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
  }
`;

// === Component ===
const ProductData = () => {
  return (
    <Wrapper>
      {products.map((product, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={product.id}
            variants={floatUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProductSection isEven={isEven}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductContent>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </ProductContent>
            </ProductSection>
          </motion.div>
        );
      })}
    </Wrapper>
  );
};

export default ProductData;
