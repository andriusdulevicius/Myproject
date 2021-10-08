import React from 'react';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'styles/breakpoints';
import { white, dark_text, orange } from 'styles/colors';
import { PrimaryButton, Container, FlexWrapper } from 'components';
import { Svg } from 'components/images/Svg';
import { navigate } from '@reach/router';

interface Props {
  text: string;
}

export const SecondaryNav: React.FC<Props> = ({ text }) => {
  const { isMobile } = useQuery();

  const handleScroll = (section: string) => {
    scroller.scrollTo(section, {
      spy: true,
      smooth: true,
      duration: 800,
    });
  };

  const navigateToNextPage = async () => {
    text === 'Start Now' && handleScroll('page-end');
    text === 'Get my plan' && handleScroll('billing');
  };

  return (
    <NavWrapper>
      <Container padding='0 1rem'>
        <FlexWrapper justifyContent='space-between' maxWidth='80rem'>
          <Svg src='anxietless_logo' />
          <PrimaryButton
            colorProp={orange}
            margin='0.5rem 0'
            padding='0.6rem 0.8rem'
            width='auto'
            borderRadius='0.5rem'
            fontSize={isMobile ? '0.7rem' : '0.9rem'}
            onClick={navigateToNextPage}
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
