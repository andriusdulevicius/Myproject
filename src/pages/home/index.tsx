import React from 'react';
import styled from 'styled-components';
import { Navigation } from 'layouts/navigations/Navigation';
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
  const handleQuiz = () => {
    console.log('handling quiz');
  };

  return (
    <LandingPage>
      <Navigation />

      <AbsoluteBox bottom='0rem' left='0' width='100%'>
        <Image src='ellipse_mobile' />
      </AbsoluteBox>
      <AbsoluteBox top='8rem' right='2rem' left='2rem'>
        <Image src='bgc_couple' />
      </AbsoluteBox>
      <AbsoluteBox bottom='1rem'>
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
