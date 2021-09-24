import styled from 'styled-components';
import { white } from 'styles/colors';

interface Styles {
  display?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || 'inline-block'};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0.94rem'};
  max-width: ${({ maxWidth }) => maxWidth || '9.4rem'};
  min-width: ${({ minWidth }) => minWidth || 'none'};
  width: ${({ width }) => width || 'none'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '2rem'};
  color: ${({ color }) => color || white};
  font-size: ${({ fontSize }) => fontSize || '0.9rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  cursor: 'pointer';
`;
