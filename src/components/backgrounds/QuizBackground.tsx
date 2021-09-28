import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { AbsoluteBox, Image } from 'components';

export const QuizBackground = () => {
  const { isMobile } = useQuery();
  return (
    <>
      <AbsoluteBox left={isMobile ? '-9rem' : '10rem'} top={isMobile ? '-1.5rem' : '6rem'} zIndex={1}>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox bottom='-1rem' right='-1rem' zIndex={1}>
        <Image src={isMobile ? 'bottom_cloud_small' : 'bottom_cloud'} />
      </AbsoluteBox>
    </>
  );
};
