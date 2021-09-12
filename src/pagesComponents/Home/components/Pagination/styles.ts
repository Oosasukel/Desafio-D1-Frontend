import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      damping: 10,
    },
  },
};

export const Container = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'initial',
  animate: 'animate',
}))`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    color: ${({ theme }) => theme.colors.title};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: 1.25rem;
  }

  @media (max-width: 550px) {
    & span:first-child {
      display: none;
    }
  }
`;

interface IconProps {
  disabled?: boolean;
}

export const Icon = styled(SVG)<IconProps>`
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  min-height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.title};
  }

  &:hover {
    transform: scale(1.2);
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.4;
      `;
    }
  }}
`;
