import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { useRouter } from 'apis/history';
import { RouteComponentProps } from '@reach/router';
import { Link, withPrefix } from 'gatsby';
import { Container, AbsoluteBox, FlexWrapper, Svg, SmallBox, Image } from 'components';
import { white, grey_white, dark_text } from 'styles/colors';

const PAGES_LINKS = [
  { title: 'Home', link: '/' },
  { title: 'FAQ', link: '/faq' },
  { title: 'Contacts', link: '/contacts' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
  { title: 'Terms & Conditions', link: '/t&c' },
];

export const Navigation: React.FC<RouteComponentProps> = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const { isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <NavWrapper>
      <Container padding='0 1rem'>
        <FlexWrapper justifyContent='space-between' padding='0.5rem 0' maxWidth='80rem'>
          <StyledSvg src='logo2' onClick={goToLanding} />
          {isTablet ? (
            <Svg src='burger_menu' onClick={() => setOpenBurger((prevState) => !prevState)} />
          ) : (
            <FlexWrapper justifyContent='flex-end'>
              {PAGES_LINKS.map((p, index: number) => (
                <Link to={withPrefix(p.link)} key={index}>
                  {p.title}
                </Link>
              ))}
            </FlexWrapper>
          )}
          {isTablet && openBurger && (
            <StyledBurgerMenu>
              <FlexWrapper flexDirection='column' gap='0.5rem' padding='0.5rem'>
                {PAGES_LINKS.map((p, index: number) => (
                  <StyledSmallBox key={index}>
                    <Link to={p.link}>{p.title}</Link>
                  </StyledSmallBox>
                ))}
              </FlexWrapper>
            </StyledBurgerMenu>
          )}
        </FlexWrapper>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: relative;
  z-index: 10;
  max-height: 3rem;
  background-color: ${white};
  box-shadow: 5px 5px 5px ${dark_text + '20'};

  a {
    text-decoration: none;
    padding-left: 1rem;
    color: ${dark_text};
    font-size: 0.9rem;
  }
`;

const StyledBurgerMenu = styled(AbsoluteBox).attrs({
  top: '2.8rem',
  right: '-1rem',
  maxWidth: '10rem',
  backgroundColor: white,
})``;

const StyledSmallBox = styled(SmallBox).attrs({ width: '100%' })`
  border-bottom: 0.0625rem solid ${grey_white};
  a {
    padding: 0.5rem;
    text-align: right;
  }
`;

const StyledSvg = styled(Svg)`
  cursor: pointer;
`;
