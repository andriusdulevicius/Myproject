import styled from 'styled-components';
import { TextBaseBold } from './TextBase';
import { mobile } from 'styles/breakpoints';

export const H5 = styled(TextBaseBold).attrs({ as: 'h5' })`
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${mobile} {
    font-size: 1rem;
    line-height: 1.31rem;
  }
`;
