import React from 'react';
import styled from 'styled-components';
import ClaimButton from '../elements/ClaimButton';
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
        <FlexWrapper padding='0'>
          <SmallCard padding='0' textAlign='left'>
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
            <ContainerSmall padding='3rem 1rem' textAlign='center'>
              <Svg src='zzz' />
            </ContainerSmall>
            <H3 margin='0'>Increase your sleep quality</H3>
            <SmallText color={light_text}>Calm mind helps fall asleep easily.</SmallText>
          </SmallCard>
          <SmallCard padding='0 1rem'>
            <RegularText margin='2rem 0'>
              Are <BoldedText>Anxietless methods</BoldedText> safe for you?
            </RegularText>
            <ContainerSmall textAlign='center'>
              <Svg src='heart_rate' />
            </ContainerSmall>
            <H1 color={orange}>Yes</H1>
          </SmallCard>
          <FlexWrapper flexWrap='nowrap' padding='0'>
            <SmallCard width={isMobile ? '50%' : '100%'} textAlign='left' padding='0 1rem'>
              <H1 color={green}>57%</H1>
              <CaptionText>Of our members have started with the same anxiety level as you.</CaptionText>
            </SmallCard>
            <SmallCard width={isMobile ? '50%' : '100%'} textAlign='left' padding='0 1rem'>
              <H1 color={green}>96%</H1>
              <CaptionText>Reduced their day-to-day anxiety and stress.</CaptionText>
            </SmallCard>
          </FlexWrapper>
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
