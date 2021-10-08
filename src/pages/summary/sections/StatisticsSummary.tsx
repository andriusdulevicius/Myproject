import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { YouMayCards } from '../elements/YouMayCards';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, H1, H2, RegularText, Svg, PrimaryButton } from 'components';
import { blue } from 'styles/colors';

export const StatisticsSummary = () => {
  const { isTablet } = useQuery();
  const { goToCheckout } = useRouter();
  return (
    <StyledSummary>
      <H1 textAlign={isTablet ? 'left' : 'center'}>{isTablet ? 'Fresh mind starts here' : 'Are you up for this?'}</H1>
      <RegularText textAlign={isTablet ? 'left' : 'center'}>According to your answers, you may...</RegularText>
      <Container maxWidth='51rem' textAlign={isTablet ? 'left' : 'center'}>
        <YouMayCards />
        <H2 textAlign='center'>A natural way to reduce your anxiety</H2>
        <StyledUl>
          <FlexWrapper justifyContent={isTablet ? 'flex-start' : 'center'} flexWrap='wrap' padding='0'>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_outline' />
                <RegularText margin='0'>No expensive treatments</RegularText>
              </StyledFlexWrapper>
            </StyledLi>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_outline' />
                <RegularText margin='0'>No harmful side effects</RegularText>
              </StyledFlexWrapper>
            </StyledLi>
          </FlexWrapper>
        </StyledUl>
        <PrimaryButton colorProp={blue} maxWidth='24rem' margin='1.5rem 0' onClick={goToCheckout}>
          Claim your fresh mind back
        </PrimaryButton>
      </Container>
    </StyledSummary>
  );
};

const StyledSummary = styled.section`
  position: relative;
  z-index: 10;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLi = styled.li``;

const StyledFlexWrapper = styled(FlexWrapper).attrs({
  flexWrap: 'nowrap',
  padding: '0',
})``;
