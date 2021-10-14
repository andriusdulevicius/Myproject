import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { useQuery } from 'styles/breakpoints';
import { HomeBackground } from 'components/backgrounds/HomeBackground';
import { Footer } from 'layouts/footer/Footer';
import { Image, Container, H1, H4, RegularText, TextBaseBold, FlexWrapper, PrimaryButton, SmallBox } from 'components';
import { blue, orange } from 'styles/colors';

const LANDING_DATA = {
  title: 'Find your Inner Peace',
  subtitle: 'Calm mind. Better sleep. Confidence.',
  text: 'It might be difficult times, but you’re not alone. Answer this simple quiz and take your life back, free of anxiety, depression & stress.',
  caption: 'Start by selecting your gender',
};

const Landing: React.FC = () => {
  const { goToQuiz } = useRouter();
  const { isMobile, isTablet, isLaptop } = useQuery();
  const { title, subtitle, text, caption } = LANDING_DATA;

  return (
    <LandingPage>
      <HomeBackground />
      <Container
        zIndex={4}
        padding={isLaptop ? '2rem 1rem' : '8rem 0 0 '}
        minHeight={isMobile ? 'calc(100vh - 3rem)' : 'calc(100vh - 8.5rem)'}
      >
        <FlexWrapper flexDirection={isTablet ? 'column' : 'row-reverse'} gap={isTablet ? '0' : '3rem'}>
          <SmallBox width={isTablet ? '100%' : '40%'}>
            <Image src='bgc_couple_laptop' />
          </SmallBox>
          <Container maxWidth={isTablet ? '100%' : '50%'} textAlign={isTablet ? 'center' : 'left'}>
            <H1>{title}</H1>
            <H4>{subtitle}</H4>
            <RegularText>{text}</RegularText>
            <TextBaseBold fontSize='0.9rem' textAlign={isTablet ? 'center' : 'left'}>
              {caption}
            </TextBaseBold>
            <FlexWrapper padding='0rem' gap='0.5rem' justifyContent={isTablet ? 'center' : 'start'}>
              <StyledPrimaryButton colorProp={blue} onClick={goToQuiz}>
                Male
              </StyledPrimaryButton>
              <StyledPrimaryButton colorProp={orange} onClick={goToQuiz}>
                Female
              </StyledPrimaryButton>
            </FlexWrapper>
          </Container>
        </FlexWrapper>
      </Container>
      {!isMobile && <Footer />}
    </LandingPage>
  );
};

export default Landing;

const LandingPage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledPrimaryButton = styled(PrimaryButton).attrs({ margin: '0', width: '50%', maxWidth: '10rem' })``;
