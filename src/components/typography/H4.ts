import styled from 'styled-components';
import { TextBaseBold } from './TextBase';

export const H4 = styled(TextBaseBold).attrs({ as: 'h4' })`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;
export const H4Mobile = styled(TextBaseBold).attrs({ as: 'h4' })`
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
