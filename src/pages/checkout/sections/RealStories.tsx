import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { REAL_STORIES_DATA } from './utils';
import { RealStoryCard } from '../elements/RealStoryCard';
import { StyledContainer, StyledH2, StyledFlexWrapper, GreenText } from '../elements/Styles';
import { SmallText } from 'components';

export const RealStories: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledContainer>
      <StyledH2>
        <GreenText>Genuine people.</GreenText>Real recommendations
      </StyledH2>
      <SmallText>See what my lecturers and colleagues has to say about me:</SmallText>
      <StyledFlexWrapper gap={isMobile ? '0' : '1rem'}>
        {REAL_STORIES_DATA.map((story) => (
          <RealStoryCard key={story.id} story={story} />
        ))}
      </StyledFlexWrapper>
    </StyledContainer>
  );
};
