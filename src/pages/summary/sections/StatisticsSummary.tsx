import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import {
  H1Mobile,
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
} from 'components';
import { green, light_text, orange } from 'styles/colors';

export const StatisticsSummary = () => {
  const { isMobileS, isMobile } = useQuery();
  return (
    <>
      <H1Mobile>Fresh mind starts here</H1Mobile>
      <RegularTextMobile>According to your answers, you may...</RegularTextMobile>
      <Container maxWidth='51rem'>
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
              Are <BoldedText>Anxietless methods</BoldedText> safe for you?{' '}
            </RegularTextMobile>
            <ContainerSmall textAlign='center'>
              <Svg src='heart_rate' />
            </ContainerSmall>
            <H1Mobile color={orange}>Yes</H1Mobile>
          </SmallCard>
          <FlexWrapper flexWrap='no-wrap' padding='0'>
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
      </Container>
    </>
  );
};

const BoldedText = styled.span`
  font-weight: bold;
`;
