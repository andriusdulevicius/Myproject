import React from 'react';
import styled from 'styled-components';
import { CaptionText } from 'components';

export const QuizFooter: React.FC = () => {
  return (
    <StyledFooter>
      <CaptionText margin='0'> &copy; 2020 Anxietless. All rights reserved.</CaptionText>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  /* position: absolute;
  bottom: 0; */
  z-index: 5;
  width: 100%;
  max-width: 80rem;
  height: 100px;
  padding: 1rem 0;
`;
