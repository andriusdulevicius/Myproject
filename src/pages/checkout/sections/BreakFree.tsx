import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { BREAK_FREE_DATA as data } from './utils';
import { StyledFlexWrapper, StyledH2, GreenText } from '../elements/Styles';
import { Container, ContainerSmall, FlexWrapper, H3, H5, Image, SmallBox, Svg, SmallCard, SmallText } from 'components';

export const BreakFree: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <Container textAlign={isMobile ? 'left' : 'center'} padding='0 1rem'>
      <StyledH2>
        <GreenText>Break free.</GreenText> Get your inner peace back
      </StyledH2>
      <StyledFlexWrapper>
        <StyledContainerSmall maxWidth='22rem'>
          <Image src='break_free' />
        </StyledContainerSmall>
        <StyledContainerSmall>
          {data.break_free_pros.map((p: string, index: number) => (
            <FlexWrapper key={index} justifyContent='start' maxWidth='22rem'>
              <SmallBox minWidth='1.25rem'>
                <Svg src='green_check_outline' />
              </SmallBox>
              <H5 fontWeight={700}>{p}</H5>
            </FlexWrapper>
          ))}
        </StyledContainerSmall>
      </StyledFlexWrapper>
      <StyledH2>
        It's your journey. It's all about <GreenText>YOU</GreenText>
      </StyledH2>
      <StyledFlexWrapper>
        {data.journey_info.map((j) => (
          <SmallCard key={j.id} margin='0'>
            <Image src={j.imgSrc} />
            <ContainerSmall margin='0' padding='1rem'>
              <H3>{j.title}</H3>
              <SmallText>{j.text}</SmallText>
            </ContainerSmall>
          </SmallCard>
        ))}
      </StyledFlexWrapper>
    </Container>
  );
};

const StyledContainerSmall = styled(ContainerSmall).attrs({ margin: '0', width: '50%' })``;
