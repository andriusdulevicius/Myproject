import React from 'react';
import styled from 'styled-components';
import { AbsoluteBox, Image } from 'components';

export const SummaryBackground: React.FC = () => (
  <StyledBackground>
    <AbsoluteBox right='0' top='90rem' zIndex={1}>
      <Image src='bottom_cloud_laptop' />
    </AbsoluteBox>
    <AbsoluteBox left='0' top='176.8rem' zIndex={1}>
      <Image src='left_bottom_cloud' />
    </AbsoluteBox>
    <AbsoluteBox right='10rem' top='35rem' zIndex={1}>
      <Image src='top_cloud' />
    </AbsoluteBox>
    <AbsoluteBox top='10rem' right='-5rem' zIndex={1}>
      <Image src='bottom_cloud_small' />
    </AbsoluteBox>
    <AbsoluteBox top='20rem' left='0' zIndex={1}>
      <Image src='left_top_cloud' />
    </AbsoluteBox>
  </StyledBackground>
);

const StyledBackground = styled.div`
  position: relative;
`;
