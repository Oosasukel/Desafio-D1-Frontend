import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
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

interface CustomButtonProps {
  variant: 'primary' | 'secondary';
}

export const CustomButton = styled(motion.button).attrs(() => ({
  variants: containerVariants,
  initial: 'initial',
  animate: 'animate',
}))<CustomButtonProps>`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;

  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  justify-content: center;
  white-space: nowrap;

  ${({ theme, variant }) => {
    if (variant === 'secondary') {
      return css`
        color: ${theme.colors.secondary};
        font-weight: ${theme.fontWeights.bold};
        background-color: transparent;
        transition: background-color 0.2s, filter 0.2s;

        &:hover {
          background-color: ${theme.colors.buttonSecondaryHover};
        }

        &:active {
          filter: brightness(1.2);
        }
      `;
    }

    return css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      font-weight: ${theme.fontWeights.bold};
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.1);
      }

      &:active {
        filter: brightness(1.2);
      }
    `;
  }}
`;
