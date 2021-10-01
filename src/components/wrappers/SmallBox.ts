import styled from 'styled-components';
import { white, dark_text } from 'styles/colors';
import { Container } from './Container';

interface Styles {
  minHeight?: string;
  borderRadius?: string;
  backgroundColor?: string;
  minWidth?: string;
}

export const SmallBox = styled(Container)<Styles>`
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  width: ${({ width }) => width || ''};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '2rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || white};
  box-shadow: 0 1rem 2rem ${dark_text + '10'};
`;
