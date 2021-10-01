import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { StatsCard } from '../elements/StatsCard';
import {
  AbsoluteBox,
  Container,
  ContainerSmall,
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
import { PERSONAL_SUMMARY } from './utils';

export const PersonalSummary: React.FC = () => {
  const { isMobile } = useQuery();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { title, stats_label, stats, sublabel1, sublabel2, results } = PERSONAL_SUMMARY;

  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <StyledSummary>
      <Container textAlign={isMobile ? 'left' : 'center'} margin='0 auto 2rem'>
        <H2>{title}</H2>
        <RegularText>{stats_label}</RegularText>
        <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} justifyContent='center' gap='1rem' maxWidth='80rem'>
          {stats.map(({ icon, title, subtitle }) => (
            <StatsCard icon={icon} title={title} subtitle={subtitle} />
          ))}
        </FlexWrapper>
        <RegularText>{sublabel1}</RegularText>
        <RegularText>{sublabel2}</RegularText>
        <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} maxWidth='80rem'>
          {results.map(({ imgSrc, indication, result, info, answer }) => (
            <SmallCard margin='0'>
              <Image src={imgSrc} />
              <ContainerSmall position='relative' padding='0 1rem'>
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
                  <AbsoluteBox left='-0.5rem' right='-0.5rem' top='-12rem'>
                    <SmallCard maxWidth='25rem' padding='1rem'>
                      <FlexWrapper justifyContent='space-between' padding='0'>
                        <H5>{info}</H5>
                        <Svg src='close' onClick={handleModal} />
                      </FlexWrapper>

                      <SmallText>{answer}</SmallText>
                    </SmallCard>
                  </AbsoluteBox>
                )}
              </ContainerSmall>
            </SmallCard>
          ))}
        </FlexWrapper>
      </Container>
    </StyledSummary>
  );
};

const StyledSummary = styled.section`
  position: relative;
  z-index: 10;
`;
