import React from 'react';
import styled from 'styled-components';
import { AbsoluteBox } from '../wrappers/AbsoluteBox';
import { Image } from '../images/Image';
import { useQuery } from 'styles/breakpoints';
import { grey_white } from 'styles/colors';

export const HomeBackground = () => {
  const { isTablet } = useQuery();

  return (
    <StyledBackground>
      <AbsoluteBox left='0' top='3rem' zIndex={1} maxWidth='10rem'>
        <Image src='top_cloud_laptop' />
      </AbsoluteBox>

      <AbsoluteBox zIndex={20} right='4rem' bottom='5rem' maxWidth='20rem'>
        <Image src='bottom_cloud_laptop' width='' />
      </AbsoluteBox>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  max-height: 100%;
  background-color: ${grey_white + '25'};
`;
