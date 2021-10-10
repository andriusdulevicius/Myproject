import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { GENUINE_PART_DATA } from './utils';
import { StyledContainer, GreenText, StyledH2 } from '../elements/Styles';
import {
  Container,
  ContainerSmall,
  FlexWrapper,
  SmallBox,
  SmallText,
  TextWrapper,
  CaptionText,
  Image,
} from 'components';

export const GenuinePeople: React.FC = () => {
  const { isMobile } = useQuery();
  const {
    name,
    job_title,
    intro_text,
    highlighted1,
    middle_text,
    green_text,
    highlighted2,
    conclusion_text,
    farewell,
  } = GENUINE_PART_DATA;

  return (
    <StyledContainer>
      <StyledH2>
        <GreenText>Genuine people.</GreenText> Genuine results
      </StyledH2>
      <Container maxWidth='50rem'>
        <FlexWrapper
          flexDirection={!isMobile ? 'row' : 'column'}
          justifyContent={!isMobile ? 'center' : 'start'}
          alignItems={isMobile ? 'center' : 'start'}
          gap={isMobile ? '0' : '1rem'}
        >
          <StyledContainerSmall>
            <FlexWrapper flexDirection={isMobile ? 'row' : 'column'} alignItems={isMobile ? 'center' : 'start'}>
              <StyledBox>
                <Image src='amelia_marrow' />
              </StyledBox>
              <SmallBox minWidth='60%'>
                <TextWrapper>{name}</TextWrapper>
                <CaptionText margin='0.4rem 0'>{job_title}</CaptionText>
              </SmallBox>
            </FlexWrapper>
            <SmallText>{intro_text}</SmallText>
          </StyledContainerSmall>
          <StyledContainerSmall>
            <SmallText margin='0 0 1rem'>
              <TextWrapper>{highlighted1}</TextWrapper>
              {middle_text}
            </SmallText>
            <SmallText>
              <TextWrapper>
                <GreenText>{green_text}</GreenText>
              </TextWrapper>
            </SmallText>
            <SmallText>
              <TextWrapper>{highlighted2}</TextWrapper>
            </SmallText>
            <SmallText>{conclusion_text}</SmallText>
            <SmallText>{farewell}</SmallText>
            <SmallText>{name.slice(0, name.indexOf(' '))}</SmallText>
          </StyledContainerSmall>
        </FlexWrapper>
      </Container>
    </StyledContainer>
  );
};

const StyledContainerSmall = styled(ContainerSmall).attrs({ maxWidth: '24rem', margin: '0' })``;

const StyledBox = styled(ContainerSmall).attrs({ maxWidth: '24rem', margin: '0', padding: '0' })`
  border-radius: 1rem;
  overflow: hidden;
`;
