import React from 'react';
import { navigate } from '@reach/router';
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
  H1,
  H4Mobile,
  H4,
  RegularTextMobile,
  RegularText,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
} from 'components';

const LANDING_DATA = {
  title: 'Find your Inner Peace',
  subtitle: 'Calm mind. Better sleep. Confidence.',
  text: 'It might be difficult times, but you’re not alone. Answer this simple quiz and take your life back, free of anxiety, depression & stress.',
  caption: 'Start by selecting your gender',
};

const Landing = () => {
  const { isMobileS, isMobile } = useQuery();
  const { title, subtitle, text, caption } = LANDING_DATA;

  const handleQuiz = () => {
    navigate('/quiz/');
  };

  return (
    <LandingPage>
      <Navigation />

      <AbsoluteBox left={isMobile ? '0' : '14rem'} right='0' bottom={isMobile ? '0' : '-7rem'}>
        <Image src={isMobile ? 'ellipse_mobile' : 'ellipse_laptop'} />
      </AbsoluteBox>
      <Container maxWidth='75rem'>
        <FlexWrapper padding='0' flexDirection={isMobile ? 'column' : 'row-reverse'} flexWrap='no-wrap' gap='3rem'>
          <Container margin='4rem 0 0 0' padding='0' maxWidth={isMobile ? '18rem' : '37rem'}>
            <Image src='bgc_couple' />
          </Container>

          <Container maxWidth='37rem' width={isMobile ? '100%' : '45%'} padding='0'>
            {isMobile ? <H1Mobile textAlign='center'>{title}</H1Mobile> : <H1>{title}</H1>}
            {isMobile ? <H4Mobile textAlign='center'>{subtitle}</H4Mobile> : <H4>{subtitle}</H4>}
            {isMobile ? (
              <RegularTextMobile textAlign='center'>{text}</RegularTextMobile>
            ) : (
              <RegularText>{text}</RegularText>
            )}
            <TextBaseBold fontSize='0.9rem' textAlign={isMobile ? 'center' : 'left'}>
              {caption}
            </TextBaseBold>
            <FlexWrapper flexWrap='no-wrap' padding='0rem' gap='0.5rem' justifyContent={isMobile ? 'center' : 'start'}>
              <PrimaryButton colorProp={blue} margin='0' width='50%' onClick={handleQuiz}>
                Male
              </PrimaryButton>
              <PrimaryButton colorProp={orange} margin='0' width='50%' onClick={handleQuiz}>
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
  padding: 0;
  margin: 0 auto;
  height: 100vh;
`;
