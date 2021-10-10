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
      {!isTablet && (
        <AbsoluteBox left='0' top='3rem' zIndex={1} maxWidth='10rem'>
          <Image src='top_cloud_laptop' />
        </AbsoluteBox>
      )}
      {!isTablet && (
        <AbsoluteBox zIndex={2} right='0' bottom='0' maxWidth='20rem'>
          <Image src='bottom_cloud_laptop' width='' />
        </AbsoluteBox>
      )}
      <AbsoluteBox
        zIndex={1}
        bottom={isTablet ? '-3rem' : '0rem'}
        left={isTablet ? '0' : ''}
        right='0'
        maxWidth='55rem'
      >
        <Image src={isTablet ? 'ellipse_mobile' : 'ellipse_laptop'} />
      </AbsoluteBox>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  max-height: 100%;
  background-color: ${grey_white + '25'};
`;
