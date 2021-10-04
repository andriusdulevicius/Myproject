import { Container, QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import React from 'react';
import styled from 'styled-components';
import { grey_white } from 'styles/colors';

const Loader: React.FC = () => {
  return (
    <LoaderSection>
      <QuizBackground />
      <Container paddingTop='3rem'>
        <LoadingCard />
      </Container>
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.div`
  position: relative;
  background-color: ${grey_white};
  height: 100vh;
`;
