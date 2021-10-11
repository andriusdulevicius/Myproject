import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { useRouter } from 'apis/history';
import { scroller } from 'react-scroll';
import { PrimaryButton, Container, FlexWrapper, Svg } from 'components';
import { white, dark_text, orange } from 'styles/colors';

interface Props {
  text: string;
}

export const SecondaryNav: React.FC<Props> = ({ text }) => {
  const { goToLanding } = useRouter();
  const { isMobile } = useQuery();

  const handleScroll = (section: string) => {
    scroller.scrollTo(section, {
      spy: true,
      smooth: true,
      duration: 800,
    });
  };

  const scrollToButton = async () => {
    text === 'Start Now' && handleScroll('page-end');
    text === 'Get my plan' && handleScroll('billing');
  };

  return (
    <NavWrapper>
      <Container padding='0 1rem'>
        <FlexWrapper justifyContent='space-between' maxWidth='80rem'>
          <StyledSvg src='anxietless_logo' onClick={goToLanding} />
          <PrimaryButton
            colorProp={orange}
            margin='0.5rem 0'
            padding='0.6rem 0.8rem'
            width='auto'
            borderRadius='0.5rem'
            fontSize={isMobile ? '0.7rem' : '0.9rem'}
            onClick={scrollToButton}
          >
            {text}
          </PrimaryButton>
        </FlexWrapper>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 100;
  max-height: 3rem;
  width: 100%;
  background-color: ${white};
  box-shadow: 5px 5px 5px ${dark_text + '20'};
`;
const StyledSvg = styled(Svg)`
  cursor: pointer;
`;
