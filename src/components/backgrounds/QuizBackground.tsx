import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { AbsoluteBox, Image } from 'components';

export const QuizBackground = () => {
  const { isTablet } = useQuery();
  return (
    <StyledBackground>
      <AbsoluteBox zIndex={1} left={isTablet ? '-9rem' : '15rem'} top={isTablet ? '-1.5rem' : '6rem'} maxWidth='13rem'>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox zIndex={1} bottom='0' right='0' maxWidth={isTablet ? '8rem' : '18rem'}>
        <Image src={isTablet ? 'bottom_cloud_small' : 'bottom_cloud'} />
      </AbsoluteBox>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  min-height: 100%;
`;
