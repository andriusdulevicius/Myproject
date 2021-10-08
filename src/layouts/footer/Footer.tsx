import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, CaptionText } from 'components';

export const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFooter>
      <Container zIndex={999} padding='0 1rem'>
        <FlexWrapper justifyContent={!isMobile ? 'space-between' : 'center'} padding='0.5rem 0' maxWidth='80rem'>
          <CaptionText> &copy; 2020 Anxietless. All rights reserved.</CaptionText>
          {!isMobile && <CaptionText>Disclaimer: Results may vary from person to person.</CaptionText>}
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  height: 6.25rem;
  padding: 1rem 0;
`;
