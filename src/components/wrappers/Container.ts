import styled from 'styled-components';

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
  textAlign?: string;
}

export const Container = styled.div<Styles>`
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ zIndex }) => zIndex || ''};
  margin: ${({ margin }) => margin || '0 auto'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  padding: ${({ padding }) => padding || '0 1rem'};
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  max-width: ${({ maxWidth }) => maxWidth || '72rem'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export const ContainerSmall = styled(Container)`
  position: ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'block'};
  margin: auto;
  padding: ${({ padding }) => padding || '0 1rem'};
  max-width: 48rem;
`;
