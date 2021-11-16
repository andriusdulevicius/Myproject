import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { LoadingCard } from './sections/LoadingCard';
import { Container } from 'components';
import { grey_white } from 'styles/colors';

const Loader: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <LoaderSection>
      <Container
        zIndex={2}
        padding='3rem 1rem 0'
        minHeight={isMobile ? '100vh' : 'calc(100vh - 3rem)'}
        textAlign='center'
      >
        <LoadingCard />
      </Container>
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.section`
  background-color: ${grey_white};
`;
