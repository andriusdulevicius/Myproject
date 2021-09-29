import styled from 'styled-components';
import { white, dark_text } from 'styles/colors';
import { Container } from './Container';

interface Styles {
  maxWidth?: string;
  width?: string;
  minHeight?: string;
  textAlign?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export const SmallCard = styled(Container)<Styles>`
  max-width: ${({ maxWidth }) => maxWidth || '24rem'};
  width: ${({ width }) => width || '100%'};
  min-height: ${({ minHeight }) => minHeight || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '2rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || white};
  box-shadow: 0 1rem 2rem ${dark_text + '10'};
`;
