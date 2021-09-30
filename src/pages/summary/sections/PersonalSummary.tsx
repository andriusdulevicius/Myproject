import React, { useState } from 'react';
import { useQuery } from 'styles/breakpoints';
import { StatsCard } from '../elements/StatsCard';
import {
  AbsoluteBox,
  Container,
  FlexWrapper,
  SmallCard,
  H2,
  H4,
  H5,
  RegularText,
  SmallText,
  Svg,
  Image,
} from 'components';
import { yellow, blue } from 'styles/colors';

const PERSONAL_SUMMARY = {
  title: 'Your personal summary',
  stats_label: 'Your answers indicate you may be experiencing:',
  stats: [
    {
      icon: 'moderate_icon',
      title: 'Moderate anxiety',
      subtitle: 'The anxiety score indicates your current level of anxiety.',
    },
    {
      icon: 'severe_icon',
      title: 'Severe stress',
      subtitle: 'The stress score indicates your current level of stress.',
    },
    {
      icon: 'mild_icon',
      title: 'Mild depression',
      subtitle: 'The depression score indicates your current risk of developing severe depression.',
    },
  ],
  sublabel1: 'Your results indicate that you may be experiencing several symptoms of anxiety, stress, and depression.',
  sublabel2: 'Prevent them from becoming a problem and learn how to deal with them at your own pace.',
  results: [
    {
      imgSrc: 'increased_stress_levels',
      indication: true,
      result: 'Your stress levels have increased in the past year',
    },
    {
      imgSrc: 'panic_attack',
      indication: false,
      result: 'You have a 17% chance of having a panic attack in the future',
      info: 'What is panic attack?',
      answer:
        "A panic attack is an unexpected and intensive episode of fear. It triggers severe physical reactions when there is no real danger or apparent cause. Panic attacks can be very frightening. When it occurs, you might think you're losing control, having a heart attack, or even dying.",
    },
  ],
};

export const PersonalSummary: React.FC = () => {
  const { isMobile } = useQuery();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { title, stats_label, stats, sublabel1, sublabel2, results } = PERSONAL_SUMMARY;

  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <Container textAlign={isMobile ? 'left' : 'center'} padding='0'>
      <H2>{title}</H2>
      <RegularText>{stats_label}</RegularText>
      <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} justifyContent='center' gap='1rem' padding='0'>
        {stats.map(({ icon, title, subtitle }) => (
          <StatsCard icon={icon} title={title} subtitle={subtitle} />
        ))}
      </FlexWrapper>
      <RegularText>{sublabel1}</RegularText>
      <RegularText>{sublabel2}</RegularText>
      <FlexWrapper flexDirection={isMobile ? 'column' : 'row'}>
        {results.map(({ imgSrc, indication, result, info, answer }) => (
          <SmallCard margin='0'>
            <Image src={imgSrc} />
            {indication && <SmallText color={yellow}>Your results indicate that</SmallText>}
            <H4>{result}</H4>
            {info && (
              <FlexWrapper onClick={handleModal} justifyContent='start' gap='0.4rem' padding='0' margin='0.5rem 0'>
                <Svg src='info' />
                <SmallText color={blue} margin='0'>
                  {info}
                </SmallText>
              </FlexWrapper>
            )}
            {info && modalOpen && (
              <AbsoluteBox left='-0.5rem' right='-0.5rem' top='8rem'>
                <SmallCard maxWidth='25rem' padding='1rem'>
                  <FlexWrapper justifyContent='space-between' padding='0'>
                    <H5>{info}</H5>
                    <Svg src='close' onClick={handleModal} />
                  </FlexWrapper>

                  <SmallText>{answer}</SmallText>
                </SmallCard>
              </AbsoluteBox>
            )}
          </SmallCard>
        ))}
      </FlexWrapper>
    </Container>
  );
};
