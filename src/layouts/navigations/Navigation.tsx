import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';

import { white, dark_text } from 'styles/colors';
import { Container, FlexWrapper } from 'components';
import { Link } from 'gatsby';
import { Svg } from 'components/images/Svg';

export const Navigation: React.FC<RouteComponentProps> = () => {
  const [burgerState, setBurgerState] = useState<boolean>(false);
  const { isMobile } = useQuery();

  const PAGES_LINKS = [
    { title: 'FAQ', link: '/fax' },
    { title: 'Contacts', link: '/contacts' },
    { title: 'Privacy Policy', link: '/privacy-policy' },
    { title: 'Terms & Conditions', link: '/t&c' },
  ];

  return (
    <NavWrapper>
      <Container>
        <FlexWrapper justifyContent='space-between' padding='0.5rem 0'>
          <Svg src='anxietless_logo' />
          {isMobile ? (
            <Svg src='burger_menu' />
          ) : (
            <FlexWrapper padding='0'>
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
  background-color: ${white};

  a {
    text-decoration: none;
    color: ${dark_text};
    font-size: 0.9rem;
  }
`;
