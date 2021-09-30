import styled from 'styled-components';
import { Container } from './Container';

export const SmallWrapper = styled(Container)`
  max-width: ${({ maxWidth }) => maxWidth || '24rem'};
`;
