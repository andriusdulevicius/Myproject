import styled from 'styled-components';
import { TextBaseBold } from './TextBase';

export const H2 = styled(TextBaseBold).attrs({ as: 'h2' })`
  font-size: 2rem;
  line-height: 3rem;
`;
export const H2Mobile = styled(TextBaseBold).attrs({ as: 'h2' })`
  font-size: 1.5rem;
  line-height: 2rem;
`;
