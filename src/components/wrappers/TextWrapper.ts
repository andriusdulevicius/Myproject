import styled from 'styled-components';

interface Styles {
  fontWeight?: number;
}

export const TextWrapper = styled.span<Styles>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
`;
