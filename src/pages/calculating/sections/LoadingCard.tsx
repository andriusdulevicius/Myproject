import { RegularTextMobile, H3Mobile, Svg, TextBaseBold, SmallTextMobile, ContainerSmall } from 'components';
import styled from 'styled-components';
import React from 'react';
import { white } from 'styles/colors';

export const LoadingCard = () => {
  const dynamicNumber = 12;

  return (
    <LoadingContainer>
      <H3Mobile>Calculating your results</H3Mobile>
      <RegularTextMobile>Here is breathing exercise while you wait.</RegularTextMobile>
      <ContainerSmall padding='4rem 0' textAlign='center'>
        <Svg src='seed_of_life' />
      </ContainerSmall>
      <TextBaseBold>{dynamicNumber}%</TextBaseBold>
      <SmallTextMobile>Calculating..</SmallTextMobile>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  padding: 1rem;
  margin: 3rem auto;
  width: 70%;
  max-width: 20rem;
  border-radius: 2rem;
  background-color: ${white};
  text-align: center;
`;
