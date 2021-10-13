import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { MembersStatsCard } from './MembersStatsCard';
import {
  ContainerSmall,
  FlexWrapper,
  SmallCard,
  SmallBox,
  TextWrapper,
  H1,
  H2,
  H3,
  H4,
  RegularText,
  SmallText,
  Image,
  Svg,
} from 'components';
import { light_text, orange } from 'styles/colors';

export const YouMayCards: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <FlexWrapper flexWrap='wrap' alignItems='stretch' gap='1.3rem'>
      <SmallCard margin='0' textAlign='left'>
        <FlexWrapper flexDirection='column' alignItems='start'>
          <ContainerSmall margin='0' padding='0 1rem'>
            <H3>Feel less drained</H3>
            <SmallText color={light_text}>Your anxiety level will drop in 28 days</SmallText>
          </ContainerSmall>
          <SmallBox>
            <Image src='feel_less_drained' />
          </SmallBox>
        </FlexWrapper>
      </SmallCard>
      <SmallCard margin='0' textAlign='left'>
        <ContainerSmall margin='0' padding='0 1rem'>
          <H3>Improve your overall mood</H3>
          <SmallText color={light_text}>Your mood will drastically improve</SmallText>
        </ContainerSmall>
        <SmallBox maxWidth='15rem' margin='0 auto'>
          <Image src='quality_of_life' />
        </SmallBox>
      </SmallCard>
      <SmallCard margin='0' padding='0 1rem'>
        <ContainerSmall padding='2rem 1rem 1.3rem' textAlign='center'>
          <Svg src='zzz' />
          {isMobile ? (
            <H3 margin='1rem 0 0'>Increase your sleep quality</H3>
          ) : (
            <H4 margin='1rem 0 0'>Increase your sleep quality</H4>
          )}
          <SmallText color={light_text}>Calm mind helps fall asleep easily.</SmallText>
        </ContainerSmall>
      </SmallCard>
      <SmallCard margin='0' padding='0 1rem' textAlign='center'>
        {!isMobile && (
          <ContainerSmall textAlign='center' marginTop='2rem'>
            <Svg src='heart_rate' />
          </ContainerSmall>
        )}
        <RegularText>
          Are <TextWrapper fontSize='1.2rem'> Anxietless methods</TextWrapper> safe for you?
        </RegularText>
        {isMobile && (
          <ContainerSmall textAlign='center'>
            <Svg src='heart_rate' />
          </ContainerSmall>
        )}
        {isMobile ? <H1 color={orange}>Yes</H1> : <H2 color={orange}>Yes</H2>}
      </SmallCard>
      <FlexWrapper alignItems='stretch'>
        <MembersStatsCard percent='57' text='Of our members have started with the same anxiety level as you.' />
        <MembersStatsCard percent='96' text='Reduced their day-to-day anxiety and stress.' />
      </FlexWrapper>
    </FlexWrapper>
  );
};
