import styled from 'styled-components';
import { Container } from './Container';

interface Styles {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export const AbsoluteBox = styled(Container)<Styles>`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || null};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  bottom: ${({ bottom }) => bottom || ''};
  right: ${({ right }) => right || ''};
`;
