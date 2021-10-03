import React from 'react';
import { FlexWrapper, SmallBox, Svg } from 'components';

interface Props {
  rating: number;
}

export const Ratings: React.FC<Props> = ({ rating }) => {
  return (
    <FlexWrapper justifyContent='start' flexWrap='nowrap' gap='0.3rem'>
      {[...Array(rating)].map((val, index: number) => (
        <SmallBox minWidth='1.25rem' display='inline-block'>
          <Svg src='star' key={index} />
        </SmallBox>
      ))}
    </FlexWrapper>
  );
};
