import React from 'react';
import styled from 'styled-components';
import { OUR_PROMISE_DATA } from '../utils';
import { ContainerSmall, Image } from 'components';

export const PsychologistPicture: React.FC = () => {
  const { imgSrc } = OUR_PROMISE_DATA;
  return (
    <StyledBox>
      <Image src={imgSrc} />
    </StyledBox>
  );
};

const StyledBox = styled(ContainerSmall).attrs({ maxWidth: '24rem', margin: '0', padding: '0' })`
  border-radius: 1rem;
  overflow: hidden;
`;
