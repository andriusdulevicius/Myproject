import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import { TransparentNav } from 'layouts/navigations/TransparentNav';
import { grey_white } from 'styles/colors';
import { QuizFooter } from 'layouts/footer/QuizFooter';

const Loader: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <LoaderSection>
      {!isMobile && <TransparentNav align='left' />}
      <QuizBackground />
      <Container zIndex={2} padding='3rem 1rem' textAlign='center'>
        <LoadingCard />
      </Container>
      <QuizFooter />
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.div`
  position: relative;
  background-color: ${grey_white};
  height: 100%;
`;
