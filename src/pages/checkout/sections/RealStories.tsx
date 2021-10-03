import React from 'react';
import { REAL_STORIES_DATA } from '../utils';
import { RealStoryCard } from '../elements/RealStoryCard';
import { ProgramParts } from '../elements/ProgramParts';
import { StyledContainer, StyledH2, StyledFlexWrapper, GreenText } from '../elements/Styles';
import { useQuery } from 'styles/breakpoints';
import { Image, SmallBox, SmallText } from 'components';

export const RealStories: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledContainer>
      <StyledH2>
        <GreenText>Real people.</GreenText>Real stories
      </StyledH2>
      <SmallText>See how we’ve helped others:</SmallText>
      <SmallBox maxWidth='14rem' width='70%' margin='0 auto'>
        <Image src='real_stories_cloud' />
      </SmallBox>
      <StyledFlexWrapper gap={isMobile ? '0' : '1rem'}>
        {REAL_STORIES_DATA.map((story) => (
          <RealStoryCard key={story.id} story={story} />
        ))}
      </StyledFlexWrapper>
      <StyledH2>How my plan will look like?</StyledH2>
      <SmallText>This program will consist of 3 main parts:</SmallText>
      <ProgramParts />
    </StyledContainer>
  );
};
