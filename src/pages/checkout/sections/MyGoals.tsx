import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { MY_PERSONAL_DATA as data } from './utils';
import { StyledFlexWrapper, StyledH2, GreenText } from '../elements/Styles';
import { Container, ContainerSmall, FlexWrapper, H3, H5, Image, SmallBox, Svg, SmallCard, SmallText } from 'components';

export const MyGoals: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <Container textAlign={isMobile ? 'left' : 'center'} padding='2rem 1rem'>
      <StyledH2>
        What I would bring to <GreenText>YOU</GreenText>
      </StyledH2>
      <StyledFlexWrapper>
        {data.personal_info.map((j) => (
          <SmallCard key={j.id} margin='0'>
            <Image src={j.imgSrc} />
            <ContainerSmall margin='0' padding='1rem 2rem'>
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
