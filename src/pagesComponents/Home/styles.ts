import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const Container = styled.div`
  min-height: 100%;
`;

export const Content = styled.div`
  min-height: 100%;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const titleVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export const Title = styled(motion.h1).attrs(() => ({
  variants: titleVariants,
  initial: 'initial',
  animate: 'animate',
}))`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
