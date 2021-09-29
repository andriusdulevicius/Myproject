import styled from 'styled-components';
import { Container } from './Container';

export const SmallWrapper = styled(Container)`
  padding: ${({ padding }) => padding || '0'};
`;
