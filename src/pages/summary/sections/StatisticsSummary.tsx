import React from 'react';
import styled from 'styled-components';
import { ClaimButton } from '../elements/ClaimButton';
import { YouMayCards } from '../elements/YouMayCards';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, H1, H2, RegularText, Svg } from 'components';

export const StatisticsSummary = () => {
  const { isMobile } = useQuery();
  return (
    <StyledSummary>
      <H1 textAlign={isMobile ? 'left' : 'center'}>{isMobile ? 'Fresh mind starts here' : 'Are you up for this?'}</H1>
      <RegularText textAlign={isMobile ? 'left' : 'center'}>According to your answers, you may...</RegularText>
      <Container maxWidth='51rem' textAlign={isMobile ? 'left' : 'center'}>
        <YouMayCards />
        <H2 textAlign='center'>A natural way to reduce your anxiety</H2>
        <StyledUl>
          <FlexWrapper justifyContent={isMobile ? 'flex-start' : 'center'} flexWrap='wrap' padding='0'>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_circle' />
                <RegularText margin='0'>No expensive treatments</RegularText>
              </StyledFlexWrapper>
            </StyledLi>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_circle' />
                <RegularText margin='0'>No harmful side effects</RegularText>
              </StyledFlexWrapper>
            </StyledLi>
          </FlexWrapper>
        </StyledUl>
        <ClaimButton />
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
