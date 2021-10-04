import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { HomeBackground } from 'components/backgrounds/HomeBackground';
import { navigate } from '@reach/router';
import { Navigation } from 'layouts/navigations/Navigation';
import { Footer } from 'layouts/footer/Footer';
import { LANDING_DATA } from './utils';
import { blue, orange, grey_white } from 'styles/colors';
import { Image, Container, H1, H4, RegularText, TextBaseBold, FlexWrapper, PrimaryButton } from 'components';

const Landing: React.FC = () => {
  const { isMobileS, isMobile } = useQuery();
  const { title, subtitle, text, caption } = LANDING_DATA;

  const handleQuizStart = () => {
    navigate('quiz');
  };

  return (
    <LandingPage>
      <Navigation />
      <HomeBackground />
      <Container zIndex={4} marginTop={isMobile ? '2rem' : '6rem'} padding='0 1rem'>
        <FlexWrapper flexDirection={isMobile ? 'column' : 'row-reverse'} gap='3rem' maxWidth='80rem'>
          <Image src={isMobile ? 'bgc_couple' : 'bgc_couple_laptop'} />
          <Container maxWidth={isMobile ? '100%' : '50%'} textAlign={isMobile ? 'center' : 'left'}>
            <H1>{title}</H1>
            <H4>{subtitle}</H4>
            <RegularText>{text}</RegularText>
            <TextBaseBold fontSize='0.9rem' textAlign={isMobile ? 'center' : 'left'}>
              {caption}
            </TextBaseBold>
            <FlexWrapper padding='0rem' gap='0.5rem' justifyContent={isMobile ? 'center' : 'start'}>
              <PrimaryButton colorProp={blue} margin='0' width='50%' onClick={handleQuizStart}>
                Male
              </PrimaryButton>
              <PrimaryButton colorProp={orange} margin='0' width='50%' onClick={handleQuizStart}>
                Female
              </PrimaryButton>
            </FlexWrapper>
          </Container>
        </FlexWrapper>
      </Container>
      {!isMobileS && <Footer />}
    </LandingPage>
  );
};

export default Landing;

const LandingPage = styled.div`
  position: 'relative';
`;
