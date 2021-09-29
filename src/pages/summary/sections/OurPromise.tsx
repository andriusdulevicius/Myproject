import React from 'react';
import styled from 'styled-components';
import ClaimButton from '../elements/ClaimButton';
import { useQuery } from 'styles/breakpoints';
import { FlexWrapper, H2, ContainerSmall, Image, RegularText, TextWrapper, CaptionText, SmallText } from 'components';
import { light_text } from 'styles/colors';

export const OurPromise = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFlexWrapper>
      <H2> Our promise </H2>
      <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} alignItems='flex-start'>
        <ContainerSmall padding='0' margin='0' maxWidth='23rem'>
          <StyledBox>
            <Image src='amelia_marrow' />
          </StyledBox>
          <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} flexWrap='nowrap' padding='0'>
            <FlexWrapper flexDirection='column' gap='0' alignItems='flex-start' padding='0'>
              <TextWrapper fontSize='1.3rem'>Amelia Marrow</TextWrapper>
              <RegularText margin='0.5rem 0'>Behavioral psychologist</RegularText>
            </FlexWrapper>
            <Image src='amelia_signature' />
          </FlexWrapper>
        </ContainerSmall>
        <ContainerSmall padding='0' margin='0' maxWidth='23rem'>
          <SmallText margin='0 0 1rem'>
            We all have been there. Feeling so overwhelmed at work that it seems not possible to know where to begin.
            Always trying to keep up with the Joneses. Feeling lonely, stressed, and generally upset due to health,
            relationships, or the world's overall state.
          </SmallText>
          <SmallText>
            I have created this course with the sole purpose of helping people like myself learn natural and the most
            straightforward strategies for dealing with stress, reducing anxiety, and living life worry-free.
          </SmallText>
          <SmallText>
            Stress doesn't have to follow you every day. It can easily be managed with simple exercises.
          </SmallText>
        </ContainerSmall>
      </FlexWrapper>
      <ClaimButton />
      <ContainerSmall maxWidth='50rem'>
        <CaptionText color={light_text}>
          Disclaimer: Scores on the DASS-21 do not indicate a diagnosis. They simply provide a measure of severity based
          on the three assessed domains. To determine any potential diagnosis, discuss your results with your doctor or
          a qualified mental health provider. For more information check out our Terms and Conditions.
        </CaptionText>
      </ContainerSmall>
    </StyledFlexWrapper>
  );
};

const StyledFlexWrapper = styled(FlexWrapper).attrs({ flexDirection: 'column', padding: '0' })``;
const StyledBox = styled(ContainerSmall).attrs({ maxWidth: '24rem', margin: '0', padding: '0' })`
  border-radius: '1rem';
`;
