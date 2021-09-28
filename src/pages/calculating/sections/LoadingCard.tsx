import React from 'react';
import { RegularTextMobile, H3Mobile, Svg, TextBaseBold, SmallTextMobile, ContainerSmall, SmallCard } from 'components';

export const LoadingCard = () => {
  const dynamicNumber = 12;

  return (
    <SmallCard margin='3rem auto' width='70%'>
      <H3Mobile>Calculating your results</H3Mobile>
      <RegularTextMobile>Here is breathing exercise while you wait.</RegularTextMobile>
      <ContainerSmall padding='4rem 0' textAlign='center'>
        <Svg src='seed_of_life' />
      </ContainerSmall>
      <TextBaseBold>{dynamicNumber}%</TextBaseBold>
      <SmallTextMobile>Calculating..</SmallTextMobile>
    </SmallCard>
  );
};
