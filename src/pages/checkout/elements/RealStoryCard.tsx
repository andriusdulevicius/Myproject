import React from 'react';
import styled from 'styled-components';
import { Ratings } from './Ratings';
import { GreenText } from './Styles';
import { mobile } from 'styles/breakpoints';
import { FlexWrapper, SmallBox, SmallCard, SmallText, RegularText, TextWrapper } from 'components';
import { grey_white } from 'styles/colors';

interface Story {
  story: { name: string; age: number; address: string; rating: number; journeyLength: string; comment: string };
}

export const RealStoryCard: React.FC<Story> = ({ story }) => {
  const { name, age, address, rating, journeyLength, comment } = story;
  return (
    <StyledSmallCard padding='1rem'>
      <RegularText>
        <StyledGreenText>
          {name} {age}
        </StyledGreenText>
        <TextWrapper> ({journeyLength} week of journey)</TextWrapper>
      </RegularText>
      <StyledRegularText>{comment}</StyledRegularText>
      <FlexWrapper flexWrap='nowrap' justifyContent='start'>
        <SmallBox width='8rem'>
          <StyledSmallText fontSize='0.9rem'>{address}</StyledSmallText>
        </SmallBox>
        <Ratings rating={rating} />
      </FlexWrapper>
    </StyledSmallCard>
  );
};

const StyledRegularText = styled(RegularText)`
  font-style: italic;
`;
const StyledSmallText = styled(SmallText)`
  font-style: italic;
`;

const StyledGreenText = styled(GreenText)`
  font-weight: 700;
`;

const StyledSmallCard = styled(SmallCard)`
  @media ${mobile} {
    :first-child {
      border-bottom-left-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-bottom: 0.0625rem solid ${grey_white};
    }
    :not(:first-child):not(:last-child) {
      border-radius: 0rem;
      border-bottom: 0.0625rem solid ${grey_white};
    }
    :last-child {
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
    }
  }
`;
