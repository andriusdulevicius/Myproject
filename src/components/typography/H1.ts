import styled from 'styled-components';
import { TextBaseBold } from './TextBase';

export const H1 = styled(TextBaseBold).attrs({ as: 'h1' })`
  font-size: 3rem;
  line-height: 4rem;
`;

export const H1Mobile = styled(TextBaseBold).attrs({ as: 'h1' })`
  font-size: 1.69rem;
  line-height: 2.25rem;
`;
