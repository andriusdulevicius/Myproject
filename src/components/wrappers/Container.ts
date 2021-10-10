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
  backgroundColor?: string;
  minHeight?: string;
  height?: string;
}

export const Container = styled.div<Styles>`
  position: ${({ position }) => position || 'relative'};
  z-index: ${({ zIndex }) => zIndex || ''};
  margin: ${({ margin }) => margin || '0 auto'};
  margin-top: ${({ marginTop }) => marginTop || ''};
  padding: ${({ padding }) => padding || '0'};
  padding-top: ${({ paddingTop }) => paddingTop || ''};
  max-width: ${({ maxWidth }) => maxWidth || '80rem'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  background-color: ${({ backgroundColor }) => backgroundColor || ''};
  min-height: ${({ minHeight }) => minHeight || ''};
  height: ${({ height }) => height || ''};
`;

export const ContainerSmall = styled(Container)`
  max-width: ${({ maxWidth }) => maxWidth || '35rem'};
`;
