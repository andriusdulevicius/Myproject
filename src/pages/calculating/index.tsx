import { QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import React from 'react';
import styled from 'styled-components';
import { grey_white } from './../../styles/colors';

const Calculating = () => {
  return (
    <CalculatingSection>
      <QuizBackground />
      <LoadingCard />
    </CalculatingSection>
  );
};

export default Calculating;

const CalculatingSection = styled.div`
  position: relative;
  padding-top: 3rem;
  margin: 0;
  background-color: ${grey_white};
  height: 100vh;
`;
