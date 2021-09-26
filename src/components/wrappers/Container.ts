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
  padding?: string;
  maxWidth?: string;
  width?: string;
}

export const Container = styled.div<Styles>`
  margin: ${({ margin }) => margin || '0 auto'};
  padding: ${({ padding }) => padding || '0 1rem'};
  max-width: ${({ maxWidth }) => maxWidth || '72rem'};
`;

export const ContainerSmall = styled(Container)`
  position: ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'block'};
  margin: auto;
  padding: ${({ padding }) => padding || '0 1rem'};
  max-width: 48rem;
`;
