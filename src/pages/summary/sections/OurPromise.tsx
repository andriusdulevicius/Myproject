import React from 'react';
import styled from 'styled-components';
import { FlexWrapper, H2, ContainerSmall, Image, RegularText, TextWrapper } from 'components';

export const OurPromise = () => {
  return (
    <StyledFlexWrapper>
      <H2> Our promise </H2>
      <FlexWrapper>
        <ContainerSmall padding='0'>
          <Image src='amelia_marrow' />
          <FlexWrapper flexDirection='column'>
            <RegularText>
              <TextWrapper>Amelia Marrow</TextWrapper>
              Behavioral psychologist
            </RegularText>
            <Image src='amelia_signature' />
          </FlexWrapper>
        </ContainerSmall>
        <ContainerSmall padding='0'>
          <RegularText>
            We all have been there. Feeling so overwhelmed at work that it seems not possible to know where to begin.
            Always trying to keep up with the Joneses. Feeling lonely, stressed, and generally upset due to health,
            relationships, or the world's overall state.
          </RegularText>
          <RegularText>
            I have created this course with the sole purpose of helping people like myself learn natural and the most
            straightforward strategies for dealing with stress, reducing anxiety, and living life worry-free.
          </RegularText>
          <RegularText>
            Stress doesn't have to follow you every day. It can easily be managed with simple exercises.
          </RegularText>
        </ContainerSmall>
      </FlexWrapper>
    </StyledFlexWrapper>
  );
};

const StyledFlexWrapper = styled(FlexWrapper).attrs({ flexDirection: 'column', padding: '0' })``;
