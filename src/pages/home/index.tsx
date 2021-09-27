import React from 'react';
import styled from 'styled-components';
import { Navigation } from 'layouts/navigations/Navigation';
import { Footer } from 'layouts/footer/Footer';
import { useQuery } from 'styles/breakpoints';
import { blue, orange } from 'styles/colors';
import {
  Image,
  AbsoluteBox,
  Container,
  H1Mobile,
  H4Mobile,
  RegularTextMobile,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
} from 'components';

const Landing = () => {
  const { isMobileS, isMobile } = useQuery();

  const handleQuiz = () => {
    console.log('handling quiz');
  };

  return (
    <LandingPage>
      <Navigation />

      <AbsoluteBox left='0' right='0' top={isMobileS ? '14rem' : '10rem'}>
        <Image src='ellipse_mobile' />
      </AbsoluteBox>
      <AbsoluteBox top='6rem' right={isMobile ? '2rem' : '4rem'} left={isMobile ? '2rem' : '4rem'} maxWidth='16rem'>
        <Image src='bgc_couple' />
      </AbsoluteBox>
      <AbsoluteBox bottom={!isMobileS ? '0' : '2rem'}>
        <Container>
          <H1Mobile textAlign='center'>Find your Inner Peace</H1Mobile>
          <H4Mobile textAlign='center'>Calm mind. Better sleep. Confidence.</H4Mobile>
          <RegularTextMobile textAlign='center'>
            It might be difficult times, but you’re not alone. Answer this simple quiz and take your life back, free of
            anxiety, depression & stress.
          </RegularTextMobile>
          <TextBaseBold fontSize='0.9rem' textAlign='center'>
            Start by selecting your gender
          </TextBaseBold>
          <FlexWrapper flexWrap='no-wrap' padding='0rem' gap='0.5rem'>
            <PrimaryButton colorProp={blue} width='50%' onClick={handleQuiz}>
              Male
            </PrimaryButton>
            <PrimaryButton colorProp={orange} width='50%' onClick={handleQuiz}>
              Female
            </PrimaryButton>
          </FlexWrapper>
          {!isMobileS && <Footer />}
        </Container>
      </AbsoluteBox>
    </LandingPage>
  );
};

export default Landing;

const LandingPage = styled.div`
  position: 'relative';
  height: 100%;
  padding: 0;
`;
