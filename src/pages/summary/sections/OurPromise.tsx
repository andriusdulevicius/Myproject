import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { PsychologistPicture } from '../elements/PsychologistPicture';
import { ClaimButton } from '../elements/ClaimButton';
import { useQuery } from 'styles/breakpoints';
import { OUR_PROMISE_DATA } from '../utils';
import { FlexWrapper, H2, ContainerSmall, Image, RegularText, TextWrapper, CaptionText, SmallText } from 'components';
import { light_text } from 'styles/colors';

export const OurPromise: React.FC = () => {
  const { name, job_title, signature_src, texts, disclaimer } = OUR_PROMISE_DATA;
  const { isMobile } = useQuery();

  const SignatureSection = (
    <FlexWrapper padding='0'>
      <FlexWrapper flexDirection='column' gap='0' alignItems='flex-start' padding='0'>
        <TextWrapper fontSize='1.3rem'>{name}</TextWrapper>
        <RegularText margin='0.5rem 0'>{job_title}</RegularText>
      </FlexWrapper>
      <Image src={signature_src} />
    </FlexWrapper>
  );

  return (
    <StyledSection>
      <StyledFlexWrapper>
        <H2> Our promise </H2>
        <FlexWrapper flexDirection={isMobile ? 'column' : 'row'} alignItems='flex-start'>
          <ContainerSmall padding='0' margin='0' maxWidth='23rem'>
            <PsychologistPicture />
            {!isMobile && SignatureSection}
          </ContainerSmall>
          <ContainerSmall padding='0' margin='0' maxWidth='23rem'>
            {texts.map((text: string, index: number) => (
              <SmallText key={index} margin='0 0 1rem'>
                {text}
              </SmallText>
            ))}
          </ContainerSmall>
          {isMobile && SignatureSection}
        </FlexWrapper>
        <Element name='page-end'>
          <ClaimButton />
        </Element>
        <ContainerSmall maxWidth='50rem' textAlign={isMobile ? 'left' : 'center'}>
          <CaptionText color={light_text}>{disclaimer}</CaptionText>
        </ContainerSmall>
      </StyledFlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: 80rem;
`;

const StyledFlexWrapper = styled(FlexWrapper).attrs({
  flexDirection: 'column',
  gap: '0',
  maxWidth: '80rem',
})``;
