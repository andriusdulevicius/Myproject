import styled from 'styled-components';
import { mobile, tablet } from 'styles/breakpoints';
import { Container, FlexWrapper, H2 } from 'components';
import { dark_violet } from 'styles/colors';

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
  gap: '1.3rem',
})`
  @media ${tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const GreenText = styled.span`
  color: ${dark_violet};
`;

export const StyledH2 = styled(H2).attrs({ margin: '2rem 0' })``;
