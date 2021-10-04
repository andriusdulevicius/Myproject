import { Container } from 'components';
import { TransparentNav } from 'layouts/navigations/TransparentNav';
import React from 'react';

const Success: React.FC = () => {
  return (
    <>
      <TransparentNav align='center' />
      <Container>Success!</Container>
    </>
  );
};

export default Success;
