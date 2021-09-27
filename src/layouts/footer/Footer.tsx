import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper } from 'components';
import { CaptionText } from './../../components/typography/Texts';

export const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justifyContent={!isMobile ? 'space-between' : 'center'} padding='0.5rem 0'>
          <CaptionText> &copy; 2020 Anxietless. All rights reserved.</CaptionText>
          {!isMobile && <CaptionText>Disclaimer: Results may vary from person to person.</CaptionText>}
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 3rem;
`;
