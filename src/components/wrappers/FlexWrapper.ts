import styled from 'styled-components';

interface Styles {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
  flexWrap?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
}

export const FlexWrapper = styled.div<Styles>`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  gap: ${({ gap }) => gap || '1rem'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  max-width: ${({ maxWidth }) => maxWidth || '50rem'};
`;
