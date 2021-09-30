import { QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import React from 'react';
import styled from 'styled-components';
import { grey_white } from 'styles/colors';

const Calculating: React.FC = () => {
  return (
    <CalculatingSection>
      <QuizBackground />
      <LoadingCard />
    </CalculatingSection>
  );
};

export default Calculating;

const CalculatingSection = styled.div`
  padding-top: 2rem;
  background-color: ${grey_white};
  height: 100vh;
`;
