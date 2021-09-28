import styled from 'styled-components';
import { white } from 'styles/colors';

interface Styles {
  position?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  zIndex?: number;
  display?: string;
  margin?: string;
  marginTop?: string;
  padding?: string;
  paddingTop?: string;
  maxWidth?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export const SmallCard = styled.div<Styles>`
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ zIndex }) => zIndex || ''};
  margin: ${({ margin }) => margin || '0 auto'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  padding: ${({ padding }) => padding || '1rem'};
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  max-width: ${({ maxWidth }) => maxWidth || '24rem'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  border-radius: ${({ borderRadius }) => borderRadius || '2rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || white};
`;
