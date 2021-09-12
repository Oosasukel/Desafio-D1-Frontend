import { Form as UnformForm } from '@unform/web';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import ButtonComponent from 'components/Button';
import { motion, Variants } from 'framer-motion';

export const Container = styled.div`
  min-height: 100%;
`;

const formVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const FormContent = styled(motion.div).attrs(() => ({
  variants: formVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  width: 100%;
`;

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const FormGroup = styled(motion.div).attrs(() => ({
  variants: itemVariants,
}))`
  width: 100%;

  display: grid;
  grid-gap: 0 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 620px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Form = styled(UnformForm)`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (max-width: 1000px) {
    padding-top: 0;
  }
`;

export const SectionTitle = styled.h1`
  grid-column: 1/3;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 620px) {
    grid-column: initial;
  }
`;

export const HomeIcon = styled(SVG)`
  width: 4rem;
  min-width: 4rem;
  height: 4rem;
  min-height: 4rem;
  cursor: pointer;

  position: fixed;
  left: 4rem;
  top: 4rem;
  transition: transform 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.title};
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    position: initial;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const Button = styled(ButtonComponent)`
  width: min-content;
  margin-top: 2rem;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TrashIcon = styled(SVG)`
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  min-height: 1.5rem;
  cursor: pointer;
  margin-left: 0.5rem;

  transition: transform 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.title};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const AddContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: grid;
  justify-content: center;

  grid-column: 1/3;

  @media (max-width: 620px) {
    grid-column: initial;
  }

  @media (max-width: 620px) {
    margin-top: 1rem;
  }
`;

export const AddIcon = styled(SVG)`
  padding: 0.5rem;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  min-height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};

  transition: transform 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.title};
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`;

export const AddressContainer = styled.div`
  grid-column: 1/3;
  width: 100%;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  display: grid;
  grid-gap: 0 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 620px) {
    grid-template-columns: minmax(0, 1fr);
    grid-column: initial;
  }
`;

export const ComplementContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${TrashIcon} {
    margin-right: 1rem;
  }
`;
