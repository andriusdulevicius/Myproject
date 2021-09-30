import React from 'react';
import styled from 'styled-components';
import ClaimButton from '../elements/ClaimButton';
import { MembersStatsCard } from '../elements/MembersStatsCard';
import { useQuery } from 'styles/breakpoints';
import {
  Container,
  ContainerSmall,
  FlexWrapper,
  SmallCard,
  H1,
  H2,
  H3,
  CaptionText,
  RegularText,
  SmallText,
  Image,
  Svg,
} from 'components';
import { green, light_text, orange, blue } from 'styles/colors';

export const StatisticsSummary = () => {
  const { isMobileS, isMobile } = useQuery();
  return (
    <>
      <H1 textAlign={isMobile ? 'left' : 'center'}>{isMobile ? 'Fresh mind starts here' : 'Are you up for this?'}</H1>
      <RegularText textAlign={isMobile ? 'left' : 'center'}>According to your answers, you may...</RegularText>
      <Container maxWidth='51rem' textAlign={isMobile ? 'left' : 'center'}>
        <FlexWrapper>
          <SmallCard textAlign='left'>
            <ContainerSmall padding='0 1rem'>
              <H3>Feel less drained</H3>
              <SmallText color={light_text}>Your anxiety level will drop in 28 days</SmallText>
            </ContainerSmall>
            <Image src='feel_less_drained' />
          </SmallCard>
          <SmallCard padding='0' textAlign='left'>
            <ContainerSmall margin='2rem 0' padding='0 1rem'>
              <H3>Improve your overall mood</H3>
              <SmallText color={light_text}>Your mood will drastically improve</SmallText>
            </ContainerSmall>
            <ContainerSmall maxWidth='12rem' margin='0 auto'>
              <Image src='quality_of_life' />
            </ContainerSmall>
          </SmallCard>
          <SmallCard padding='0 1rem'>
            <ContainerSmall padding='2rem 1rem' textAlign='center'>
              <Svg src='zzz' />
              <H3 margin='3rem 0 0'>Increase your sleep quality</H3>
              <SmallText color={light_text}>Calm mind helps fall asleep easily.</SmallText>
            </ContainerSmall>
          </SmallCard>
          <SmallCard padding='0 1rem' textAlign='center'>
            {!isMobile && (
              <ContainerSmall textAlign='center' marginTop='2rem'>
                <Svg src='heart_rate' />
              </ContainerSmall>
            )}
            <RegularText margin='2rem 0'>
              Are <BoldedText>Anxietless methods</BoldedText> safe for you?
            </RegularText>
            {isMobile && (
              <ContainerSmall textAlign='center'>
                <Svg src='heart_rate' />
              </ContainerSmall>
            )}
            <H1 color={orange}>Yes</H1>
          </SmallCard>
          <MembersStatsCard percent='57' text='Of our members have started with the same anxiety level as you.' />
          <MembersStatsCard percent='96' text='Reduced their day-to-day anxiety and stress.' />
        </FlexWrapper>
        <H2 textAlign='center'>A natural way to reduce your anxiety</H2>
        <StyledUl>
          <FlexWrapper justifyContent={isMobile ? 'flex-start' : 'center'} padding='0'>
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
    </>
  );
};

const BoldedText = styled.span`
  font-weight: bold;
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
