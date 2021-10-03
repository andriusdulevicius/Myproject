import styled from 'styled-components';
import { mobile } from 'styles/breakpoints';
import { FlexWrapper, H2 } from 'components';
import { dark_green } from 'styles/colors';

export const StyledFlexWrapper = styled(FlexWrapper).attrs({ flexWrap: 'nowrap', maxWidth: '80rem' })`
  flex-direction: row-reverse;
  align-items: stretch;

  @media ${mobile} {
    flex-direction: column;
  }
`;

export const GreenText = styled.span`
  color: ${dark_green};
`;

export const StyledH2 = styled(H2).attrs({ margin: '2rem 0' })``;
