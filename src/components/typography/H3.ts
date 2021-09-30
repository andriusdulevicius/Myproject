import styled from 'styled-components';
import { TextBaseBold } from './TextBase';
import { mobile } from 'styles/breakpoints';

export const H3 = styled(TextBaseBold).attrs({ as: 'h3' })`
  font-size: 1.69rem;
  line-height: 2.5rem;

  @media ${mobile} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;
