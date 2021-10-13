import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { LoadingCard } from './sections/LoadingCard';
import { TransparentNav } from 'layouts/navigations/TransparentNav';
import { QuizFooter } from 'layouts/footer/QuizFooter';
import { Container, QuizBackground } from 'components';
import { grey_white } from 'styles/colors';

const Loader: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <LoaderSection>
      {!isMobile && <TransparentNav align='left' />}
      <QuizBackground />
      <Container
        zIndex={2}
        padding='3rem 1rem 0'
        minHeight={isMobile ? '100vh' : 'calc(100vh - 8.5rem)'}
        textAlign='center'
      >
        <LoadingCard />
      </Container>
      {!isMobile && <QuizFooter />}
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.section`
  position: relative;
  background-color: ${grey_white};
`;
