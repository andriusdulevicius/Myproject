import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { useRouter } from 'apis/history';
import { scroller } from 'react-scroll';
import { PrimaryButton, Container, FlexWrapper, Svg } from 'components';
import { white, dark_text, dark_violet } from 'styles/colors';

export const SecondaryNav: React.FC = () => {
  const { goToLanding } = useRouter();
  const { isMobile } = useQuery();

  const handleScroll = (section: string) => {
    scroller.scrollTo(section, {
      spy: true,
      smooth: true,
      duration: 800,
    });
  };

  return (
    <NavWrapper>
      <Container padding='0 1rem'>
        <FlexWrapper justifyContent='space-between' maxWidth='80rem'>
          <StyledSvg src='logo' onClick={goToLanding} />
          <PrimaryButton
            colorProp={dark_violet}
            margin='0.5rem 0'
            padding='0.6rem 0.8rem'
            width='auto'
            borderRadius='0.5rem'
            fontSize={isMobile ? '0.7rem' : '0.9rem'}
            onClick={() => handleScroll('contact_form')}
          >
            Contact Me
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
