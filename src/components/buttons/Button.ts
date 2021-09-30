import styled from 'styled-components';
import { white } from 'styles/colors';

interface Styles {
  display?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || 'inline-block'};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0.94rem'};
  max-width: ${({ maxWidth }) => maxWidth || '9.4rem'};
  min-width: ${({ minWidth }) => minWidth || 'none'};
  width: ${({ width }) => width || '100%'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '2rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || white};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  cursor: 'pointer';
`;
