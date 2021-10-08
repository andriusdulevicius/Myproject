import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';

import { white, dark_text } from 'styles/colors';
import { Container, FlexWrapper } from 'components';
import { Link } from 'gatsby';
import { Svg } from 'components/images/Svg';

const PAGES_LINKS = [
  { title: 'FAQ', link: '/fax' },
  { title: 'Contacts', link: '/contacts' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
  { title: 'Terms & Conditions', link: '/t&c' },
];

export const Navigation: React.FC<RouteComponentProps> = () => {
  const [burgerState, setBurgerState] = useState<boolean>(false);
  const { isMobile } = useQuery();

  return (
    <NavWrapper>
      <Container padding='0 1rem'>
        <FlexWrapper justifyContent='space-between' padding='0.5rem 0' maxWidth='80rem'>
          <Svg src='anxietless_logo' />
          {isMobile ? (
            <Svg src='burger_menu' />
          ) : (
            <FlexWrapper justifyContent='flex-end'>
              {PAGES_LINKS.map((p, index: number) => (
                <Link to={p.link} key={index}>
                  {p.title}
                </Link>
              ))}
            </FlexWrapper>
          )}
        </FlexWrapper>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: relative;
  z-index: 10;
  height: 3rem;
  background-color: ${white};
  box-shadow: 5px 5px 5px ${dark_text + '20'};

  a {
    text-decoration: none;
    padding-left: 1rem;
    color: ${dark_text};
    font-size: 0.9rem;
  }
`;
