import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import ClaimButton from '../elements/ClaimButton';
import {
  H1Mobile,
  H1,
  H2Mobile,
  H2,
  H3Mobile,
  RegularTextMobile,
  SmallTextMobile,
  FlexWrapper,
  Image,
  SmallCard,
  Svg,
  ContainerSmall,
  CaptionTextMobile,
  Container,
  RegularText,
  PrimaryButton,
} from 'components';
import { green, light_text, orange, blue } from 'styles/colors';

export const StatisticsSummary = () => {
  const { isMobileS, isMobile } = useQuery();
  return (
    <>
      {isMobile ? <H1Mobile>Fresh mind starts here</H1Mobile> : <H1 textAlign='center'>Are you up for this?</H1>}
      {isMobile ? (
        <RegularTextMobile>According to your answers, you may...</RegularTextMobile>
      ) : (
        <RegularText textAlign='center'>According to your answers, you may...</RegularText>
      )}
      <Container maxWidth='51rem' textAlign={isMobile ? 'left' : 'center'}>
        <FlexWrapper padding='0'>
          <SmallCard padding='0' textAlign='left'>
            <ContainerSmall>
              <H3Mobile>Feel less drained</H3Mobile>
              <SmallTextMobile color={light_text}>Your anxiety level will drop in 28 days</SmallTextMobile>
            </ContainerSmall>
            <Image src='feel_less_drained' />
          </SmallCard>
          <SmallCard padding='0' textAlign='left'>
            <ContainerSmall margin='2rem 0'>
              <H3Mobile>Feel less drained</H3Mobile>
              <SmallTextMobile color={light_text}>Your anxiety level will drop in 28 days</SmallTextMobile>
            </ContainerSmall>
            <ContainerSmall maxWidth='12rem' margin='0 auto' padding='0'>
              <Image src='quality_of_life' />
            </ContainerSmall>
          </SmallCard>
          <SmallCard>
            <ContainerSmall padding='3rem 1rem' textAlign='center'>
              <Svg src='zzz' />
            </ContainerSmall>
            <H3Mobile margin='0'>Increase your sleep quality</H3Mobile>
            <SmallTextMobile color={light_text}>Calm mind helps fall asleep easily.</SmallTextMobile>
          </SmallCard>
          <SmallCard>
            <RegularTextMobile margin='2rem 0'>
              Are <BoldedText>Anxietless methods</BoldedText> safe for you?
            </RegularTextMobile>
            <ContainerSmall textAlign='center'>
              <Svg src='heart_rate' />
            </ContainerSmall>
            <H1Mobile color={orange}>Yes</H1Mobile>
          </SmallCard>
          <FlexWrapper flexWrap='nowrap' padding='0'>
            <SmallCard width={isMobile ? '50%' : '100%'} textAlign='left'>
              <H1Mobile color={green}>57%</H1Mobile>
              <CaptionTextMobile>Of our members have started with the same anxiety level as you.</CaptionTextMobile>
            </SmallCard>
            <SmallCard width={isMobile ? '50%' : '100%'} textAlign='left'>
              <H1Mobile color={green}>96%</H1Mobile>
              <CaptionTextMobile>Reduced their day-to-day anxiety and stress.</CaptionTextMobile>
            </SmallCard>
          </FlexWrapper>
        </FlexWrapper>
        {isMobile ? (
          <H2Mobile>A natural way to reduce your anxiety</H2Mobile>
        ) : (
          <H2 textAlign='center'>A natural way to reduce your anxiety</H2>
        )}
        <StyledUl>
          <FlexWrapper justifyContent={isMobile ? 'flex-start' : 'center'} padding='0'>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_circle' />
                <RegularTextMobile margin='0'>No expensive treatments</RegularTextMobile>
              </StyledFlexWrapper>
            </StyledLi>
            <StyledLi>
              <StyledFlexWrapper>
                <Svg src='green_check_circle' />
                <RegularTextMobile margin='0'>No harmful side effects</RegularTextMobile>
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
