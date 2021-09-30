import React from 'react';
import styled from 'styled-components';
import { AbsoluteBox } from '../wrappers/AbsoluteBox';
import { Image } from '../images/Image';
import { useQuery } from 'styles/breakpoints';
import { grey_white } from 'styles/colors';

export const HomeBackground = () => {
  const { isMobile } = useQuery();

  return (
    <StyledBackground>
      {!isMobile && (
        <AbsoluteBox left='0' top='3rem' zIndex={3}>
          <Image src='top_cloud_laptop' />
        </AbsoluteBox>
      )}
      {!isMobile && (
        <AbsoluteBox bottom='0' right='0' zIndex={3} width='10rem'>
          <Image src='bottom_cloud_laptop' width='' />
        </AbsoluteBox>
      )}
      <AbsoluteBox left={isMobile ? '0' : ''} right='0' bottom={isMobile ? '0' : '-7rem'}>
        <Image src={isMobile ? 'ellipse_mobile' : 'ellipse_laptop'} />
      </AbsoluteBox>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  background-color: ${grey_white + '25'};
`;
