import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, QuizBackground } from 'components';
import { LoadingCard } from './sections/LoadingCard';
import { TransparentNav } from 'layouts/navigations/TransparentNav';
import { grey_white } from 'styles/colors';

const Loader: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <LoaderSection>
      {!isMobile && <TransparentNav align='left' />}
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
