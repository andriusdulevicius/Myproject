import styled from 'styled-components';
import { white, dark_text } from 'styles/colors';
import { Container } from './Container';

interface Styles {
  minHeight?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export const SmallCard = styled(Container)<Styles>`
  max-width: ${({ maxWidth }) => maxWidth || '24rem'};
  width: ${({ width }) => width || '100%'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '1rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || white};
  box-shadow: 0 1rem 2rem ${dark_text + '10'};
`;
