import styled from 'styled-components';

interface Styles {
  fontWeight?: number;
  fontSize?: string;
  color?: string;
}

export const TextWrapper = styled.span<Styles>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  color: ${({ color }) => color || 'inherit'};
`;
