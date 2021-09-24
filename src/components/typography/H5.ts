import styled from 'styled-components';
import { TextBaseBold } from './TextBase';

export const H5 = styled(TextBaseBold).attrs({ as: 'h5' })`
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const H5Mobile = styled(TextBaseBold).attrs({ as: 'h5' })`
  font-size: 1rem;
  line-height: 1.31rem;
`;
