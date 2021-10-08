import React from 'react';
import styled from 'styled-components';
import { CaptionText } from 'components';

export const QuizFooter: React.FC = () => {
  return (
    <StyledFooter>
      <CaptionText textAlign='center' margin='0'>
        &copy; 2020 Anxietless. All rights reserved.
      </CaptionText>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  z-index: 5;
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  height: 5.5rem;
  padding: 1rem 0;
`;
