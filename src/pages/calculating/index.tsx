import { Container, QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import React from 'react';
import styled from 'styled-components';
import { grey_white } from 'styles/colors';

const Calculating: React.FC = () => {
  return (
    <CalculatingSection>
      <QuizBackground />
      <Container paddingTop='3rem'>
        <LoadingCard />
      </Container>
    </CalculatingSection>
  );
};

export default Calculating;

const CalculatingSection = styled.div`
  position: relative;
  background-color: ${grey_white};
  height: 100vh;
`;
