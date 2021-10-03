import React from 'react';
import { PLAN_PARTS, REAL_STORIES_DATA } from '../utils';
import { RealStoryCard } from '../elements/RealStoryCard';
import { StyledH2, StyledFlexWrapper, GreenText } from '../elements/Styles';
import { useQuery } from 'styles/breakpoints';
import { Container, ContainerSmall, FlexWrapper, Image, SmallBox, Svg, SmallText } from 'components';

export const RealStories = () => {
  const { isMobile } = useQuery();
  return (
    <Container textAlign={isMobile ? 'left' : 'center'} padding='0 1rem'>
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
      <FlexWrapper
        flexDirection={isMobile ? 'column' : 'row'}
        flexWrap='nowarp'
        maxWidth='80rem'
        alignItems={isMobile ? 'stretch' : 'center'}
      >
        {PLAN_PARTS.map(({ id, iconSrc, text }) => (
          <ContainerSmall maxWidth='25rem' margin='0'>
            <FlexWrapper key={id} flexWrap='nowarp' justifyContent='flex-start'>
              <SmallBox width='2.75rem'>
                <Svg src={iconSrc} />
              </SmallBox>
              <SmallText textAlign='left'>{text}</SmallText>
            </FlexWrapper>
          </ContainerSmall>
        ))}
      </FlexWrapper>
    </Container>
  );
};
