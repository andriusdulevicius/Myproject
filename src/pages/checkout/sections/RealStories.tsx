import React from 'react';
import { StyledH2, StyledFlexWrapper, GreenText } from './BreakFree';
import { useQuery, mobile } from 'styles/breakpoints';
import {
  Container,
  ContainerSmall,
  FlexWrapper,
  H2,
  H3,
  H5,
  Image,
  SmallBox,
  Svg,
  SmallCard,
  SmallText,
} from 'components';
import { dark_green } from 'styles/colors';

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
    </Container>
  );
};
