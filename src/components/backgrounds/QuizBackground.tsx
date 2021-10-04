import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { AbsoluteBox, Image } from 'components';
import { grey_white } from 'styles/colors';

export const QuizBackground = () => {
  const { isMobile } = useQuery();
  return (
    <StyledBackground>
      <AbsoluteBox zIndex={1} left={isMobile ? '-9rem' : '10rem'} top={isMobile ? '-1.5rem' : '6rem'}>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox zIndex={1} bottom='0' right='-3rem'>
        <Image src={isMobile ? 'bottom_cloud_small' : 'bottom_cloud'} />
      </AbsoluteBox>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  background-color: ${grey_white};
`;
