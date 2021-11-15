import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, CaptionText } from 'components';

export const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFooter>
      <Container zIndex={999} padding='0 1rem'>
        <FlexWrapper padding='0.5rem 0' maxWidth='80rem'>
          <CaptionText> &copy; 2021 A | D development. All rights reserved.</CaptionText>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
  max-width: 80rem;
  height: 5.5rem;
`;
