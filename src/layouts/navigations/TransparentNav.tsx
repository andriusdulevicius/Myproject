import React from 'react';
import styled from 'styled-components';
import { Svg } from 'components/images/Svg';
import { Container } from 'components';

interface Props {
  align: string;
}

export const TransparentNav: React.FC<Props> = ({ align }) => {
  return (
    <Container padding='1rem' textAlign={align} backgroundColor='transparent'>
      <Svg src='anxietless_logo' />
    </Container>
  );
};
