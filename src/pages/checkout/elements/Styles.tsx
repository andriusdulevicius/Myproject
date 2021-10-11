import styled from 'styled-components';
import { mobile } from 'styles/breakpoints';
import { Container, FlexWrapper, H2 } from 'components';
import { dark_green } from 'styles/colors';

export const StyledContainer = styled(Container).attrs({ padding: '0 1rem', textAlign: 'center' })`
  @media ${mobile} {
    text-align: left;
  }
`;

export const StyledFlexWrapper = styled(FlexWrapper).attrs({
  flexDirection: 'row-reverse',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
  maxWidth: '80rem',
})`
  @media ${mobile} {
    flex-direction: column;
  }
`;

export const GreenText = styled.span`
  color: ${dark_green};
`;

export const StyledH2 = styled(H2).attrs({ margin: '2rem 0' })``;