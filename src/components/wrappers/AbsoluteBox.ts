import styled from 'styled-components';
import { Container } from './Container';

export const AbsoluteBox = styled(Container)`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || null};
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  bottom: ${({ bottom }) => bottom || ''};
  right: ${({ right }) => right || ''};
`;
