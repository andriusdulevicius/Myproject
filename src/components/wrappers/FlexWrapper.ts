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
}

export const FlexWrapper = styled.div<Styles>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  gap: ${({ gap }) => gap || '1rem'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0 1rem'};
`;
