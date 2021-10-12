import React from 'react';
import { FlexWrapper, SmallBox, Svg } from 'components';

interface Props {
  rating: number;
}

export const Ratings: React.FC<Props> = ({ rating }) => {
  return (
    <FlexWrapper justifyContent='start' gap='0.3rem'>
      {[...Array(rating)].map((_, index: number) => (
        <SmallBox key={index} minWidth='1.25rem' display='inline-block'>
          <Svg src='star' />
        </SmallBox>
      ))}
    </FlexWrapper>
  );
};
