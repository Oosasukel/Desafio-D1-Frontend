import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Container = styled(motion.div).attrs(() => ({
  variants: itemVariants,
}))`
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
  height: 11rem;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Id = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Title = styled.h1`
  font-size: 2rem;
  max-width: calc(100% - 5rem);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 16rem;
`;

export const ModalButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
`;

export const ModalQuestion = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1.5rem;
`;

export const Location = styled.span`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Age = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ActionsContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;

  display: flex;
`;

interface ActionIconProps {
  disabled?: boolean;
}

export const ActionIcon = styled(SVG)<ActionIconProps>`
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  min-height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: scale(1.25);
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.4;
      `;
    }
  }}
`;

export const SocialMediaContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;

  a {
    margin-left: 0.5rem;
    height: 3rem;
  }
`;

interface SocialMediaProps {
  activecolor?: string;
}

export const SocialMedia = styled(SVG)<SocialMediaProps>`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  min-height: 3rem;

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  ${({ activecolor }) => {
    if (!activecolor) {
      return css`
        opacity: 0.4;
      `;
    }

    return css`
      cursor: pointer;
      transition: filter 0.2s, transform 0.2s;

      path {
        transition: fill 0.2s;
      }

      &:hover {
        transform: scale(1.25);
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

        path {
          fill: ${activecolor};
        }
      }
    `;
  }}

  @media (max-width: 400px) {
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    min-height: 2rem;
  }
`;
