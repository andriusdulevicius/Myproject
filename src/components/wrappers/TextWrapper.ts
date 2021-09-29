import styled from 'styled-components';

interface Styles {
  fontWeight?: number;
  fontSize?: string;
}

export const TextWrapper = styled.span<Styles>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
`;
